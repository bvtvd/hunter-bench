<?php

namespace App\Http\Resources\Admin\Client;

use Illuminate\Http\Resources\Json\ResourceCollection;

class ClientListCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
//        return parent::toArray($request);
        return $this->collection;
    }

//    public function with($request)
//    {
////        return [
////            'meta' => [
////                'per_page' => intval($this->perPage())
////            ]
////        ];
//    }
}
