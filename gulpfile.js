var gulp = require('gulp');

var autoprefixer     = require('gulp-autoprefixer');
var uncss            = require('gulp-uncss');
var concatCss        = require('gulp-concat-css');
var minifyCss        = require('gulp-minify-css');
var uglify           = require('gulp-uglify');
var mainBowerFiles   = require('main-bower-files');
var streamqueue      = require('streamqueue');
var concat           = require('gulp-concat');
var ghPages          = require('gulp-gh-pages');

var paths = {
    src: {
        js: ['js/**/*.js'],
        css: ['css/*.css'],
        assets: ['assets/**/*'],
        index: 'index.html',
        partials: 'partials/*.html',
        app: 'app/*'
    },
    dest: {
        js: 'index.js',
        css: 'index.css',
        dir: 'app/',
        assets: 'app/assets/',
        partials: 'app/partials/'
    }
}
gulp.task('deploy', function() {
  return gulp.src(paths.src.app)
    .pipe(ghPages());
});

gulp.task('css', function() {
  return gulp.src(paths.src.css)
    // CSS
    .pipe(concatCss(paths.dest.css))
    // .pipe(uncss({
    //     html: ['**/*.html', 'partials/**/*.html']
    // }))
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
    .pipe(gulp.dest(paths.dest.assets))
  gulp.src(paths.src.index)
    .pipe(gulp.dest(paths.dest.dir))
  gulp.src(paths.src.partials)
    .pipe(gulp.dest(paths.dest.partials))
})
gulp.task('watch', function(){
  gulp.watch(paths.src.js, ['js']);
  gulp.watch(paths.src.index, ['assets']);
  gulp.watch(paths.src.partials, ['assets']);
  gulp.watch(paths.src.assets, ['assets']);
  gulp.watch(paths.src.css, ['css']);
});

gulp.task('default', ['css', 'js', 'assets', 'watch']);
