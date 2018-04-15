<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateClientJobsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('client_jobs', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('user_id')->comment('录入者id');
            $table->unsignedInteger('client_id')->comment('客户id');
            $table->string('name')->comment('职位名称');
            $table->tinyInteger('status')->nullable()->default(1)->comment('状态, 1. 寻找人选 2. 推荐中  3. 失败   4. 成功  5. 关闭');
            $table->text('remark')->nullable()->comment('备注');
            $table->timestamps();

            $table->index('client_id');
            $table->foreign('client_id')->references('id')->on('clients')
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
        Schema::dropIfExists('client_jobs');
    }
}
