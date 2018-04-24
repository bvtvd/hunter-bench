<?php

namespace App\Http\Controllers\Admin;

use App\Events\RecommendCreated;
use App\Events\RecommendMarkClose;
use App\Events\RecommendMarkFail;
use App\Events\RecommendMarkSuccess;
use App\Http\Requests\Admin\RecommendStoreRequest;
use App\Http\Resources\Admin\Recommend\RecommendDetailResource;
use App\Http\Resources\Admin\Recommend\RecommendListCollection;
use App\Models\Candidate;
use App\Models\FollowRecord;
use App\Models\Recommend;
use App\Models\RecommendNotificationRecord;
use App\Notifications\Admin\RecommendRemind;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;

class RecommendController extends Controller
{
    /**
     * @api {get} /recommends    推荐列表
     * @apiName  推荐列表
     * @apiDescription  推荐列表
     * @apiGroup Recommends
     * @apiVersion 1.0.0
     *
     * @apiParam {Int}   [page]     跳转页数
     * @apiParam {Int} [limits]    每页条数
     */
    public function index(Request $request)
    {
        // 查询当前用户做过的推荐
        $recommends = Recommend::mine()
            ->candidateInfo()
            ->jobInfo()
            ->orderBy('updated_at', 'desc')
            ->paginate($request->input('limits', 10));
//        return $recommends;
        return new RecommendListCollection($recommends);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * @api {post} /recommends    添加推荐
     * @apiName  添加推荐
     * @apiDescription  添加推荐
     * @apiGroup Recommend
     * @apiVersion 1.0.0
     *
     ** @apiParam {Int}     job_id           职位id
     * @apiParam {Array}   candidate_id     人选id集合
     */
    public function store(RecommendStoreRequest $request)
    {
        $data = $request->only(['job_id', 'candidate_id']);

        // 检查是否推荐过了
        $records = Recommend::mine()
            ->where('job_id', $data['job_id'])
            ->whereIn('candidate_id', $data['candidate_id'])
            ->candidateInfo()
            ->get();
        if($records->isNotEmpty()){ // 有重复推荐
            return $this->responseFail("{$records[0]->candidate->name}({$records[0]->candidate->mobile})已经推荐给该职位过了");
        }

        // 添加推荐
        foreach($data['candidate_id'] as $cid){
            $recommend = Recommend::create([
                'user_id' => Auth::id(),
                'job_id' => $data['job_id'],
                'candidate_id' => $cid,
                'status' => 1
            ]);
            // 触发推荐事件
            event(new RecommendCreated($data['job_id'], $cid, $recommend, Auth::user()));
        }
        return $this->responseSuccess();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $recommend = Recommend::jobInfo()
            ->candidateInfo()
            ->find($id);
        return new RecommendDetailResource($recommend);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    /**
     * @api {post} /recommends/remind    设置推荐提醒
     * @apiName  设置推荐提醒
     * @apiDescription  设置推荐提醒
     * @apiGroup Recommend
     * @apiVersion 1.0.0
     *
     ** @apiParam {Int}     recommend_id           推荐id
     * @apiParam {Datetime}   time                 提醒时间
     * @apiParam {String}   title                  标题
     * @apiParam {String}   content                内容
     */
    public function remind(Request $request)
    {
        $data = $request->all();
        $record = RecommendNotificationRecord::create([
            'user_id' => Auth::id(),
            'recommend_id' => $data['recommend_id'],
            'notice_at' => $data['time'],
            'status' => 0,
            'title' => $data['title'],
            'content' => $data['content']
        ]);

        $data['record_id'] = $record->id;

        Auth::user()->notify((new RecommendRemind($data))->delay(Carbon::parse($request->input('time'))));
        return $this->responseSuccess();
    }

    /**
     * @api {post} /recommends/interview    确认面试
     * @apiName  确认面试
     * @apiDescription  确认面试
     * @apiGroup Recommend
     * @apiVersion 1.0.0
     *
     * @apiParam {Int}     recommend_id           推荐id
     * @apiParam {Int}      job_id                 职位id
     * @apiParam {Int}      candidate_id           人选id
     */
    public function interview(Request $request)
    {
        $data = $request->only(['job_id', 'recommend_id', 'candidate_id']);
        $candidate = Candidate::find($data['candidate_id']);
        $data['user_id'] = Auth::id();
        $data['type'] = FollowRecord::TYPE_INTERVIEW;
        $data['remark'] = "{$candidate->name}({$candidate->mobile})参加了该职位的面试";
        FollowRecord::create($data);
        return $this->responseSuccess();
    }


    /**
     * @api {put} /recommends/mark/success/:id    标记推荐为成功
     * @apiName  标记推荐为成功
     * @apiDescription  标记推荐为成功
     * @apiGroup Recommend
     * @apiVersion 1.0.0
     *
     */
    public function markSuccess(Request $request, Recommend $recommend)
    {
        if($recommend && $recommend->user_id == Auth::id()){
            $recommend->update(['status' => 3]);  // 改为成功状态
            # 触发成功事件
            event(new RecommendMarkSuccess(Auth::user(), $recommend));

            return $this->responseSuccess();
        }
        return $this->responseFail();
    }

    /**
     * @api {put} /recommends/mark/fail/:id    标记推荐为失败
     * @apiName  标记推荐为失败
     * @apiDescription  标记推荐为失败
     * @apiGroup Recommend
     * @apiVersion 1.0.0
     *
     */
    public function markFail(Request $request, Recommend $recommend)
    {
        if($recommend && $recommend->user_id == Auth::id()){
            $recommend->update(['status' => 2]);  // 改为成功状态
            # 触发失败事件
            event(new RecommendMarkFail(Auth::user(), $recommend));

            return $this->responseSuccess();
        }
        return $this->responseFail();
    }

    /**
     * @api {put} /recommends/mark/close/:id    标记推荐为关闭
     * @apiName  标记推荐为关闭
     * @apiDescription  标记推荐为关闭
     * @apiGroup Recommend
     * @apiVersion 1.0.0
     *
     */
    public function markClose(Request $request, Recommend $recommend)
    {
        if($recommend && $recommend->user_id == Auth::id()){
            $recommend->update(['status' => 4]);  // 改为成功状态
            #  触发关闭事件
            event(new RecommendMarkClose(Auth::user(), $recommend));

            return $this->responseSuccess();
        }
        return $this->responseFail();
    }

    /**
     * @api {get} /recommends/life    推荐的一生
     * @apiName  推荐的一生
     * @apiDescription  推荐的一生
     * @apiGroup Recommend
     * @apiVersion 1.0.0
     *
     * @apiParam {Int}     id           推荐id
     */
    public function life(Request $request)
    {
        $records = FollowRecord::where('recommend_id', $request->id)->orderBy('created_at', 'desc')->get();

        return $records;
    }

    /**
     * @api {get} /recommends/remind    获取提醒列表
     * @apiName  获取提醒列表
     * @apiDescription  获取提醒列表
     * @apiGroup Recommend
     * @apiVersion 1.0.0
     *
     * @apiParam {Int}     id           推荐id
     */
    public function getRemindList(Request $request)
    {
        $records = RecommendNotificationRecord::where('recommend_id', $request->id)->get();
        return $records;
    }
}
