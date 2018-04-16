<?php

namespace App\Listeners;

use App\Events\JobMarkFail;
use App\Models\FollowRecord;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class JobMarkFailRecord
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
     * @param  JobMarkFail  $event
     * @return void
     */
    public function handle(JobMarkFail $event)
    {
        FollowRecord::create([
            'user_id' => $event->user->id,
            'job_id' => $event->job->id,
            'recommend_id' => 0,
            'type' => FollowRecord::TYPE_JOB_MARK_FAIL,
            'remark' => '职位跟进失败, 不开心￣へ￣',
        ]);
    }
}
