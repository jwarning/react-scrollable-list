var browserify = require('browserify');
var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');

var src = 'index.js';

gulp.task('build', function () {
  return gulp.src(src)
    .pipe(babel())
    .pipe(rename('react-scrollable-list.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('example', function () {
  return browserify({
    entries: ['app.js'],
    standalone: 'app'
  }).bundle()
  .pipe(source('bundle.js'))
  .pipe(streamify(uglify()))
  .pipe(gulp.dest('./'));
});

gulp.task('default', ['build', 'example']);
