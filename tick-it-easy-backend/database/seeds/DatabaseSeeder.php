<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            VehicleSeeder::class,
            RouteSeeder::class,
            TicketSeeder::class,
            UserSeeder::class
        ]);
    }
}
