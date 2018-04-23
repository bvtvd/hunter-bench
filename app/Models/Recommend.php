<?php

namespace App\Models;

use App\Traits\Permission;
use Illuminate\Database\Eloquent\Model;

class Recommend extends Model
{
    use Permission;

    // 状态常量
    const STATUS_RECOMMEND = 1; //推荐中
    const STATUS_FAIL = 2;  // 失败
    const STATUS_SUCCESS = 3;   // 成功
    const STATUS_CLOSED = 4;    // 关闭

    public static $status = [
        1 => '推荐中',
        2 => '失败',
        3 => '成功',
        4 => '已关闭'
    ];

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

    /**
     * 与职位关联
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function job()
    {
        return $this->belongsTo(ClientJob::class, 'job_id', 'id');
    }

    /**
     * 职位查询作用域
     * @param $query
     * @return mixed
     */
    public function scopeJobInfo($query)
    {
        return $query->with('job.client');
    }
}
