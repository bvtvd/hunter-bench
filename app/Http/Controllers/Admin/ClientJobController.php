<?php

namespace App\Http\Controllers\Admin;

use App\Events\JobCreated;
use App\Events\JobMarkClose;
use App\Events\JobMarkFail;
use App\Events\JobMarkSuccess;
use App\Http\Requests\Admin\JobStoreRequest;
use App\Http\Resources\Admin\ClientJob\JobDetailResource;
use App\Http\Resources\Admin\ClientJob\JobListCollection;
use App\Models\ClientJob;
use App\Models\FollowRecord;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;

class ClientJobController extends Controller
{
    /**
     * @api {get} /jobs    职位列表
     * @apiName  职位列表
     * @apiDescription  职位列表
     * @apiGroup Jobs
     * @apiVersion 1.0.0
     *
     * @apiParam {Int}   [page]     跳转页数
     * @apiParam {Int} [limits]    每页条数
     */
    public function index(Request $request)
    {
        // 查询当前用户创建的所有职位
        $jobs = ClientJob::mine()
            ->clientInfo()
            ->orderBy('updated_at', 'desc')
            ->paginate($request->input('limits', 10));
        return new JobListCollection($jobs);
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
     * @api {post} /jobs    新增职位
     * @apiName  新增职位
     * @apiDescription  新增职位
     * @apiGroup Client-Jobs
     * @apiVersion 1.0.0
     *
     * @apiParam {Int} client_id   客户id
     * @apiParam {String}   name     职位名称
     * @apiParam {Int} [remark]        备注
     */
    public function store(JobStoreRequest $request)
    {
        $data = $request->only(['client_id', 'name', 'remark']);
        $data['user_id'] = Auth::id();

        // 不检查重复
        $job = ClientJob::create($data);
        event(new JobCreated(Auth::user(), $job));  // 出发职位添加成功事件
        return $this->responseSuccess();
    }

    /**
     * @api {get} /jobs/:id    职位详情
     * @apiName  职位详情
     * @apiDescription  职位详情
     * @apiGroup Client-Jobs
     * @apiVersion 1.0.0
     *
     */
    public function show($id)
    {
        $job = ClientJob::clientInfo()
            ->find($id);
        return new JobDetailResource($job);
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
     * @api {put} /jobs/mark/success/:id    标记职位为成功
     * @apiName  标记职位为成功
     * @apiDescription  标记职位为成功
     * @apiGroup Client-Jobs
     * @apiVersion 1.0.0
     *
     */
    public function markSuccess(Request $request, ClientJob $job)
    {
        if($job && $job->user_id == Auth::id()){
            $job->update(['status' => 4]);  // 改为成功状态
            # 触发成功事件
            event(new JobMarkSuccess(Auth::user(), $job));

            return $this->responseSuccess();
        }
        return $this->responseFail();
    }

    /**
     * @api {put} /jobs/mark/fail/:id    标记职位为失败
     * @apiName  标记职位为失败
     * @apiDescription  标记职位为失败
     * @apiGroup Client-Jobs
     * @apiVersion 1.0.0
     *
     */
    public function markFail(Request $request, ClientJob $job)
    {
        if($job && $job->user_id == Auth::id()){
            $job->update(['status' => 3]);  // 改为失败状态
            # 触发失败事件
            event(new JobMarkFail(Auth::user(), $job));

            return $this->responseSuccess();
        }
        return $this->responseFail();
    }

    /**
     * @api {put} /jobs/mark/close/:id    标记职位为关闭
     * @apiName  标记职位为关闭
     * @apiDescription  标记职位为关闭
     * @apiGroup Client-Jobs
     * @apiVersion 1.0.0
     *
     */
    public function markClose(Request $request, ClientJob $job)
    {
        if($job && $job->user_id == Auth::id()){
            $job->update(['status' => 5]);  // 改为关闭状态
            #  触发关闭事件
            event(new JobMarkClose(Auth::user(), $job));

            return $this->responseSuccess();
        }
        return $this->responseFail();
    }

    /**
     * @api {get} /jobs/life    职位的一生
     * @apiName  职位的一生
     * @apiDescription  职位的一生
     * @apiGroup Client-Jobs
     * @apiVersion 1.0.0
     *
     * @apiParam {Int}     id           职位id
     */
    public function life(Request $request)
    {
        $records = FollowRecord::where('job_id', $request->id)->orderBy('created_at', 'desc')->orderBy('id', 'desc')->get();

        return $records;
    }
}
