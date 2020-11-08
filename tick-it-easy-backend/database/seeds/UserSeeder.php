<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->makeUser('Peti','peter.erdosi2@gmail.com',bcrypt('alkfejl123'),'',true);
        $this->makeUser('user1','bigbyceps88@gmail.com',bcrypt('12345678'),'',false);
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
