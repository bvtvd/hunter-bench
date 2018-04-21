<?php

namespace App\Notifications\Admin;

use App\Models\RecommendNotificationRecord;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\BroadcastMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class RecommendRemind extends Notification implements ShouldQueue
{
    use Queueable;

    protected $data;
    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['database', 'broadcast', 'mail'];
    }

    /**
     * 邮件通知
     * @param $notifiable
     * @return $this
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
                    ->subject($this->data['title'])
                    ->greeting("Dear {$notifiable->name}:")
                    ->line($this->data['content'])
                    ->line('have a nice day!');
    }

    /**
     * 广播通知
     * @param $notifiable
     * @return BroadcastMessage
     */
//    public function toBroadcast($notifiable)
//    {
//        return new BroadcastMessage($this->data);
//    }

    /**
     * 数据库通知
     * @param $notifiable
     * @return mixed
     */
//    public function toDatabase ($notifiable)
//    {
//        return $this->data;
//    }


    /**
     * 数据库和广播通知
     * @param $notifiable
     * @return mixed
     */
    public function toArray($notifiable)
    {
        return $this->data;
    }
}
