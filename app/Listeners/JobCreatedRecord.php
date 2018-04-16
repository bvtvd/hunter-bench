<?php

namespace App\Listeners;

use App\Events\JobCreated;
use App\Models\FollowRecord;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class JobCreatedRecord implements ShouldQueue
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
     * @param  JobCreated  $event
     * @return void
     */
    public function handle(JobCreated $event)
    {
        FollowRecord::create([
            'user_id' => $event->user->id,
            'job_id' => $event->job->id,
            'recommend_id' => 0,
            'type' => FollowRecord::TYPE_JOB_CREATED,
            'remark' => '添加了该职位',
        ]);
    }
}
