<?php

namespace App\Listeners;

use App\Models\Notification;
use App\Models\RecommendNotificationRecord;
use App\Notifications\Admin\RecommendRemind;
use Carbon\Carbon;
use Illuminate\Notifications\Events\NotificationSent;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class LogNotification implements ShouldQueue
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
     * @param  NotificationSent  $event
     * @return void
     */
    public function handle(NotificationSent $event)
    {
        $this->updateRecommendNotificationRecordStatus($event);
    }

    /**
     * 更新推荐通知记录状态
     * @param $event
     */
    public function updateRecommendNotificationRecordStatus($event)
    {
        $notificationId = data_get($event->notification, 'id');
        $notification = Notification::find($notificationId);
        if($notification && ($notification->type == RecommendRemind::class)){
            $record_id = data_get(json_decode($notification->data, true), 'record_id');
            // 如果是推荐通知的话, 更新记录状态
            $record_id && RecommendNotificationRecord::find($record_id)->markAsNoticed();
        }
    }
}
