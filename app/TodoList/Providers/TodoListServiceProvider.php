<?php
/**
 * Created by PhpStorm.
 * User: Hans
 * Date: 2018/5/8
 * Time: 21:29
 */

namespace App\TodoList\Providers;


use App\TodoList\Repositories\interfaces\TodoCategoryRepositoryInterface;
use App\TodoList\Repositories\interfaces\TodoListRepositoryInterface;
use App\TodoList\Repositories\TodoCategoryRepository;
use App\TodoList\Repositories\TodoListRepository;
use Illuminate\Support\Facades\App;
use Illuminate\Support\ServiceProvider;

class TodoListServiceProvider extends ServiceProvider
{

    public function boot()
    {
        // Repository 基础绑定
        App::bind(TodoListRepositoryInterface::class, TodoListRepository::class);
        App::bind(TodoCategoryRepositoryInterface::class, TodoCategoryRepository::class);
    }
}