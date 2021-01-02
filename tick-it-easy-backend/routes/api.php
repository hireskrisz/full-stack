<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TicketsController;
use App\Http\Controllers\VehiclesController;
use App\Http\Controllers\RoutesController;
use App\Http\Controllers\Auth\ApiAuthController;
use App\Http\Controllers\UsersController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('routes',[RoutesController::class,'index']);
Route::get('routes/{route}',[RoutesController::class,'show']);

Route::get('tickets',[TicketsController::class,'index']);
Route::get('tickets/{ticket}',[TicketsController::class,'show']);

Route::get('vehicles',[VehiclesController::class,'index']);
Route::get('vehicles/{vehicle}',[VehiclesController::class,'show']);

Route::group(['middleware' => ['cors', 'json.response']], function () {
    Route::post('/login', [ApiAuthController::class,'login'])->name('login.api');
    Route::post('/register',[ApiAuthController::class,'register'])->name('register.api');
});

Route::middleware('auth:api')->group(function () {
    // our routes to be protected will go in here
    Route::post('/logout', [ApiAuthController::class,'logout'])->name('logout.api');

    Route::post('routes',[RoutesController::class,'store'])->middleware('api.admin');
    Route::put('routes/{route}',[RoutesController::class,'update']);
    Route::delete('routes/{route}',[RoutesController::class,'destroy'])->middleware('api.admin');
    
    Route::post('tickets',[TicketsController::class,'store'])->middleware('api.admin');
    Route::put('tickets/{ticket}',[TicketsController::class,'update']);
    Route::delete('tickets/{ticket}',[TicketsController::class,'destroy'])->middleware('api.admin');


    Route::post('vehicles',[VehiclesController::class,'store'])->middleware('api.admin');
    Route::put('vehicles/{vehicle}',[VehiclesController::class,'update']);
    Route::delete('vehicles/{vehicle}',[VehiclesController::class,'destroy'])->middleware('api.admin');

    Route::put('users/{user}',[VehiclesController::class,'update']);
    Route::delete('users/{user}',[VehiclesController::class,'destroy'])->middleware('api.admin');
});
