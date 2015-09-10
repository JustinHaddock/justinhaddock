var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var uncss = require('gulp-uncss');
var minifyCss = require('gulp-minify-css');
var concatCss = require('gulp-concat-css');
var uglify = require('gulp-uglify');

gulp.task('default', ['compress'], function() {
  return gulp.src('css/**/*.css')
    .pipe(concatCss("css/bundle.css"))
    .pipe(uncss({
        html: ['**/*.html']
    }))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(minifyCss({compatibility: 'ie8',keepSpecialComments: 0,keepBreaks: true}))
    .pipe(gulp.dest('out/'));
});

gulp.task('compress', function() {
  return gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('out/'));
});
