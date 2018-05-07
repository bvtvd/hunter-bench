<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTodoListsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('todo_lists', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('cate_id')->comment('分类id');
            $table->string('title')->comment('标题');
            $table->text('content')->nullable()->comment('详情');
            $table->unsignedInteger('user_id')->comment('创建者id');
            $table->tinyInteger('status')->nullable()->default(0)->comment('状态, 0-未完成, 1-已完成');
            $table->mediumInteger('sort')->nullable()->default(0)->comment('排序');
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
        Schema::dropIfExists('todo_lists');
    }
}
