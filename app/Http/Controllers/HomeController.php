<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        // $Post = Post::all();
        $posts = Post::with('user')->latest()->get();

        return inertia('Home', [
           'posts' => $posts   
        ]);
    }
}
