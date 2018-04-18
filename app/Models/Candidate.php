<?php

namespace App\Models;

use App\Traits\Permission;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Candidate extends Model
{
    use Permission;

    protected $guarded = [];    // 批量赋值黑名单

    /**
     * 毕业时间修改器
     * @param $value
     * @return string
     */
    public function setGraduationAtAttribute($value)
    {
        $this->attributes['graduation_at'] = $value ? Carbon::parse($value)->format('Y-m-d') : null;
    }



}
