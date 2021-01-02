<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        
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
        
        $user = User::where('id',$id)->first();

        if($request->input('name') && $request->input('password') ){
            DB::table('users')->where('id',$id)->update([
                'name' => $request->input('name'),
                'password' => Hash::make($request['password']),
    
            ]);
        }
        else if($request->input('name')){
            DB::table('users')->where('id',$id)->update([
                'name' => $request->input('name')
            ]);
        }

        else if($request->input('password')){
            DB::table('users')->where('id',$id)->update([
                'password' => Hash::make($request['password'])
            ]);
        }
        return response()->json([
            'success'=>true,
            'message'=>'A user data is changed'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::where('id',$id)->first();
        if($user != null){
            $user->delete();
            return response()->json(['message'=> 'The id='.$id.' user is deleted successfully','success'=>true]);
        }
        else{
            return response()->json(['message'=> 'The id='.$id.' user isn\'t in the database','success'=>false]);
        }
    }
}
