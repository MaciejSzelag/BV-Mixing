<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class naturalRubberController extends Controller
{
    public function goToNTtest(){
        $title = " BVM | Natural Rubber - tests";
        return view('pages/naturalRubber', compact('title'));
 
    }
}
