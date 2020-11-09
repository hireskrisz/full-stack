<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Route;
use App\Models\Vehicle;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class RoutesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Route::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $vechicles = Vehicle::all();
        $routes = Route::all();
        return response()->json([
            'vehicles' => $vechicles,
            'routes' => $routes
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $route = new Route;
        $vehicleIDs = Vehicle::select('id')->get()->toArray();
        $routes = Route::all();
        $vehicles = Vehicle::select('id','type','license')->get()->toArray();
        if(!$request->exists('from') || !$request->exists('to') || !$request->exists('startTime')
        || !$request->exists('startTime') || !$request->exists('endTime') || !$request->exists('vehicleID')
        ){
            return response()->json(['success'=>false,'message'=>'The from (string), to (string), startTime (Y-m-d H:i:s), endTime (Y-m-d H:i:s), vehicleID (integer) field is required']);
        }
        else if(!$this->validateDate($request->input('startTime'))){
            return response()->json(['success'=>false,'message'=>'The startTime field must be valid date (Y-m-d h:i:s)']);
        }
        else if(!$this->validateDate($request->input('endTime'))){
            return response()->json(['success'=>false,'message'=>'The endTime field must be valid date (Y-m-d h:i:s)']);
        }
        else if(!in_array(array('id'=>$request->input('vehicleID')),$vehicleIDs)){
            return response()->json(['success'=>false,'message'=>'The vehicleID isn\'t in the database','vehicles: '=>$vehicles]);
        }
        else{
            foreach($routes as $route){
                if($route->from == $request->input('from') && $route->to == $request->input('to')){
                    return response()->json(['success'=>false,'message'=>'That route is already exists in the database']);
                }
            }
            $route->from = $request->input('from');
            $route->to = $request->input('to');
            $route->startTime =  Carbon::createFromFormat('Y-m-d H:i:s',$request->input('startTime'));
            $route->endTime = Carbon::createFromFormat('Y-m-d H:i:s',$request->input('endTime'));
            $route->activePassengers = 0;
            $route->vehicleID = intval($request->input('vehicleID'));
            $route->save();
            return response()->json([
                'success'=>true,
                'message'=>'A new route is created with: '
                                    .$request->input('from').
                                    ', to: '.$request->input('to').
                                    ', startTime: '.$request->input('startTime').
                                    ', endTime: '.$request->input('endTime').
                                    ', vehicleID: '.$request->input('vehicleID')
                                    ]);
        }   
    }

    function validateDate($date){
        if(preg_match('/\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/',$date)){
            $firstHalf = explode(' ',$date)[0];
            $year = intval(explode('-',$firstHalf)[0]);
            $month = intval(explode('-',$firstHalf)[1]);
            $day = intval(explode('-',$firstHalf)[2]);
            $secondHalf = explode(' ',$date)[1];
            $hour = explode(':',$secondHalf)[0];
            $minute = explode(':',$secondHalf)[1];
            $second = explode(':',$secondHalf)[2];
            if(checkdate($month,$day,$year) && $hour < 24 && $minute < 60 && $second < 60){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Route::where('id',$id)->first();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $editRoute = Route::where('id',$id)->first();
        $vechicles = Vehicle::all();
        $routes = Route::all();
        return response()->json([
            'editRoute' => $editRoute,
            'vehicles' => $vechicles,
            'routes' => $routes
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $route = Route::where('id',$id)->first();
        $vehicleIDs = Vehicle::select('id')->get()->toArray();
        $routes = Route::where('id','!=',$id)->get();
        $vehicles = Vehicle::select('id','type','license')->get()->toArray();
        if(!$request->exists('from') || !$request->exists('to') || !$request->exists('startTime')
        || !$request->exists('startTime') || !$request->exists('endTime') || !$request->exists('vehicleID')
        ){
            return response()->json(['success'=>false,'message'=>'The from (string), to (string), startTime (Y-m-d H:i:s), endTime (Y-m-d H:i:s), vehicleID (integer) field is required']);
        }
        else if(!$this->validateDate($request->input('startTime'))){
            return response()->json(['success'=>false,'message'=>'The startTime field must be valid date (Y-m-d h:i:s)']);
        }
        else if(!$this->validateDate($request->input('endTime'))){
            return response()->json(['success'=>false,'message'=>'The endTime field must be valid date (Y-m-d h:i:s)']);
        }
        else if(!in_array(array('id'=>$request->input('vehicleID')),$vehicleIDs)){
            return response()->json(['success'=>false,'message'=>'The vehicleID isn\'t in the database','vehicles: '=>$vehicles]);
        }
        else{
            foreach($routes as $route){
                if($route->from == $request->input('from') && $route->to == $request->input('to')){
                    return response()->json(['success'=>false,'message'=>'That route is already exists in the database']);
                }
            }
            DB::table('routes')->where('id',$id)->update([
                'from' => $request->input('from'),
                'to' => $request->input('to'),
                'startTime' =>  Carbon::createFromFormat('Y-m-d H:i:s',$request->input('startTime')),
                'endTime' =>  Carbon::createFromFormat('Y-m-d H:i:s',$request->input('endTime')),
                'activePassengers' => $route->activePassengers,
                'vehicleID' => intval($request->input('vehicleID'))
            ]);
            return response()->json([
                'success'=>true,
                'message'=>'An id='.$id.' route is changed to: '
                                    .$request->input('from').
                                    ', to: '.$request->input('to').
                                    ', startTime: '.$request->input('startTime').
                                    ', endTime: '.$request->input('endTime').
                                    ', vehicleID: '.$request->input('vehicleID')
                                    ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $route = Route::where('id',$id)->first();
        if($route != null){
            $route->delete();
            return response()->json(['message'=> 'The id='.$id.' Route is deleted successfully','success'=>true]);
        }
        else{
            return response()->json(['message'=> 'The id='.$id.' Route isn\'t in the database','success'=>false]);
        }
    }
}
