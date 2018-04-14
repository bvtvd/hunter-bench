<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * 请求接口成功响应
     * @param array $data
     * @param string $url
     * @param string $msg
     * @return \Illuminate\Http\JsonResponse
     */
    public function responseSuccess($data = [], $url = '', $msg = '操作成功')
    {
        return response()->json([
            'data' => $data,
            'url' => $url,
            'msg' => $msg
        ]);
    }

    /**
     * @param string $msg
     * @param string $url
     * @param array $data
     * @return \Illuminate\Http\JsonResponse
     */
    public function responseFail($msg = '操作失败', $url = '', $data = [])
    {
        return response()->json([
            'data' => $data,
            'url' => $url,
            'msg' => $msg
        ], 400);
    }
}
