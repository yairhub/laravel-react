<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\User; //  <--
use Illuminate\Support\Facades\Auth;
 // <--
class AuthCtrl extends Controller
{
    public function register (Request $request) {

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);
    
        if ($validator->fails())
        {
            return response(['errors'=>$validator->errors()->all()], 422);
        }
    
        $request['password'] = Hash::make($request['password']);
        $user = User::create($request->toArray());
    
        $token = $user->createToken('token')->accessToken;
        $response = ['token' => $token];
    
        return response($response, 200);
    
    }
    public function login(Request $request){
        $user = User::where('email',$request->email)->first();
        
        if($user){
            if(Hash::check($request->password, $user->password)){
               $token = $user->createToken('token')->accessToken;
               $response = ['token' => $token ,'user' => $user];
               return response($response,200);
            }else{
                $response = 'Password Email Mismatch';
                return response($response,422);
            }
            
        }else{
            $response = 'User das not exist';
            return response($response, 422);
        }

    }
    private function logout(Request $request) {
        $token = $request->bearerToken();
        $token->revoke();
        
    
        $response = 'You have been succesfully logged out!';
        return response($response, 200);

    }
}
