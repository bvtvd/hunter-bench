<?php

namespace App\Models;

use App\Traits\Permission;
use Illuminate\Database\Eloquent\Model;

class Recommend extends Model
{
    use Permission;

    protected $guarded = [];    // 批量赋值黑名单

    /**
     * 与人选关联
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function candidate()
    {
        return $this->belongsTo(Candidate::class, 'candidate_id', 'id');
    }

    /**
     * 人选查询作用域
     * @param $query
     * @return mixed
     */
    public function scopeCandidateInfo($query)
    {
        return $query->with('candidate');
    }
}
