<?php

namespace App\Http\Controllers;

use App\Models\MobileCount;
use Illuminate\Http\Request;

class CommonController extends Controller
{
    public function admin()
    {
        return view('admin');
    }


    /**
     * @api {get} /mobile   获取手机号列表
     * @apiName  获取手机号列表
     * @apiDescription  获取手机号列表
     * @apiGroup Common
     * @apiVersion 1.0.0
     *
     */
    public function index(Request $request)
    {
        return MobileCount::paginate();
    }


    /**
     * @api {post} /mobile   添加手机号
     * @apiName  添加手机号
     * @apiDescription  添加手机号
     * @apiGroup Common
     * @apiVersion 1.0.0
     *
     * @apiParam {String} mobile   手机号
     */
    public function mobile(Request $request)
    {
        $mobileCount = MobileCount::firstOrCreate(['mobile' => $request->mobile]);
        $mobileCount->increment('counts');
        return $this->responseSuccess();
    }
}
