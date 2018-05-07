<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTodoCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('todo_categories', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 50)->comment('分类名称');
            $table->unsignedInteger('parent_id')->comment('父级id');
            $table->mediumInteger('sort')->nullable()->default(0)->comment('排序');
            $table->unsignedInteger('user_id')->comment('创建者id');
            $table->string('color', 10)->nullable()->default('#e9eaec')->comment('存储16进制颜色');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('todo_categories');
    }
}
