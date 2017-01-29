<?php

Route::get('/{anything?}/{anything2?}', function () {
    $categories = App\Category::all();
    $posts = App\Post::all();

    return view('welcome', compact('categories', 'posts'));
});
