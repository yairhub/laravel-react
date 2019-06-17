<?php

namespace App;
use Illuminate\Database\Eloquent\Model;
//use Illuminate\Support\Facades\Validator;


class Movie extends Model{

    public $timestamps = false;

    static public function newCity($request){
    
        $movie = new self();
        $movie->name = $request->name;
        $movie->description = $request->description;
        $movie->genre = $request->genre;
        $movie->rating = $request->rating;
        $movie->save();
        return $movie;
        // return $citie;
        
    }
   
    static public function updateCity($request,$id){
        $movie = self::find($id);
        $movie->name = $request->name;
        $movie->description = $request->description;
        $movie->genre = $request->genre;
        $movie->rating = $request->rating;
        $movie->save();
        return $request;
        }
    
        
        
    }
    
