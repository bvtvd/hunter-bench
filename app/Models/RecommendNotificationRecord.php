<?php

namespace App\Models;


class RecommendNotificationRecord extends BaseModel
{
    /**
     * 标记为已提醒
     * @return bool
     */
    public function markAsNoticed()
    {
        return $this->update(['status' => 1]);
    }
}
