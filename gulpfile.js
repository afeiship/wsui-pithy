const gulp = require('gulp');
const path = require('path');
const fs = require('fs');

//import
fs.readdirSync('./build').map(function(file) {
  require('./build/' + file);
});

gulp.task('default', gulp.series(['clean', 'styles']));
