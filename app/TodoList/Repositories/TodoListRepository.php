<?php
/**
 * Created by PhpStorm.
 * User: Hans
 * Date: 2018/5/7
 * Time: 23:22
 */

namespace App\TodoList\Repositories;

use App\Repositories\DbRepository;
use App\TodoList\Repositories\interfaces\TodoListRepositoryInterface;
use App\TodoList\TodoList;

class TodoListRepository extends DbRepository implements TodoListRepositoryInterface
{
    protected function model()
    {
        return TodoList::class;
    }


}