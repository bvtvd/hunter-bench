<?php

namespace App\Http\Resources\Admin\Recommend;

use Illuminate\Http\Resources\Json\ResourceCollection;

class RecommendListCollection extends ResourceCollection
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
                    'status' => $item['status'],
                    'job_id' => $item['job_id'],
                    'candidate_id' => $item['candidate_id'],
                    'created_at' => $item['created_at'],
                    'candidate_name' => data_get($item, 'candidate.name'),
                    'candidate_mobile' => data_get($item, 'candidate.mobile'),
                    'job_name' => data_get($item, 'job.name'),
                    'client' => data_get($item, 'job.client.name'),
                    'job_client' => $this->getJobClient($item),
                    'candidate_name_mobile' => $this->getCandidateNameMobile($item),
                ];
            }, $data);
        });
    }

    protected function getJobClient($item)
    {
        $name = data_get($item, 'job.name', '');
        if($client = data_get($item, 'job.client.name')){
            $name .= "({$client})";
        }
        return $name;
    }

    protected function getCandidateNameMobile($item)
    {
        $name = data_get($item, 'candidate.name', ''). "(". data_get($item, 'candidate.mobile') .")";
        return $name;
    }
}
