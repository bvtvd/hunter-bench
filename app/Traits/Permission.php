<?php

namespace App\Traits;

use Auth;

trait Permission
{

    /**
     * 检查人选是否属于当前用户
     * @return bool
     */
    public function isMine()
    {
        return $this->attributes['user_id'] == Auth::id();
    }

    /**
     * 当前用户所有 查询作用域
     * @param $query
     * @return mixed
     */
    public function scopeMine($query)
    {
        return $query->where('user_id', Auth::id());
    }
}