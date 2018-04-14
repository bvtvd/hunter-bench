<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCandidatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('candidates', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('user_id')->comment('录入者id');
            $table->string('name')->comment('人选姓名');
            $table->string('mobile')->comment('人选手机号');
            $table->string('current_company')->nullable()->comment('人选目前公司');
            $table->string('current_job')->nullable()->comment('人选目前职位');
            $table->string('education')->nullable()->comment('人选最高学历');
            $table->timestamp('graduation_at')->nullable()->comment('最高学历毕业时间');
            $table->string('school')->nullable()->comment('人选毕业院校');
            $table->string('remark')->nullable()->comment('备注');
            $table->tinyInteger('status')->nullable()->default(1)->comment('1. 在职  2. 离职');
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
        Schema::dropIfExists('candidates');
    }
}
