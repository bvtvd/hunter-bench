<?php

namespace App\Listeners;

use App\Events\RecommendMarkClose;
use App\Models\FollowRecord;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class RecommendMarkCloseRecord
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
     * @param  RecommendMarkClose  $event
     * @return void
     */
    public function handle(RecommendMarkClose $event)
    {
        FollowRecord::create([
            'user_id' => $event->user->id,
            'job_id' => $event->recommend->job_id,
            'recommend_id' => $event->recommend->id,
            'candidate_id' => $event->recommend->candidate_id,
            'type' => FollowRecord::TYPE_RECOMMEND_CLOSE,
            'remark' => "推荐关闭: {$event->recommend->candidate->name}({$event->recommend->candidate->mobile})",
        ]);
    }
}
