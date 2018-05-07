<?php
/**
 * Created by PhpStorm.
 * User: Hans
 * Date: 2018/5/7
 * Time: 23:22
 */

namespace App\TodoList\Repositories;


use App\Repositories\DbRepository;
use App\TodoList\TodoCategoty;

class TodoCategoryRepository extends DbRepository
{
    protected function model()
    {
        return TodoCategoty::class;
    }

}