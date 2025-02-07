<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Notifications\RegisterNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class Authcontroller extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ], [
            'email.required' => 'email obligatoire',

        ]);

        $user = User::where('email', $request->email)->first();
        if ($user) {
            if (Hash::check($request->password, $user->password)) {
                Auth::login($user);
                return redirect()->route('home');
            } else {
                return back()->withErrors(['email' => 'mot de pass incorrect']);
            }
        }
    }

    public function affiche()
    {
        return inertia('LoginPage');
    }
    public function showRegister()
    {
        return inertia("auth/CreateUser");
    }
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:255',
            'password' => 'required|min:6',
            'email' => 'required|email|unique:users,email',
            'username' => 'required|unique:users',
        ]);

        $user = User::create([
            'name' => $request->name,
            'password' => Hash::make($request->password),
            'email' => $request->email,
            'username' => $request->username,
        ]);
        Auth::login($user);
        $user->notify(new RegisterNotification($user));
        return redirect()->route('home');
    }
    public function logout()
    {
     
        Auth::logout();

       return to_route('login.show')->with("success","Vous etes bien deconnecte");
    }
}
