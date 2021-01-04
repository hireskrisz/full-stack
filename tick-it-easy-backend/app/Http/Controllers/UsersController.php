<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return User::all();
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
        return User::where('id',$id)->first();
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
        if($request->input('balance')){
            DB::table('users')->where('id',$id)->update([
                'balance' => $request->input('balance'),
            ]);
        }
        if($request->input('bucket')){
            DB::table('users')->where('id',$id)->update([
                'bucket' => $request->input('bucket'),
            ]);
        }
        if($request->input('name')){
            DB::table('users')->where('id',$id)->update([
                'name' => $request->input('name')
            ]);
        }
        if($request->input('password')){
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
        $user->delete();
        return response()->json(['message'=> 'The id='.$id.' user is deleted successfully','success'=>true]);
    }
}
