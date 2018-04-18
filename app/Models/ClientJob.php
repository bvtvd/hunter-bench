<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Auth;

class ClientJob extends Model
{
    const STATUS_SEARCHING = 1;
    const STATUS_RECOMMENDED = 2;
    const STATUS_FAILED = 3;
    const STATUS_SUCCESS = 4;
    const STATUS_CLOSED = 5;


    protected $guarded = []; // 批量赋值黑名单

    // 追加字段
    protected $appends = ['recommend_number'];

    /**
     * 与客户关联
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function client()
    {
        return $this->belongsTo(Client::class, 'client_id', 'id');
    }

    /**
     * 客户关联作用域
     * @param $query
     * @return mixed
     */
    public function scopeClientInfo($query)
    {
        return $query->with('client');
    }


    /**
     * 查询当前用户所属作用域
     * @param $query
     * @return mixed
     */
    public function scopeMine($query)
    {
        return $query->where('user_id', Auth::id());
    }

    public function getRecommendNumberAttribute()
    {
        return Recommend::where('job_id', $this->attributes['id'])->count();
    }
}
