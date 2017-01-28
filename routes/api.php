<?php

Route::get('/posts', function () {
    return App\Post::all();
});