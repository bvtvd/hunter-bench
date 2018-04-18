<?php

namespace App\Providers;

use Illuminate\Support\Facades\Event;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        'App\Events\JobCreated' => [    // 职位添加
            'App\Listeners\JobCreatedRecord',
        ],
        'App\Events\JobMarkSuccess' => [    // 职位标记成功
            'App\Listeners\JobMarkSuccessRecord',
        ],
        'App\Events\JobMarkFail' => [   // 职位标记失败
            'App\Listeners\JobMarkFailRecord',
        ],
        'App\Events\JobMarkClose' => [  // 职位标记关闭
            'App\Listeners\JobMarkCloseRecord',
        ],
        'App\Events\RecommendCreated' => [  // 推荐添加
            'App\Listeners\RecommendCreatedRecord', // 添加跟进记录
            'App\Listeners\JobStatusMarkAsRecommended', // 修改职位状态(改为以推荐)
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        //
    }
}
