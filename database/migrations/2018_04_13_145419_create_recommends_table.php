<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRecommendsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('recommends', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('user_id')->comment('录入者id');
            $table->unsignedInteger('job_id')->comment('职位id');
            $table->unsignedInteger('candidate_id')->comment('人选id');
            $table->tinyInteger('status')->nullable()->default(1)->comment('状态:1. 推荐中,   2. 失败, 3. 成功, 4. 关闭');
            $table->timestamps();

            $table->index('job_id');
            $table->foreign('job_id')->references('id')->on('client_jobs')
                ->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('recommends');
    }
}
