<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class indexController extends Controller
{
   public function index(){
       $title = " BVM | Home";
       return view('/index', compact('title'));

   }
}
