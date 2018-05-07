<?php

namespace App\TodoList;

use App\Models\BaseModel;

class TodoList extends BaseModel
{
    const STATUS_UNFINISHED = 0;
    const STATUS_FINISHED = 1;

    public static $status = [
        0 => '未完成',
        1 => '已完成',
    ];

    /**
     * 未完成查询作用域
     * @param $query
     * @return mixed
     */
    public function scopeUnfinished($query)
    {
        return $query->where('status', 0);
    }

    /**
     * 已完成查询作用域
     * @param $query
     * @return mixed
     */
    public function scopeFinished($query)
    {
        return $query->where('status', 1);
    }
}
