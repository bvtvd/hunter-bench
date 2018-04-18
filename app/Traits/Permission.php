<?php

namespace App\Traits;


trait Permission
{

    /**
     * 检查人选是否属于当前用户
     * @return bool
     */
    public function isMine()
    {
        return $this->attributes['user_id'] == \Auth::id();
    }
}