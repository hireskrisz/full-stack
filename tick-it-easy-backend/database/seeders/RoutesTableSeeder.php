<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Vehicle;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class RoutesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $buses = Vehicle::where('type','busz')->get();
        $trains = Vehicle::where('type','vonat')->get();
        $flights = Vehicle::where('type','repülő')->get();
        $tIndex = rand(0,count($trains)-1);
        $this->makeRoute('Budapest','Szolnok',$this->getTime('2021-12-02 12:00:00'),$this->getTime('2021-12-02 15:00:00'),'vonat',$trains[$tIndex]->id);
        $tIndex = rand(0,count($trains)-1);
        $this->makeRoute('Szolnok','Budapest',$this->getTime('2021-12-03 15:00:00'),$this->getTime('2021-12-02 18:00:00'),'vonat',$trains[$tIndex]->id);
        $bIndex = rand(0,count($buses)-1);
        $this->makeRoute('Szeged','Miskolc',$this->getTime('2021-02-30 11:30:00'),$this->getTime('2021-02-30 13:15:00'),'busz',$buses[$bIndex]->id);
        $bIndex = rand(0,count($buses)-1);
        $this->makeRoute('Miskolc','Szeged',$this->getTime('2021-03-02 13:15:00'),$this->getTime('2021-03-02 15:00:00'),'busz',$buses[$bIndex]->id);
        $tIndex = rand(0,count($trains)-1);
        $this->makeRoute('Debrecen','Budapest',$this->getTime('2021-04-10 13:30:00'),$this->getTime('2021-04-10 17:00:00'),'vonat',$trains[$tIndex]->id);
        $tIndex = rand(0,count($trains)-1);
        $this->makeRoute('Budapest','Debrecen',$this->getTime('2021-05-20 10:40:00'),$this->getTime('2021-05-20 15:13:00'),'vonat',$trains[$tIndex]->id);
        $bIndex = rand(0,count($buses)-1);
        $this->makeRoute('Pécs','Sopron',$this->getTime('2021-06-05 18:10:00'),$this->getTime('2021-06-05 20:20:00'),'busz',$buses[$bIndex]->id);
        $bIndex = rand(0,count($buses)-1);
        $this->makeRoute('Sopron','Pécs',$this->getTime('2021-03-30 12:00:00'),$this->getTime('2021-03-30 15:00:00'),'busz',$buses[$bIndex]->id);
        $bIndex = rand(0,count($buses)-1);
        $this->makeRoute('Budapest','Pécs',$this->getTime('2021-04-01 08:20:00'),$this->getTime('2021-04-01 11:00:00'),'busz',$buses[$bIndex]->id);
        $bIndex = rand(0,count($buses)-1);
        $this->makeRoute('Pécs','Budapest',$this->getTime('2021-05-24 10:40:00'),$this->getTime('2021-05-24 15:00:00'),'busz',$buses[$bIndex]->id);
        $bIndex = rand(0,count($buses)-1);
        $this->makeRoute('Győr','Sopron',$this->getTime('2021-08-09 14:24:00'),$this->getTime('2021-08-09 16:30:00'),'busz',$buses[$bIndex]->id);
        $bIndex = rand(0,count($buses)-1);
        $this->makeRoute('Sopron','Győr',$this->getTime('2021-10-11 06:40:00'),$this->getTime('2021-10-11 09:00:00'),'busz',$buses[$bIndex]->id);
        $tIndex = rand(0,count($trains)-1);
        $this->makeRoute('Szeged','Debrecen',$this->getTime('2021-11-12 09:35:00'),$this->getTime('2021-11-12 11:15:00'),'vonat',$trains[$tIndex]->id);
        $tIndex = rand(0,count($trains)-1);
        $this->makeRoute('Debrecen','Szeged',$this->getTime('2021-02-14 06:20:00'),$this->getTime('2021-02-14 10:10:00'),'vonat',$trains[$tIndex]->id);
        $bIndex = rand(0,count($buses)-1);
        $this->makeRoute('Kecskemét','Budapest',$this->getTime('2021-05-03 17:14:00'),$this->getTime('2021-05-03 19:00:00'),'busz',$buses[$bIndex]->id);
        $bIndex = rand(0,count($buses)-1);
        $this->makeRoute('Budapest','Kecskemét',$this->getTime('2021-06-11 13:40:00'),$this->getTime('2021-06-11 15:10:00'),'busz',$buses[$bIndex]->id);
        $bIndex = rand(0,count($buses)-1);
        $this->makeRoute('Eger','Szolnok',$this->getTime('2021-07-17 08:00:00'),$this->getTime('2021-07-17 11:20:00'),'busz',$buses[$bIndex]->id);
        $bIndex = rand(0,count($buses)-1);
        $this->makeRoute('Szolnok','Eger',$this->getTime('2021-09-05 06:20:00'),$this->getTime('2021-09-05 09:00:00'),'busz',$buses[$bIndex]->id);
        $tIndex = rand(0,count($trains)-1);
        $this->makeRoute('Székesfehérvár','Budapest',$this->getTime('2021-10-20 11:20:00'),$this->getTime('2021-10-20 14:05:00'),'vonat',$trains[$tIndex]->id);
        $tIndex = rand(0,count($trains)-1);
        $this->makeRoute('Budapest','Székesfehérvár',$this->getTime('2021-12-20 09:40:00'),$this->getTime('2021-12-20 11:00:00'),'vonat',$trains[$tIndex]->id);
        $fIndex = rand(0,count($flights)-1);
        $this->makeRoute('Budapest','München',$this->getTime('2021-01-21 12:10:00'),$this->getTime('2021-01-21 15:00:00'),'repülő',$flights[$fIndex]->id);
        $fIndex = rand(0,count($flights)-1);
        $this->makeRoute('München','Budapest',$this->getTime('2021-05-08 08:15:00'),$this->getTime('2021-05-08 11:10:00'),'repülő',$flights[$fIndex]->id);
        $fIndex = rand(0,count($flights)-1);
        $this->makeRoute('London','Budapest',$this->getTime('2021-03-01 16:30:00'),$this->getTime('2021-03-01 19:00:00'),'repülő',$flights[$fIndex]->id);
        $fIndex = rand(0,count($flights)-1);
        $this->makeRoute('Budapest','London',$this->getTime('2021-06-12 08:30:00'),$this->getTime('2021-06-12 13:10:00'),'repülő',$flights[$fIndex]->id);
        $fIndex = rand(0,count($flights)-1);
        $this->makeRoute('Budapest','Helsinki',$this->getTime('2021-10-30 12:15:00'),$this->getTime('2021-10-30 18:00:00'),'repülő',$flights[$fIndex]->id);
        $fIndex = rand(0,count($flights)-1);
        $this->makeRoute('Helsinki','Budapest',$this->getTime('2021-06-22 10:20:00'),$this->getTime('2021-06-22 16:00:00'),'repülő',$flights[$fIndex]->id);
        $fIndex = rand(0,count($flights)-1);
        $this->makeRoute('Budapest','Párizs',$this->getTime('2021-07-26 04:30:00'),$this->getTime('2021-07-26 8:00:00'),'repülő',$flights[$fIndex]->id);
        $fIndex = rand(0,count($flights)-1);
        $this->makeRoute('Párizs','Budapest',$this->getTime('2021-08-13 11:20:00'),$this->getTime('2021-08-13 16:15:00'),'repülő',$flights[$fIndex]->id);
        $fIndex = rand(0,count($flights)-1);
        $this->makeRoute('Budapest','Athén',$this->getTime('2021-09-23 15:20:00'),$this->getTime('2021-09-23 18:30:00'),'repülő',$flights[$fIndex]->id);
        $fIndex = rand(0,count($flights)-1);
        $this->makeRoute('Athén','Budapest',$this->getTime('2021-06-14 18:30:00'),$this->getTime('2021-06-14 21:15:00'),'repülő',$flights[$fIndex]->id);
        $fIndex = rand(0,count($flights)-1);
        $this->makeRoute('Budapest','Róma',$this->getTime('2021-08-15 14:40:00'),$this->getTime('2021-08-15 17:50:00'),'repülő',$flights[$fIndex]->id);
        $fIndex = rand(0,count($flights)-1);
        $this->makeRoute('Róma','Budapest',$this->getTime('2021-06-03 09:45:00'),$this->getTime('2021-06-03 12:30:00'),'repülő',$flights[$fIndex]->id);
        $fIndex = rand(0,count($flights)-1);
        $this->makeRoute('Budapest','Madrid',$this->getTime('2021-09-31 14:30:00'),$this->getTime('2021-09-31 17:00:00'),'repülő',$flights[$fIndex]->id);
        $fIndex = rand(0,count($flights)-1);
        $this->makeRoute('Madrid','Budapest',$this->getTime('2021-12-10 08:40:00'),$this->getTime('2021-12-10 12:50:00'),'repülő',$flights[$fIndex]->id);
    }

    function makeRoute($from,$to,$startTime,$endTime,$vehicleType,$vehicleID){
        DB::table('routes')->insert([
            'from' => $from,
            'to' => $to,
            'startTime' => $startTime,
            'endTime' => $endTime,
            'vehicleType' => $vehicleType,
            'vehicleID' => $vehicleID,
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
    }

    function getTime($time){
        return Carbon::createFromFormat('Y-m-d H:i:s', $time);
    }
}
