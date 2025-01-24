<?php

use App\Http\Controllers\Authcontroller;
use Illuminate\Support\Facades\Route;



Route::middleware('auth')->group(function(){
    Route::get('/', function () {
        return inertia('Home');
    })->name('home');
});

Route::get('/login',[Authcontroller::class, 'affiche']);
Route::post('/login',[Authcontroller::class,'login'])->name('login');



