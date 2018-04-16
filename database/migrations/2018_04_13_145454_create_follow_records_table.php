<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFollowRecordsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('follow_records', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('user_id')->comment('录入者id');
            $table->unsignedInteger('recommend_id')->comment('推荐表id');
            $table->tinyInteger('type')->comment('1. 推荐, 2. 面试,  3. 推荐人选失败, 4. 推荐人选成功  5. 创建了该职位   6, 职位标记为成功 7. 职位标记为失败,   8. 关闭该职位');
            $table->string('remark')->nullable()->comment('备注');
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
        Schema::dropIfExists('follow_records');
    }
}
