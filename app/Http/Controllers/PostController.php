<?php namespace App\Http\Controllers;

use App\Http\Requests\PostRequest;
use App\Post;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Response;

class PostController extends Controller
{
    public function index()
    {
        return Post::all();
    }

    public function delete()
    {

    }

    public function update(PostRequest $request)
    {
        $post = Post::find($request->get('id'));
        $post->fill($request->all());
        /*$post->title = $request->get('title');
        $post->content= $request->get('content');*/
        $post->save();

        if ($post) {
            return Response::json(['success' => ['Article bien édité !']]);
        }

        return Response::json(['errors' => ['Il y a un problème technique ...']]);
    }

    public function store(PostRequest $request)
    {
        $post = Post::create($request->all());

        if ($post) {
            return Response::json(['success' => ['Article bien crée !']]);
        }

        return Response::json(['errors' => ['Il y a un problème technique ...']]);
    }


}
