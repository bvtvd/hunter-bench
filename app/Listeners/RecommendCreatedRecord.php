<?php

namespace App\Listeners;

use App\Events\RecommendCreated;
use App\Models\FollowRecord;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class RecommendCreatedRecord
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
     * @param  RecommendCreated  $event
     * @return void
     */
    public function handle(RecommendCreated $event)
    {
        FollowRecord::create([
            'user_id' => $event->user->id,
            'job_id' => $event->job->id,
            'recommend_id' => $event->recommend->id,
            'type' => FollowRecord::TYPE_RECOMMEND,
            'remark' => "{$event->job->name}:推荐了{$event->candidate->name}({$event->candidate->mobile})",
        ]);
    }
}
