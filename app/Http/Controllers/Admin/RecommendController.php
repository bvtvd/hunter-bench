<?php

namespace App\Http\Controllers\Admin;

use App\Events\RecommendCreated;
use App\Http\Requests\Admin\RecommendStoreRequest;
use App\Models\Candidate;
use App\Models\Recommend;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;

class RecommendController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        //
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
}
