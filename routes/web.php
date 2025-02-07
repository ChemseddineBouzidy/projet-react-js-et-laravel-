<?php

use App\Http\Controllers\Authcontroller;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;



Route::middleware('auth')->group(function(){
    // Route::get('/', function () {return inertia('Home');})->name('home');
    Route::get('/',[HomeController::class, 'index'])->name('home');

});

Route::middleware('guest')->group(function(){
    Route::get('/register',[Authcontroller::class,'showRegister'])->name('register');
});

Route::get('/login',[Authcontroller::class, 'affiche'])->name('login.show');
Route::post('/login',[Authcontroller::class,'login'])->name('login');
Route::get('logout',[AuthController::class,'logout'])->name('logout');

Route::post('/register',[Authcontroller::class, 'store'])->name('storeuser');

Route::resource('post', PostController::class);


Route::get('/react', function() {
    return inertia("test");
});

Route::get('/products', function() {
    return inertia("products");
});