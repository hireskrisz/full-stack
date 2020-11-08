<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use App\Route;

class TicketSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $routes = Route::all();
        foreach($routes as $route){
            $randomPrice = intval(rand(1000,10000)/100) * 100;
            $onDiscount = rand(0,1);
            $this->makeTicket($randomPrice,$route->id,$onDiscount,true);
        }
    }
    
    function makeTicket($price,$routeID,$onDiscount,$available){
        DB::table('tickets')->insert([
            'price' => $price,
            'routeID' => $routeID,
            'onDiscount' => $onDiscount,
            'available' => $available,
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
    }
}
