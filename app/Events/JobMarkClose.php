<?php

namespace App\Events;

use App\Models\ClientJob;
use App\User;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class JobMarkClose
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $user;
    public $job;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(User $user, ClientJob $job)
    {
        $this->user = $user;
        $this->job = $job;
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
