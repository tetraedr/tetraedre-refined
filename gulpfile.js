var gulp     = require('gulp'),
    wiredep  = require('wiredep').stream,
    sass     = require('gulp-sass'),
    cssmin   = require('gulp-cssmin'),
    rename   = require('gulp-rename'),
    sassGlob = require('gulp-sass-glob'),
    plumber  = require('gulp-plumber');

gulp.task('wiredep', function () {
  gulp.src('*.html')
    .pipe(wiredep({

    }))
    .pipe(gulp.dest('./'));
});

gulp.task('sass', function(){
  return gulp
    .src('assets/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sassGlob())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('assets/css'));
});

 gulp.task('default', ['watch'], function() {
   gulp.start('sass');
   gulp.start('mini');
 });

 gulp.task('watch', function() {
  gulp.watch('assets/scss/**/*.scss', ['sass']);
  gulp.watch('assets/css/*.css', ['mini'])
 });

gulp.task('mini', function () {
    gulp.src('assets/css/style.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('assets/css'));
});