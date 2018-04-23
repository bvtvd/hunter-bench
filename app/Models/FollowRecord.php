<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FollowRecord extends Model
{
    // type 类型常量
    const TYPE_RECOMMEND = 1;   // 推荐
    const TYPE_INTERVIEW = 2;   // 去参加了面试
    const TYPE_RECOMMEND_FAIL = 3;  //  推荐失败
    const TYPE_RECOMMEND_SUCCESS = 4;   // 推荐成功
    const TYPE_RECOMMEND_CLOSE = 9;   // 推荐关闭
    const TYPE_JOB_CREATED = 5; // 创建了一个职位
    const TYPE_JOB_MARK_SUCCESS = 6;    // 职位标记为成功
    const TYPE_JOB_MARK_FAIL = 7;   // 职位标记为失败
    const TYPE_JOB_MARK_CLOSE = 8;  // 职位标记为关闭

    protected $guarded = [];

}
