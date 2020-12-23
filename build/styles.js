(function () {
  'use strict';

  var gulp = require('gulp');
  var autoprefixer = require('autoprefixer');
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del', '@jswork/gulp-*'],
  });

  //styles
  gulp.task('styles', function () {
    return gulp
      .src('src/*.scss')
      .pipe($.concat('index.scss'))
      .pipe($.jswork.pkgHeader())
      .pipe(gulp.dest('dist'))
      .pipe($.sass({ outputStyle: 'expanded' }).on('error', $.sass.logError))
      .pipe($.rename('style.css'))
      .pipe(gulp.dest('dist'));
  });
})();
