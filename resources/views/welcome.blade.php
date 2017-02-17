<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>

    <body>
        <div id="app">
            <router-view></router-view>
        </div>

        <script>
            window.vuexBlog = {
                initialState: {
                    categories: {!! $categories !!},
                    posts: {!! $posts !!}
                }
            }
        </script>

        <script src="/js/app.js"></script>
    </body>
</html>
