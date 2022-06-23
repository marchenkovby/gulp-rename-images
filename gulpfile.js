import gulp from 'gulp';
import rename from 'gulp-rename';
import del from 'del';

const deleteImages = () => {
  return del(['build',], {force:true});
}

const renameImages = () => {
    return gulp.src('src/images/*.{jpg,jpeg,png,gif,wepb}')
    .pipe(rename({
      // this code
    }))
    .pipe(gulp.dest('build'))
}

gulp.task('default', gulp.series(deleteImages, renameImages));
