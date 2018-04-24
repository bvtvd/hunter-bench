<?php

namespace App\Listeners;

use App\Events\RecommendMarkFail;
use App\Models\FollowRecord;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class RecommendMarkFailRecord
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
     * @param  RecommendMarkFail  $event
     * @return void
     */
    public function handle(RecommendMarkFail $event)
    {
        FollowRecord::create([
            'user_id' => $event->user->id,
            'job_id' => $event->recommend->job_id,
            'recommend_id' => $event->recommend->id,
            'candidate_id' => $event->recommend->candidate_id,
            'type' => FollowRecord::TYPE_RECOMMEND_FAIL,
            'remark' => "推荐失败: {$event->recommend->candidate->name}({$event->recommend->candidate->mobile})",
        ]);
    }
}
