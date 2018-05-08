<?php

namespace App\TodoList;

use App\Models\BaseModel;

class TodoCategory extends BaseModel
{
    public function children()
    {
        return $this->hasMany(self::class, 'parent_id', 'id');
    }
}
