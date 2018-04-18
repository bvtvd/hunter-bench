<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class RecommendStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'job_id' => 'required|exists:client_jobs,id',
            'candidate_id' => 'required|array|min:1'
        ];
    }

    public function attributes()
    {
        return [
            'jon_id' => '职位',
            'candidate_id' => '人选'
        ];
    }
}
