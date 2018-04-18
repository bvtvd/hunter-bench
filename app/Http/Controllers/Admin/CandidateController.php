<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\Admin\CandidateStoreRequest;
use App\Http\Resources\Admin\Candidate\CandidatesListCollection;
use App\Models\Candidate;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;

class CandidateController extends Controller
{
    /**
     * @api {get} /candidates    人选列表
     * @apiName  人选列表
     * @apiDescription  人选列表
     * @apiGroup Candidates
     * @apiVersion 1.0.0
     *
     * @apiParam {String} [keyword]   搜索: 姓名, 手机号
     * @apiParam {Int}   [page]     跳转页数
     * @apiParam {Int} [limits]    每页条数
     */
    public function index(Request $request)
    {
        $keyword = $request->input('keyword');

        // 获取当前用户拥有的人选
        $candidates = Candidate::where('user_id', Auth::id())
            ->when($keyword, function($query) use ($keyword) {  // 搜索条件
                $query->where(function($query) use($keyword){
                    $query->where('name', 'like', '%'. $keyword . '%')
                    ->orWhere('mobile', 'like', '%'. $keyword . '%');
                });
            })
            ->orderBy('updated_at', 'desc')
            ->paginate($request->input('limits', 10));
        return new CandidatesListCollection($candidates);
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
     * @api {post} /candidates    新增人选
     * @apiName  新增人选
     * @apiDescription  新增人选
     * @apiGroup Candidates
     * @apiVersion 1.0.0
     *
     * @apiParam {String}   name                    姓名
     * @apiParam {String}   mobile                  手机号码
     * @apiParam {String}   [current_company]       公司
     * @apiParam {String}   [current_job]           职位
     * @apiParam {String}   [education]             最高学历
     * @apiParam {String}   [graduation_at]         毕业时间
     * @apiParam {String}   [school]                毕业院校
     * @apiParam {Int}      [status]                状态
     * @apiParam {string}   [remark]                备注
     */
    public function store(CandidateStoreRequest $request)
    {
        $data = $request->only(['name', 'mobile', 'current_company', 'current_job', 'education', 'graduation_at', 'school', 'status', 'remark']);
        $data['user_id'] = Auth::id();

        Candidate::create($data);
        return $this->responseSuccess();
    }

    /**
     * @api {get} /candidates/:id    人选详情
     * @apiName  人选详情
     * @apiDescription  人选详情
     * @apiGroup Candidates
     * @apiVersion 1.0.0
     *
     */
    public function show(Candidate $candidate)
    {
        return $candidate;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Candidate $candidate)
    {
        if($candidate->user_id != Auth::id()) return $this->responseFail('没有修改权限');

        $data = $request->only(['name', 'mobile', 'current_company', 'current_job', 'education', 'graduation_at', 'school', 'remark', 'status']);

        $candidate->update($data);
        return $this->responseSuccess();
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
