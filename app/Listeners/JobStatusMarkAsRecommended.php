<?php

namespace App\Listeners;

use App\Events\RecommendCreated;
use App\Models\ClientJob;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class JobStatusMarkAsRecommended
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
        $event->job->update(['status' => ClientJob::STATUS_RECOMMENDED]);
    }
}
