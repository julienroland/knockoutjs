<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/


$router->get('auth', 'AuthController@index');
$router->get('auth/login', 'AuthController@login');
$router->post('auth/login', 'AuthController@loginIn');
$router->post('auth/login/check', 'AuthController@check');

$router->post('form/validate', 'FormController@validate');


