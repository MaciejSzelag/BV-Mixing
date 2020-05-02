@extends('layouts.app_main',['title'=>$title])
@section('content')
<section class="index">
    <div class="index_img">
        <img src="{{asset('images/BDY3-e1453894190310.png')}}" alt="">
    </div>
    {{-- <div class="index_img_truck">
        <img src="{{asset('images/lorry-half.png')}}" alt="">
        </div> --}}
    <div class="index_wrap"> 

        <div class="content-index">
            <div class="top-line">
                <div class="wrap-logo">
                    <img src="{{asset('/images/logo/Bandvulc_Spot_MTAT.png')}}" alt="Bandvulc_Spot_MTAT">
                </div>
                

            </div>
   
            <div class="content-index_title">
                BVM - tests
            </div>
            <div class="content-index_links">
                <a href="/dinButtons">Din test</a>
                <a href="/natRubber">Natural rubber</a>
         
            </div>
        </div>
    </div>
</section>
@endsection

