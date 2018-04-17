<?php

if(!function_exists('isMobile')){
    /**
     * 检查手机号码
     * @param $string
     * @return bool
     */
    function isMobile($string)
    {
        return !!preg_match('/^1\d{10}$/', $string);
    }
}
