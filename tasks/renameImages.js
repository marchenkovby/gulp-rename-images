import rename from 'gulp-rename';

export const renameImages = () => {
    return app.gulp.src(app.path.src.images)
      .pipe(rename())
      .pipe(app.gulp.dest(app.path.build.images))
}