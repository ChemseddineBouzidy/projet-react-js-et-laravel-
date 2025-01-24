<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class Authcontroller extends Controller
{
    public function login(Request $request){
       $request->validate([
            'email'=>'required|email',
            'password'=>'required'
       ],[
        'email.required'=>'email obligatoire',

       ]);
       
       $user=User::where('email',$request->email)->first();
       if($user){
        if(Hash::check($request->password,$user->password)){
            Auth::login($user);
            return redirect()->route('home');
        }
        else{
            return back()->withErrors(['email'=>'mot de pass incorrect']);
        }
       }
    }

    public function affiche(){
        return inertia('LoginPage');
    }


}
