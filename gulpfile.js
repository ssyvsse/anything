var gulp = require('gulp');
var uglify = require('gulp-uglify'); //js压缩
var minifyCSS = require('gulp-minify-css')
gulp.task('script',function(){
    gulp.src('src/main/resources/static/**/*.js')
	.pipe(uglify({ mangle: false }))
	.pipe(gulp.dest('target/classes/static/'));
	console.log("script uglify complete.")
});

gulp.task('css',function(){
    gulp.src('src/main/resources/static/**/*.css')
	.pipe(minifyCSS())
	.pipe(gulp.dest('target/classes/static/'));
	console.log("css minifyCSS complete.")
});


gulp.task('dist', function(){
    
 });
gulp.task('default',['script','css'],function(){
   console.log("hello world");
});