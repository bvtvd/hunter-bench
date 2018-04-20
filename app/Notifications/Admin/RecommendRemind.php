<?php

namespace App\Notifications\Admin;

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
    public function toBroadcast($notifiable)
    {
        $data = $this->data;
        return new BroadcastMessage($data);
    }

    /**
     * 数据库通知
     * @param $notifiable
     * @return mixed
     */
    public function toDatabase ($notifiable)
    {
//        return $this->data;
        \Log::info('database data ==>  ', $this->data);
        return [
            'title' => $this->data['title'],
            'content' => $this->data['content'],
        ];
    }


    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        \Log::info('array data ==>  ', $this->data);
        return $this->data;
    }
}
