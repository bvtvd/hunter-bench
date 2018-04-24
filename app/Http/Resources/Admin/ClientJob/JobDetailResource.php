<?php

namespace App\Http\Resources\Admin\ClientJob;

use App\Models\ClientJob;
use Illuminate\Http\Resources\Json\Resource;

class JobDetailResource extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'client' => data_get($this, 'client.name'),
            'name' => $this->name,
            'status' => $this->status,
            'status_value' => ClientJob::$status[$this->status],
            'remark' => $this->remark,
            'created_at' => $this->created_at->toDateTimeString(),
            'recommend_number' => $this->recommend_number
        ];
    }
}
