<?php

namespace App\Listeners;

use App\Events\JobMarkSuccess;
use App\Models\FollowRecord;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class JobMarkSuccessRecord
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  JobMarkSuccess  $event
     * @return void
     */
    public function handle(JobMarkSuccess $event)
    {
        FollowRecord::create([
            'user_id' => $event->user->id,
            'job_id' => $event->job->id,
            'recommend_id' => 0,
            'type' => FollowRecord::TYPE_JOB_MARK_SUCCESS,
            'remark' => '职位跟进成功, 开心♪(＾∀＾●)ﾉ',
        ]);
    }
}
