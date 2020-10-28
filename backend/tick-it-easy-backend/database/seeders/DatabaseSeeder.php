<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        for($i=0;$i<10;++$i){
            DB::table('tickets')->insert([
                'price' => rand(100,1000),
                'from' => Str::random(10),
                'to' => Str::random(10),
                'type' => Str::random(4),
                'validDate' =>Str::random(10)
            ]);
        }
    }
}
