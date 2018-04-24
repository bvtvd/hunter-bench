<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register', 'Auth\RegisterController@register');
Route::post('logout', 'Auth\LoginController@logout');
Route::post('login', 'Auth\LoginController@login')->name('login');

Route::post('auth/register', 'AuthController@register');
Route::post('auth/login', 'AuthController@login');
Route::group(['middleware' => 'jwt.auth'], function(){
    Route::get('auth/user', 'AuthController@user');
    Route::post('auth/logout', 'AuthController@logout');

    Route::group([ 'namespace' => 'Admin' ], function(){
        // 客户管理
        Route::resource('clients', 'ClientController');

        // 客户职位管理
        Route::group(['prefix' => 'jobs'], function(){
            Route::put('mark/success/{job}', 'ClientJobController@markSuccess');   // 标记为成功
            Route::put('mark/fail/{job}', 'ClientJobController@markFail'); // 标记为失败
            Route::put('mark/close/{job}', 'ClientJobController@markClose');  // 标记为关闭
            // 职位的一生
            Route::get('life', 'ClientJobController@life');
        });
        Route::resource('jobs', 'ClientJobController');

        // 人选管理
        Route::resource('candidates', 'CandidateController');

        // 推荐管理
        Route::group(['prefix' => 'recommends'], function(){
            // 设置提醒
            Route::post('remind', 'RecommendController@remind');
            // 确认面试
            Route::post('interview', 'RecommendController@interview');
            Route::put('mark/success/{recommend}', 'RecommendController@markSuccess');   // 标记为成功
            Route::put('mark/fail/{recommend}', 'RecommendController@markFail'); // 标记为失败
            Route::put('mark/close/{recommend}', 'RecommendController@markClose');  // 标记为关闭
            // 推荐的一生
            Route::get('life', 'RecommendController@life');
            // 推荐提醒
            Route::get('remind', 'RecommendController@getRemindList');

        });
        Route::resource('recommends', 'RecommendController');
    });


});
Route::group(['middleware' => 'jwt.refresh'], function(){
    Route::get('auth/refresh', 'AuthController@refresh');
});

/**
Route::group(['middleware' => 'jwt.auth'], function(){
    Route::get('articles', 'ArticleController@index');
    Route::get('articles/{article}', 'ArticleController@show');
    Route::post('articles', 'ArticleController@store');
    Route::put('articles/{article}', 'ArticleController@update');
    Route::delete('articles/{article}', 'ArticleController@delete');
});
*/
