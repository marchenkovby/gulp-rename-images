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
  var indexArticle = argv.article
  var indexImage = 1
  var templateBase = '1'
  var templateImage = 0
  var templateArticle = 0
  return gulp.src('src/images/*.{jpg,jpeg,png,gif,wepb}')
  .pipe(rename(function (path) {
    // template for image
    if (indexImage <= 9) {
      templateImage = '0' + (indexImage++)
    } else {
      templateImage = '' + (indexImage)
    }

    //template for article
    if (indexArticle <= 9) {
      templateArticle = '000' + indexArticle
    }
    else if (indexArticle > 9 && indexArticle <= 99){
      templateArticle = '00' + indexArticle
    }
    else if (indexArticle > 99 && indexArticle <= 999){
      templateArticle = '0' + indexArticle
    }
    else if (indexArticle > 999 && indexArticle <= 9999){
      templateArticle = indexArticle
    }
    
    // all templates
    path.basename = templateBase + templateArticle + templateImage 
    return path;
 }))
  .pipe(gulp.dest('build'))
}

gulp.task('default', gulp.series(deleteImages, renameImages));

// npm run rename -- --article 123
