<?php

namespace App\Http\Resources\Admin\Recommend;

use App\Models\Recommend;
use Illuminate\Http\Resources\Json\Resource;

class RecommendDetailResource extends Resource
{
    public $statusValue = [
        1 => '推荐中',
        2 => '失败',
        3 => '成功',
        4 => '已关闭'
    ];

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'job' => data_get($this, 'job.name'),
            'client' => data_get($this, 'job.client.name'),
            'candidate_name' => data_get($this, 'candidate.name'),
            'candidate_mobile' => data_get($this, 'candidate.mobile'),
            'created_at' => $this->created_at->toDateTimeString(),
            'status_value' => Recommend::$status[$this->status],
            'status' => $this->status,
        ];
    }
}
