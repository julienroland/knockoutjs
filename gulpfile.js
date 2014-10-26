var elixir = require('laravel-elixir'),
    livereload = require('gulp-livereload'),
    compass = require('gulp-compass'),
    gulp = require('gulp');

/*
 |----------------------------------------------------------------
 | Have a Drink!
 |----------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic
 | Gulp tasks for your Laravel application. Elixir supports
 | several common CSS, JavaScript and even testing tools!
 |
 */

elixir(function (mix) {
    mix.sass('main.sass');
});
gulp.task('livereload', function() {
    livereload.listen();
    gulp.watch('public/**').on('change', livereload.changed);
});
gulp.watch('public/**', ['livereload']);


