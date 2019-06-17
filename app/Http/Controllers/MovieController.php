<?php
namespace App\Http\Controllers;
use DB;
use Illuminate\Http\Request;
use App\Htpp\Requests;
use App\Movie;
use App\Http\Resources\Movie as MovieResource;

class MovieController extends Controller{

    public function index(){
       return  DB::table('movies')->orderby('id','desc')->get();
    }
    public function show($id){
      return Movie::find($id);
    }
    public function store(Request $request){ 
       return new MovieResource(Movie::newCity($request));  
    }
   public function update(Request $request, $id){
    //  return  $id;
    if(is_numeric($id)){
      return Movie::updateCity($request,$id); 
     }
   }

   public function delete($id){
   if(is_numeric($id)){
     $Movie = Movie::findOrFail($id);
     $Movie->delete();
     return Movie::all(); 
    }else{
        return "no valid id";
    }
   }


}