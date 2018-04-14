<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\User::truncate();

        $faker = \Faker\Factory::create();

        $password = \Illuminate\Support\Facades\Hash::make('123qwe');

        \App\User::create([
            'name' => 'admin',
            'email' => 'hans01@foxmail.com',
            'password' => $password
        ]);

        for($i = 0; $i < 10; ++$i){
            \App\User::create([
                'name' => $faker->name,
                'email' => $faker->email,
                'password' => $password
            ]);
        }
    }
}
