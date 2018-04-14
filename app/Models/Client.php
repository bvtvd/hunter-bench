<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    /**
     * 批量赋值黑名单
     * @var array
     */
    protected $guarded = [];
}
