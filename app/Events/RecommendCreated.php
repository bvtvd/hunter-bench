<?php

namespace App\Events;

use App\Models\Candidate;
use App\Models\ClientJob;
use App\Models\Recommend;
use App\User;
use Illuminate\Broadcasting\Channel;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class RecommendCreated implements ShouldQueue
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $job;
    public $candidate;
    public $recommend;
    public $user;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($job_id, $candidate_id, Recommend $recommend, User $user)
    {
        $this->job = ClientJob::find($job_id);
        $this->candidate = Candidate::find($candidate_id);
        $this->recommend = $recommend;
        $this->user = $user;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('channel-name');
    }
}
