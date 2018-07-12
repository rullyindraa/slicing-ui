const gulp = require('gulp');
const minify = require('gulp-minify-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const connect = require('gulp-connect');
const imagemin = require('gulp-imagemin');

gulp.task('minify-css', function() {
  gulp.src('./public/assets/css/style.css')
  .pipe(concat('style.min.js'))
  .pipe(minify({
    compatibility: 'ie8'
  }))
  .pipe(gulp.dest('./build'));
});

gulp.task('minify-js', function() {
  gulp
    .src([
      './public/assets/javascripts/script.js'
    ])
    .pipe(concat('script.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build'));
});

gulp.task('minify-html', function() {
  gulp.src('./views/templates/index.html')
    .pipe(concat('index.html'))
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('./build'))
});

gulp.task('imagemin', function() {
  gulp
    .src('./public/assets/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./img'))
});

gulp.task('server', function() {
  connect.server({
    root: 'build'
  });
});

gulp.task('watch', function() {
  gulp.watch('./public/assets/javascripts/*.js', ['minify-js']);
  gulp.watch('./public/assets/css/*.css', ['minify-css']);
  gulp.watch('./views/templates/*.html', ['minify-html']);
});

gulp.task('default', ['watch', 'server']);
