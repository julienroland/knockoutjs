<?php namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Validator;
use Response;

class PostRequest extends FormRequest
{
    public function rules()
    {
        return [
            'title' => 'required',
            'content' => 'required'
        ];
    }

    protected function formatErrors(Validator $validator)
    {
        return $validator->errors()->all();
    }

    public function authorize()
    {
        // Only allow logged in users
        return Auth::check();
        // Allows all users in
        //return true;
    }

    // OPTIONAL OVERRIDE
    public function forbiddenResponse()
    {
        // Optionally, send a custom response on authorize failure
        // (default is to just redirect to initial page with errors)
        //
        // Can return a response, a view, a redirect, or whatever else
        return Response::make('Permission denied!', 403);
    }

    // OPTIONAL OVERRIDE
    public function response(array $errors)
    {
        if ($this->ajax()) {
            return Response::json(['errors' => $errors], 200);
        } else {
            return $this->redirector->to($this->getRedirectUrl())
                ->withInput($this->except($this->dontFlash))
                ->withErrors($errors);
        }
    }
}
