<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMobileCountsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mobile_counts', function (Blueprint $table) {
            $table->increments('id');
            $table->string('mobile')->nullable()->comment('手机号');
            $table->integer('counts')->nullable()->default(0)->comment('次数');
            $table->timestamps();

            $table->unique('mobile');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mobile_counts');
    }
}
