<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('movies','MovieController@index');
Route::post('movies','MovieController@store');
// Route::post('login', 'AuthCtrl@login');
Route::post('login', [ 'as' => 'login', 'uses' => 'AuthCtrl@login']);
Route::post('register', 'AuthCtrl@register');
Route::get('movies/{id}','MovieController@show');
Route::put('movies/{id}','MovieController@update');
Route::delete('movies/{id}','MovieController@delete');

//  Route::get('logout','AuthCtrl@logout');
// Route::middleware('auth:api')->group(function () {
    Route::get('/logout', 'AuthCtrl@logout');
// });
        // Route::get('/logout', 'AuthCtrl@logout');
