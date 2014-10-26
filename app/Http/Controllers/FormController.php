<?php namespace App\Http\Controllers;


use App\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Validator;

class FormController extends Controller
{

    public function validate(Request $request)
    {
        $input = $request->get('input');
        $rules = $request->get('rules');

        $validator = Validator::make($input, $rules);

        if ($validator->passes()) {
            return Response::json(true);
        }
        return Response::json($validator->messages());
    }


}
