<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class JobStoreRequest extends FormRequest
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
            'client_id' => 'required|exists:clients,id',
            'name' => 'required|string|max:100'
        ];
    }

    public function attributes()
    {
        return [
            'client_id' => '客户',
            'name' => '职位名称'
        ];
    }
}
