<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddsJobIdToFollowRecordsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('follow_records', function (Blueprint $table) {
            $table->unsignedInteger('job_id')->after('user_id')->nullable()->comment('职位id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('follow_records', function (Blueprint $table) {
            $table->dropColumn(['job_id']);
        });
    }
}
