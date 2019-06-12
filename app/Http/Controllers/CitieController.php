<?php
namespace App\Http\Controllers;
use DB;
use Illuminate\Http\Request;
use App\Htpp\Requests;
use App\Citie;
use App\Http\Resources\Citie as CitieResource;

class CitieController extends Controller{

    public function index(){
       return  DB::table('cities')->orderby('id','desc')->get()->take(10);
    }
    public function show($id){
      return Citie::find($id);
    }
    public function store(Request $request){ 
       return new CitieResource(Citie::newCity($request));  
    }
   public function update(Request $request, $id){
    //  return  $id;
    if(is_numeric($id)){
      return Citie::updateCity($request,$id); 
     }
   }

   public function delete($id){
   if(is_numeric($id)){
     $citie = Citie::findOrFail($id);
     $citie->delete();
     return Citie::all(); 
    }else{
        return "no valid id";
    }
   }


}