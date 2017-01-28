<?php

Route::get('/', function () {
    $categories = App\Category::all();

    return view('welcome', compact('categories'));
});
