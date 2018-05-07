<?php

namespace App\Models;

use App\Traits\Permission;
use Carbon\Carbon;

class Candidate extends BaseModel
{
    use Permission;


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
