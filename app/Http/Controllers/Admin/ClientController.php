<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\Admin\ClientStoreRequest;
use App\Http\Resources\Admin\Client\ClientListCollection;
use App\Http\Resources\Admin\Client\ClientListResource;
use App\Models\Client;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;

class ClientController extends Controller
{
    /**
     * @api {get} /clients    客户列表
     * @apiName  客户列表
     * @apiDescription  客户列表
     * @apiGroup Clients
     * @apiVersion 1.0.0
     *
     * @apiParam {String} [keyword]   客户名称搜索
     * @apiParam {Int}   [page]     跳转页数
     * @apiParam {Int} [limits]    每页条数
     */
    public function index(Request $request)
    {
        $keyword = $request->input('keyword');
        // 获取当前用户拥有的客户
        $clients = Client::where('user_id', Auth::id())
            ->when($keyword, function($query) use ($keyword){
                $query->where('name', 'like', '%'. $keyword . '%');
            })
            ->orderBy('created_at', 'desc')
            ->paginate($request->input('limits', 10));
        return new ClientListCollection($clients);
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
     * @api {post} /clients    新增客户
     * @apiName  新增客户
     * @apiDescription  新增客户
     * @apiGroup Clients
     * @apiVersion 1.0.0
     *
     * @apiParam {String} name  客户名称
     * @apiParam {String} [remark]  备注
     */
    public function store(ClientStoreRequest $request)
    {
        $data = $request->only(['name', 'remark']);
        $data['user_id'] = Auth::id();

        if(Client::where('user_id', $data['user_id'])->where('name', $data['name'])->first()){
            return $this->responseFail('该客户已经存在');
        }

        Client::create($data);

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
