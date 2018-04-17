<?php
/**
 * Created by PhpStorm.
 * User: Hans
 * Date: 2018/4/18
 * Time: 0:04
 */

namespace App\Extensions;


use Illuminate\Validation\Validator;

class MyValidator extends Validator
{
    /**
     * 手机号码验证
     * @param $attribute
     * @param $value
     * @return bool
     */
    public function validateMobile($attribute, $value)
    {
        if(is_null($value)){
            return false;
        }
        return isMobile($value);
    }
}