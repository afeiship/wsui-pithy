'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*', 'del', '@jswork/gulp-*'],
});

//styles
gulp.task('styles:web', function () {
  return gulp
    .src('src/*.scss')
    .pipe($.concat('index.scss'))
    .pipe($.jswork.pkgHeader())
    .pipe(gulp.dest('dist'))
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe($.rename('style.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('styles:weapp', function () {
  return gulp
    .src('src/*.scss')
    .pipe($.concat('index.scss'))
    .pipe($.replace(/&_ > \*:first-child/g, '&_ > view:first-child, &_ > first:last-child'))
    .pipe($.replace(/&_ > \*:last-child/g, '&_ > view:last-child, &_ > text:last-child'))
    .pipe($.replace(/> \*:first-child/g, '> view:first-child, > text:first-child'))
    .pipe($.replace(/> \*:last-child/g, '> view:last-child, > text:last-child'))
    .pipe($.replace(/&_ > \*/g, '&_ > view, &_ > text'))
    .pipe($.replace(/& > \*/g, '& > view, & > text'))
    .pipe($.rename('index.weapp.scss'))
    .pipe(gulp.dest('dist'))
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe($.rename('style.weapp.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('styles', gulp.series(['styles:web', 'styles:weapp']));
