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
        'App\Events\JobCreated' => [
            'App\Listeners\JobCreatedRecord',
        ],
        'App\Events\JobMarkSuccess' => [
            'App\Listeners\JobMarkSuccessRecord',
        ],
        'App\Events\JobMarkFail' => [
            'App\Listeners\JobMarkFailRecord',
        ],
        'App\Events\JobMarkClose' => [
            'App\Listeners\JobMarkCloseRecord',
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
