<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class VehiclesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->makeVehicle('busz',$this->makeDate('2020.04.03.'),60);
        $this->makeVehicle('busz',$this->makeDate('2021.03.12.'),60);
        $this->makeVehicle('busz',$this->makeDate('2021.02.10.'),60);
        $this->makeVehicle('busz',$this->makeDate('2021.06.29.'),60);
        $this->makeVehicle('busz',$this->makeDate('2020.03.20.'),60);
        $this->makeVehicle('busz',$this->makeDate('2021.02.20.'),60);
        $this->makeVehicle('busz',$this->makeDate('2021.01.04.'),60);
        $this->makeVehicle('busz',$this->makeDate('2021.10.20.'),60);
        $this->makeVehicle('busz',$this->makeDate('2021.07.21.'),60);
        $this->makeVehicle('busz',$this->makeDate('2021.01.15.'),60);
        $this->makeVehicle('busz',$this->makeDate('2021.04.30.'),60);
        $this->makeVehicle('vonat',$this->makeDate('2020.05.20.'),300);
        $this->makeVehicle('vonat',$this->makeDate('2020.02.03.'),300);
        $this->makeVehicle('vonat',$this->makeDate('2021.08.12.'),300);
        $this->makeVehicle('vonat',$this->makeDate('2021.06.20.'),300);
        $this->makeVehicle('vonat',$this->makeDate('2021.04.30.'),300);
        $this->makeVehicle('vonat',$this->makeDate('2021.05.14.'),300);
        $this->makeVehicle('vonat',$this->makeDate('2021.09.10.'),300);
        $this->makeVehicle('vonat',$this->makeDate('2021.11.12.'),300);
        $this->makeVehicle('vonat',$this->makeDate('2021.10.14.'),300);
        $this->makeVehicle('repülő',$this->makeDate('2020.01.01.'),150);
        $this->makeVehicle('repülő',$this->makeDate('2020.02.04.'),150);
        $this->makeVehicle('repülő',$this->makeDate('2021.10.20.'),150);
        $this->makeVehicle('repülő',$this->makeDate('2021.05.07.'),150);
        $this->makeVehicle('repülő',$this->makeDate('2021.12.12.'),150);
        $this->makeVehicle('repülő',$this->makeDate('2021.10.30.'),150);
        $this->makeVehicle('repülő',$this->makeDate('2021.03.21.'),150);
        $this->makeVehicle('repülő',$this->makeDate('2021.07.01.'),150);
        $this->makeVehicle('repülő',$this->makeDate('2021.08.06.'),150);
    }

    function makeVehicle($type,$license,$capacity){
        DB::table('vehicles')->insert([
            'type' => $type,
            'license' => $license,
            'capacity' => $capacity,
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);
    }

    function makeDate($date){
        return Carbon::createFromFormat('Y.m.d.', $date);
    }
}
