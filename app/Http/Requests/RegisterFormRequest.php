<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterFormRequest extends FormRequest
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
            'name' => 'required|string|unique:users',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:6|max:20'
        ];
    }

    public function messages()
    {
        return [
            'name.required' => '用户名不能为空',
            'name.string' => '用户名必须为有效字符',
            'name.unique' => '此用户名已经被注册',
            'email.required' => '邮箱不能为空',
            'email.email' => '请填写有效邮箱',
            'email.unique' => '此邮箱已经被注册',
            'password.required' => '密码不能为空',
            'password.string' => '密码必须为有效字符',
            'password.min' => '请输入6-20位密码',
            'password.max' => '请输入6-20位密码',
        ];
    }
}
