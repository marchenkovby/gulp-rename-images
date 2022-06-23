// Main module
import gulp from 'gulp';

// Import path from path.js
import { path } from './path.js';

// Pass value to global variables
global.app = {
  path: path,
  gulp: gulp
}

// Import tasks
import { renameImages } from './tasks/renameImages.js';

// Single task 
export { renameImages }

// Make default task
gulp.task('default', renameImages);
