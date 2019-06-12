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

Route::get('cities','CitieController@index');
Route::post('cities','CitieController@store');
Route::post('login', 'AuthCtrl@login');
Route::post('register', 'AuthCtrl@register');
Route::get('cities/{id}','CitieController@show');
Route::put('cities/{id}','CitieController@update');
Route::delete('cities/{id}','CitieController@delete');

//  Route::get('logout','AuthCtrl@logout');
Route::middleware('auth:api')->group(function () {
    Route::get('logout', 'AuthCtrl@logout');
});
