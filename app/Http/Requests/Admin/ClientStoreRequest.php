<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class ClientStoreRequest extends FormRequest
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
            'name' => 'required|string|max:100'
        ];
    }

//    public function messages()
//    {
//        return [
//            'name.required' => '请输入客户名称',
//            'name.string' => '客户名称必须是有效字符串',
//            'name.max' => '客户名称不能长于100个字符'
//        ];
//    }

    public function attributes()
    {
        return [
            'name' => '客户名称'
        ];
    }
}
