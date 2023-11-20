const gulp = require('gulp');

function copyHTML() {
  return gulp.src('dir1/*.html')
    .pipe(gulp.dest('dir2'));
}

gulp.task('copy_paste', copyHTML); 