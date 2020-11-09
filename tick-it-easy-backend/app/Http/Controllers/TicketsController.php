<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ticket;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use App\Models\Route;

class TicketsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Ticket::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $routes = Route::all();
        $tickets = Ticket::all();
        return response()->json([
            'routes' => $routes,
            'tickets' => $tickets
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
        $ticket = new Ticket;
        $routes = Route::select('id','from','to')->get()->toArray();
        $availableRoutes = [];
        $busyIds = Ticket::select('routeID')->get()->toArray();
        $routeIDs = [];
        $booleans = ['true','false'];
        foreach($routes as $route) {
            if(!in_array(array('routeID'=>$route['id']),$busyIds)){
                array_push($routeIDs,$route['id']);
                array_push($availableRoutes,$route);
            };
        }
        if(!$request->exists('price') || !$request->exists('routeID') || !$request->exists('onDiscount')){
            return response()->json(['success'=>false,'message'=>'The price (integer), routeID (valid routeID), onDiscount(boolean) field is required']);
        }
        else if(!is_numeric($request->input('price'))){
            return response()->json(['success'=>false,'message'=>'The price field must be a number']);
        }
        else if(!in_array(intval($request->input('routeID')),$routeIDs)){
            return response()->json(['success'=>false,'message'=>'The type routeID must be one of the available id\'s:','routes: ' =>$availableRoutes]);
        }
        else if(!in_array($request->input('onDiscount'),$booleans)){
            return response()->json(['success'=>false,'message'=>'The onDiscount field must be boolean '.$request->input('onDiscount')]);
        }
        else{
            $ticket->price = intval($request->input('price'));
            $ticket->routeID = intval($request->input('routeID'));
            $ticket->onDiscount =  boolval($request->input('onDiscount'));
            $ticket->available = true;
            $ticket->save();
            return response()->json([
                'success'=>true,
                'message'=>'A new ticket is created with price: '
                                    .$request->input('price').
                                    ', routeID: '.$request->input('routeID').
                                    ', onDiscount: '.$request->input('onDiscount')
                                    ]);
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
        return Ticket::where('id',$id)->first();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $editTicket = Ticket::where('id',$id)->first();
        $routes = Route::all();
        $tickets = Ticket::all();
        return response()->json([
            'editTicket' => $editTicket,
            'routes' => $routes,
            'tickets' => $tickets
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
        $ticket = Ticket::where('id',$id)->first();
        if($ticket==null){
            return response()->json(['success'=>false,'message'=>'The id='.$id.' ticket isn\'t exist in the database']);
        }
        $routes = Route::select('id','from','to')->get()->toArray();
        $availableRoutes = [];
        $busyIds = Ticket::select('routeID')->get()->toArray();
        $routeIDs = [];
        $booleans = ['true','false'];
        foreach($routes as $route) {
            if(!in_array(array('routeID'=>$route['id']),$busyIds)){
                array_push($routeIDs,$route['id']);
                array_push($availableRoutes,$route);
            };
        }
        if(!$request->exists('price') || !$request->exists('routeID') || !$request->exists('onDiscount')){
            return response()->json(['success'=>false,'message'=>'The price (integer), routeID (valid routeID), onDiscount(boolean) field is required']);
        }
        else if(!is_numeric($request->input('price'))){
            return response()->json(['success'=>false,'message'=>'The price field must be a number']);
        }
        else if(!in_array(intval($request->input('routeID')),$routeIDs)){
            return response()->json(['success'=>false,'message'=>'The type routeID must be one of the available id\'s:','routes: ' =>$availableRoutes]);
        }
        else if(!in_array($request->input('onDiscount'),$booleans)){
            return response()->json(['success'=>false,'message'=>'The onDiscount field must be boolean '.$request->input('onDiscount')]);
        }
        else{
            $ticket->price = intval($request->input('price'));
            $ticket->routeID = intval($request->input('routeID'));
            $ticket->onDiscount =  boolval($request->input('onDiscount'));
            $ticket->available = true;
            $ticket->save();
            DB::table('tickets')->where('id',$id)->update([
                'price' => intval($request->input('price')),
                'routeID' => intval($request->input('routeID')),
                'onDiscount' => boolval($request->input('onDiscount')),
                'available' => $ticket->available
            ]);
            return response()->json([
                'success'=>true,
                'message'=>'An id='.$id.' ticket is changed to price: '
                                    .$request->input('price').
                                    ', routeID: '.$request->input('routeID').
                                    ', onDiscount: '.$request->input('onDiscount')
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
        $ticket = Ticket::where('id',$id)->first();
        if($ticket != null){
            $ticket->delete();
            return response()->json(['message'=> 'The id='.$id.' Ticket is deleted successfully','success'=>true]);
        }
        else{
            return response()->json(['message'=> 'The id='.$id.' Ticket isn\'t in the database','success'=>false]);
        }
    }
}
