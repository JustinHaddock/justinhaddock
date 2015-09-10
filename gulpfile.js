var gulp = require('gulp');

var autoprefixer     = require('gulp-autoprefixer');
var uncss            = require('gulp-uncss');
var concatCss        = require('gulp-concat-css');
var minifyCss        = require('gulp-minify-css');
var uglify           = require('gulp-uglify');
var mainBowerFiles   = require('main-bower-files');
var streamqueue      = require('streamqueue');
var concat           = require('gulp-concat');

var paths = {
    src: {
        js: ['js/**/*.js'],
        css: ['css/**/*.css'],
        assets: ['assets/**/*']
    },
    dest: {
        js: 'index.js',
        css: 'index.css',
        dir: 'app/',
        assets: 'app/assets/'
    }
}

gulp.task('css', function() {
  return gulp.src(paths.src.css)
    // CSS
    .pipe(concatCss(paths.dest.css))
    .pipe(uncss({
        html: ['**/*.html']
    }))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(minifyCss({compatibility: 'ie8',keepSpecialComments: 0,keepBreaks: true}))
    .pipe(gulp.dest(paths.dest.dir));
});

gulp.task('js', function() {
  streamqueue(
    { objectMode: true },
    gulp.src(mainBowerFiles()),
    gulp.src(paths.src.js)
  )
    //.pipe(uglify())
    .pipe(concat(paths.dest.js))
    .pipe(gulp.dest(paths.dest.dir))
});

gulp.task('assets', function () {
  gulp.src(paths.src.assets)
    .pipe(gulp.dest(paths.dest.assets));
})

gulp.task('default', ['js', 'css', 'assets']);
