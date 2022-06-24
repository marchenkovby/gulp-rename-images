import gulp from 'gulp';
import rename from 'gulp-rename';
import del from 'del';
//import maxDirIndex from 'npm-max-dir-index';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers'
//import debug from 'gulp-debug';

const argv = yargs(hideBin(process.argv)).argv

const deleteImages = () => {
  return del(['build',], {force:true})
}

const renameImages = () => {
    var index = argv.index
    //var index = maxDirIndex('src/images/', '^.*$');
    //var index = 1
    console.log('Begin index: ' + index) 
    return gulp.src('src/images/***/*.{jpg,jpeg,png,gif,wepb}')
    .pipe(rename(function (path) 
    {
        // if (index <= 9) {
        //     path.basename = '0' + (index++)
        // } else {
        //   path.basename = (index++)
        // }
        path.basename = (index++)
        path.dirname = ''
        return path;
    }))
    .pipe(gulp.dest('build'))
}

gulp.task('default', gulp.series(deleteImages, renameImages));

// npm run rename -- -- test=123