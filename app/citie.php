<?php

namespace App;
use Illuminate\Database\Eloquent\Model;
//use Illuminate\Support\Facades\Validator;


class Citie extends Model{

    public $timestamps = false;

    static public function newCity($request){
    
        $citie = new self();
        $citie->name = $request->name;
        $citie->countrycode = $request->countrycode;
        $citie->district = $request->district;
        $citie->population = $request->population;
        $citie->save();
        return $citie;
        // return $citie;
        
    }
   
    static public function updateCity($request,$id){
        $citie = self::find($id);
        $citie->Name = $request->name;
        $citie->CountryCode = $request->countrycode;
        $citie->District = $request->district;
        $citie->Population = $request->population;
        $citie->save();
        return $request;
        }
    
        
        
    }
    
