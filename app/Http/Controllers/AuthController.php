<?php namespace App\Http\Controllers;


use App\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Response;

class AuthController extends Controller
{


    public function index(Request $request)
    {
        if ($request->ajax()) {
            if (!Auth::check()) {
                return Response::json(false);
            }
            return Response::json(Auth::user());
        }
    }

    public function login()
    {
        return view('login');
    }

    public function loginIn(Request $request)
    {
        if (Auth::attempt(
            [
                'email' => $request->get('email'),
                'password' => $request->get('password')
            ])
        ) {
            return Response::json(Auth::user());
        }
        return Response::json('Informations incorrect');
    }

    public function check()
    {
        if (Auth::check()) {
            return Response::json(true);
        }
        return Response::json(false);
    }
}
