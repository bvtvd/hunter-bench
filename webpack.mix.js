let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
// 设置懒加载文件存储路径
mix.webpackConfig({
    output: {
        publicPath: "/",
        chunkFilename: 'js/lazy/[name].[chunkhash].js'
    }
})


// mix.js('resources/assets/js/app.js', 'public/js');
   // .sass('resources/assets/sass/app.scss', 'public/css');
mix.js('resources/assets/admin/app.js', 'public/admin/js');