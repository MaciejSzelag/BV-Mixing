<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class dinButtonsController extends Controller
{
    public function goToDinTest(){
        $title = " BVM | DIN - tests";
        return view('pages/dinButton', compact('title'));
 
    }
}
