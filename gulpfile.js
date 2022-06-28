import gulp from 'gulp';
import rename from 'gulp-rename';
import del from 'del';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers'

const argv = yargs(hideBin(process.argv)).argv

const deleteImages = () => {
  return del(['build',], {force:true});
}

const renameImages = () => {
  var indexArticle = argv.article ? argv.article : 0
  var indexImage = argv.image ? argv.image : 1
  var templateArticle = ''
  var templateImage = ''
  return gulp.src('src/images/*.{jpg,jpeg,png,gif,wepb}')  
  .pipe(rename(function (path) {
    if(argv.article !== undefined && argv.image === undefined) {    
      if (indexImage >= 1 && indexImage <= 9) {
        templateImage = '0' + (indexImage++)
      } else {
        templateImage = '' + (indexImage++)
      }
      if (indexArticle >= 1 && indexArticle <= 9) {
        templateArticle = '1000' + indexArticle
      }
      else if (indexArticle > 9 && indexArticle <= 99){
        templateArticle = '100' + indexArticle
      }
      else if (indexArticle > 99 && indexArticle <= 999){
        templateArticle = '10' + indexArticle
      }
      else if (indexArticle > 999 && indexArticle <= 9999){
        templateArticle = '1' + indexArticle
      }
    }
    if (argv.article === undefined || argv.image !== undefined) {
      if (indexImage > 0) {
        templateImage = 3000000 + (indexImage++)
      }
    }
    path.basename =  templateArticle + templateImage
    return path;
  }))
  .pipe(gulp.dest('build'))
}

gulp.task('default', gulp.series(deleteImages, renameImages));
