<?php

namespace App\Events;

use App\Models\Recommend;
use App\User;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class RecommendMarkSuccess
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $user;
    public $recommend;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(User $user, Recommend $recommend)
    {
        $this->user = $user;
        $this->recommend = $recommend;
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
