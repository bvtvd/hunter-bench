<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddsCandidateIdToFollowRecordsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('follow_records', function (Blueprint $table) {
            $table->unsignedInteger('candidate_id')->nullable()->comment('人选id');
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
            $table->dropColumn(['candidate_id']);
        });
    }
}
