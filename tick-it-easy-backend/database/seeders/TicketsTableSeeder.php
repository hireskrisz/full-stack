<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use App\Models\Route;

class TicketsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $routes = Route::all();
        $busyIndexes = [];
        for($i=0;$i<20;++$i){
            $randIndex = rand(0,count($routes)-1);
            while(in_array($randIndex,$busyIndexes)){
                $randIndex = rand(0,count($routes)-1);
            }
            $randomPrice = intval(rand(1000,10000)/100) * 100;
            $onDiscount = rand(0,1);
            $this->makeTicket($randomPrice,$routes[$randIndex]->id,$onDiscount);
            array_push($busyIndexes,$randIndex);
        }
    }

    function makeTicket($price,$routeID,$onDiscount){
        $createdAt =  Carbon::createFromFormat('Y-m-d H:i:s',Carbon::now());
        $updatedAt = Carbon::createFromFormat('Y-m-d H:i:s',Carbon::now());
        $createdAt->setTimezone('Europe/Paris');
        $updatedAt->setTimezone('Europe/Paris');
        DB::table('tickets')->insert([
            'price' => $price,
            'routeID' => $routeID,
            'onDiscount' => $onDiscount,
            'created_at' => $createdAt,
            'updated_at' => $updatedAt,
        ]);
    }
}
