// Get name project
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());
  
const buildFolder = `./build`;
const srcFolder = `./src`;

// export - for use variables in other files
export const path = {
  build: {
    images: `${buildFolder}/images/`,
  },
  src: {
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,wepb}`,
  },
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder
}