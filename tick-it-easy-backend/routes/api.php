<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TicketsController;
use App\Http\Controllers\VehiclesController;
use App\Http\Controllers\RoutesController;

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

Route::resource('tickets', TicketsController::class);
Route::resource('vehicles', VehiclesController::class);
Route::resource('routes', RoutesController::class);
