<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->makeUser('Erdősi Péter','peter@erdosi.com',bcrypt('12345678'),'',true);
        $this->makeUser('Hires Krisztián','hires@krisztian.com',bcrypt('12345678'),'',true);
    }

    function makeUser($name,$email,$password,$bucket,$isAdmin){
        DB::table('users')->insert([
            'name' => $name,
            'email' => $email,
            'password' => $password,
            'bucket' => $bucket,
            'isAdmin' => $isAdmin,
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
    }
}
