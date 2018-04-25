<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRecommendNoticesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('recommend_notices', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('user_id')->comment('录入者id');
            $table->unsignedInteger('recommend_id')->comment('推荐表id');
            $table->timestamp('notice_at')->nullable()->comment('提醒时间');
            $table->tinyInteger('status')->nullable()->default(0)->comment('0. 未提醒  1. 已提醒');
            $table->string('title')->nullable()->comment('标题');
            $table->string('content', 500)->nullable()->comment('内容');
            $table->string('remark', 3000)->nullable()->comment('备注');
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
        Schema::dropIfExists('recommend_notices');
    }
}
