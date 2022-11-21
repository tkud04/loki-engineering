<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MainController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\AdminController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [MainController::class,'getIndex']);
Route::get('contact', [MainController::class,'getContact']);
Route::post('contact', [MainController::class,'postContact']);
Route::get('about', [MainController::class,'getAbout']);
Route::get('services', [MainController::class,'getServices']);
Route::get('gallery', [MainController::class,'getGallery']);
