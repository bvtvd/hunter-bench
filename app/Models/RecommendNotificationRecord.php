<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RecommendNotificationRecord extends Model
{
    protected $guarded = [];

    /**
     * 标记为已提醒
     * @return bool
     */
    public function markAsNoticed()
    {
        return $this->update(['status' => 1]);
    }
}
