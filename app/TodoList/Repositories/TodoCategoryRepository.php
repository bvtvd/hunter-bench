<?php
/**
 * Created by PhpStorm.
 * User: Hans
 * Date: 2018/5/7
 * Time: 23:22
 */

namespace App\TodoList\Repositories;


use App\Repositories\DbRepository;
use App\TodoList\Repositories\interfaces\TodoCategoryRepositoryInterface;
use App\TodoList\TodoCategory;
use Illuminate\Support\Facades\Auth;

class TodoCategoryRepository extends DbRepository implements TodoCategoryRepositoryInterface
{
    protected function model()
    {
        return TodoCategory::class;
    }

    /**
     * 获取分类层级列表
     * @param int $parent_id
     * @return mixed
     */
    public function tree($parent_id = 0)
    {
        return $this->model
            ->with('children')
            ->whereIn('user_id', [0, Auth::id()])
            ->where('parent_id', $parent_id)
            ->get();
    }
}