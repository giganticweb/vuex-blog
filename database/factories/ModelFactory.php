<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(App\Category::class, function(Faker\Generator $faker) {
    return [
        'name' => ucfirst(implode(' ', $faker->words(2))),
    ];
});

$factory->define(App\Post::class, function(Faker\Generator $faker) {
    return [
        'author_id' => 1,
        'category_id' => mt_rand(1, 5),
        'title' => $faker->sentence(3),
        'excerpt' => $faker->sentence,
        'body' => $faker->paragraph
    ];
});

$factory->define(App\User::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
    ];
});
