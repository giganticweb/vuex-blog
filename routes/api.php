<?php

use Carbon\Carbon;
use Faker\Factory as Faker;

function generatePost($times = 1)
{
    $faker = Faker::create();
    $posts = [];

    foreach (range(1, $times) as $time) {
        $posts[] = [
            'title' => $faker->sentence(3),
            'created_by' => mt_rand(1, 5),
            'created_at' => Carbon::parse('-1 week')->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::parse('-1 week')->format('Y-m-d H:i:s'),
            'body' => implode("<br><br>", $faker->paragraphs)
        ];
    }

    return collect($posts);
}

Route::get('/posts', function () {
    return generatePost(10);
});