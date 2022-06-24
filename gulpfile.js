import gulp from 'gulp';
import rename from 'gulp-rename';
import del from 'del';
import maxDirIndex from 'npm-max-dir-index';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers'

const argv = yargs(hideBin(process.argv)).argv

const deleteImages = () => {
  return del(['build',], {force:true});
}

const renameImages = () => {
    var articleSlug = argv.test
    var index = 1 + maxDirIndex('src/images/', '^.*$'); 
    return gulp.src('src/images/*.{jpg,jpeg,png,gif,wepb}')
    .pipe(rename(function (path) {
        if (index <= 9) {
            path.basename = articleSlug + '0' + (index++)
        } else {
          path.basename = articleSlug + '' + (index++)
        }
        return path;
        }))
    .pipe(gulp.dest('build'))
    console.log('Test')
}

gulp.task('default', gulp.series(deleteImages, renameImages));

// npm run rename -- -- test=123