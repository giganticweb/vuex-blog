<?php

Route::get('/{anything?}', function () {
    $categories = App\Category::all();
    $posts = App\Post::all();

    return view('welcome', compact('categories', 'posts'));
})->where(['anything' => '.*']);
