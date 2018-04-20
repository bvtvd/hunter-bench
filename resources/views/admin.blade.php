<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Bench - seizeone.site</title>

        <!-- Fonts -->

    </head>
    <body>
        <div class="container">
            <div id="app"></div>

        </div>
        <script src="//{{ Request::getHost() }}:6001/socket.io/socket.io.js"></script>
        <script src="/admin/js/app.js"></script>
    </body>
</html>
