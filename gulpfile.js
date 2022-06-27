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
  var templateBase = '1'
  var templateImage = 0
  var templateArticle = 0
  return gulp.src('src/images/*.{jpg,jpeg,png,gif,wepb}')
  .pipe(rename(function (path) {
    if (argv.image > 1) {
      templateBase = '2'
      if (argv.image >= 1 && argv.image <= 9) {
        templateImage = '00000' + (argv.image++)
      } else if (argv.image > 9 && argv.image <= 99) {
        templateImage = '0000' + (argv.image++)
      } else if (argv.image > 99 && argv.image <= 999) {
        templateImage = '000' + (argv.image++)
      } else if (argv.image > 999 && argv.image <= 9999) {
        templateImage = '00' + (argv.image++)
      }  else if (argv.image > 9999 && argv.image <= 99999) {
        templateImage = '0' + (argv.image++)
      } else if (argv.image > 99999 && argv.image <= 999999) {
        templateImage = (argv.image++)
      } else {
        templateImage = (argv.image++)
        templateBase = '3'
      }

      path.basename = templateBase + templateImage
      return path;
    } else {
      // template for image
      if (indexImage >= 1 && indexImage <= 9) {
        templateImage = '0' + (indexImage++)
      } else {
        templateImage = '' + (indexImage++)
      }

      //template for article
      if (indexArticle >= 1 && indexArticle <= 9) {
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
      else {
        templateArticle = '0000'
      }
  }
    
    // all templates
    path.basename = templateBase + templateArticle + templateImage
    return path;
 }))
  .pipe(gulp.dest('build'))
}

gulp.task('default', gulp.series(deleteImages, renameImages));

// npm run rename -- --article 123
