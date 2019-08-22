<?php

namespace App\Http\Controllers\Front\Blog;

use App\Http\Controllers\Controller;
use App\Http\Resources\BlogResource;
use App\Models\Blog;

class BlogController extends Controller
{
    public function index()
    {
        // $blogs = Blog::where('status',1)->latest()->with('blog_images','products')->skip($skip)->limit(10)->get();
        $blogs = Blog::where('status',1)->get();
        return BlogResource::collection(
            $blogs
        );


    }
}
