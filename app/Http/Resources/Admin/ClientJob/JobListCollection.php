<?php

namespace App\Http\Resources\Admin\ClientJob;

use Illuminate\Http\Resources\Json\ResourceCollection;

class JobListCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return $this->transform($this->collection, function($collection){
            $data = $collection->toArray();
            return array_map(function ($item){
                return [
                    'id' => $item['id'],
                    'name' => $item['name'],
                    'client_name' => data_get($item, 'client.name'),
                    'created_at' => $item['created_at']
                ];
            }, $data);
        });
    }

}
