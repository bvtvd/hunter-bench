<?php

namespace App\Listeners;

use App\Events\JobMarkClose;
use App\Models\FollowRecord;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class JobMarkCloseRecord
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
     * @param  JobMarkClose  $event
     * @return void
     */
    public function handle(JobMarkClose $event)
    {
        FollowRecord::create([
            'user_id' => $event->user->id,
            'job_id' => $event->job->id,
            'recommend_id' => 0,
            'type' => FollowRecord::TYPE_JOB_MARK_CLOSE,
            'remark' => '职位关闭',
        ]);
    }
}
