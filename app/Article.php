<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    /**
     * 批量赋值黑名单
     * @var array
     */
    protected $guarded = [];
}
