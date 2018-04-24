<?php

namespace App\Listeners;

use App\Events\JobMarkSuccess;
use App\Events\RecommendMarkSuccess;
use App\Models\ClientJob;
use App\Models\FollowRecord;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class RecommendMarkSuccessRecord
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
     * @param  RecommendMarkSuccess  $event
     * @return void
     */
    public function handle(RecommendMarkSuccess $event)
    {
        FollowRecord::create([
            'user_id' => $event->user->id,
            'job_id' => $event->recommend->job_id,
            'recommend_id' => $event->recommend->id,
            'candidate_id' => $event->recommend->candidate_id,
            'type' => FollowRecord::TYPE_RECOMMEND_SUCCESS,
            'remark' => "推荐 {$event->recommend->candidate->name}({$event->recommend->candidate->mobile}) 成功, 开瓶香槟庆祝吧♪(＾∀＾●)ﾉ",
        ]);


        // 更改职位状态
        $job = ClientJob::find($event->recommend->job_id);
        $job->update(['status' => 4]);  // 改为成功状态
        event(new JobMarkSuccess(\Auth::user(), $job));
    }
}
