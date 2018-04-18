<?php

namespace App\Providers;

use App\Extensions\MyValidator;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\Resource;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);
        Resource::withoutWrapping();    // 禁用顶层数据包裹
        Carbon::setLocale('zh');   // 时间处理本地化
        $this->validatorExtend();   // 验证扩展
    }

    protected function validatorExtend()
    {
//        Validator::extend('mobile', 'User@passes');
        $this->app['validator']->resolver(function ($translator, $data, $rules, $messages){
            return new MyValidator($translator, $data, $rules, $messages);
        });
    }


    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
