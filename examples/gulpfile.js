var gulp = require('gulp');
var jaded = require('../');

gulp.task('task', function () {
  gulp.src('src/*.jade')
    .pipe(jaded())
    .pipe(gulp.dest('./build'));
});


gulp.task('default', function(){
  gulp.run('task');
});