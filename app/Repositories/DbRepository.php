<?php
/**
 * Created by PhpStorm.
 * User: Hans
 * Date: 2018/5/7
 * Time: 21:24
 */

namespace App\Repositories;


use Illuminate\Database\Eloquent\Model;

abstract class DbRepository implements RepositoryInterface
{
    protected $model;
    protected $app;

    /**
     * 构造函数
     * DbRepository constructor.
     */
    public function __construct()
    {
        $this->app = app();
        $this->initModel(); // 初始化model
    }

    /**
     * 返回model, 带命名空间
     * @return mixed
     */
    abstract protected function model();

    /**
     * 初始化model
     * @throws \Exception
     */
    protected function initModel()
    {
        $this->model = $this->app->make($this->model());
        if(!$this->model instanceof Model){
            throw new \Exception('model must be instance of Eloquent model');
        }
    }

    /**
     * 获取全部数据
     * @param array $map
     * @param array $with
     * @return mixed
     */
    public function all($map = [], $with = [])
    {
        return $this->model->where($map)->with($with)->all();
    }

    /**
     * 获取单个数据
     * @param $id
     * @param array $map
     * @param array $with
     * @return mixed
     */
    public function show($id, $map = [], $with = [])
    {
        return $this->model->where($map)->with($with)->find($id);
    }

    /**
     * 获取分页数据
     * @param int $limits
     * @param array $map
     * @param array $with
     * @return mixed
     */
    public function index($limits = 8, $map = [], $with = [])
    {
        return $this->model->where($map)->with($with)->paginate($limits);
    }

    /**
     * 新增数据
     * @param array $data
     * @return mixed
     */
    public function create(Array $data)
    {
        return $this->model->create($data);
    }

    /**
     * 更新数据
     * @param $id
     * @param array $data
     * @return mixed
     */
    public function update($id, Array $data)
    {
        return $this->model->where($this->model->getKeyName(), $id)->update($data);
    }

    /**
     * 删除模型
     * @param $ids
     * @param array $map
     * @return mixed
     */
    public function destroy($ids, $map = [])
    {
        return $this->model->where($map)->destroy($ids);
    }

    /**
     * 删除模型
     * @param $map
     * @return mixed
     */
    public function delete($map)
    {
        return $this->model->where($map)->delete();
    }

}