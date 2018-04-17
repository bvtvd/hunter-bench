<?php

namespace App\Http\Resources\Admin\Candidate;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\ResourceCollection;

class CandidatesListCollection extends ResourceCollection
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
                $item['name_mobile'] = $item['name']. '(' . $item['mobile'] . ')';
                $item['graduation_at'] =  $item['graduation_at'] ? Carbon::parse($item['graduation_at'])->format('Y-m-d') : '';

                return $item;
            }, $data);
        });

        return $this->collection;
    }
}
