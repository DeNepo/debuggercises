// require native modules
const fs = require("fs");
const path = require("path");
const config = require("../config.json");

// declare constants
const EXERCISES_DIR = path.normalize(path.join(__dirname, '..', config.path));
const EXAMPLE_WORDS = ['example', 'examples', 'worked', 'stepped', 'demo'];
const PARENT_DIR = path.normalize(path.join(__dirname, '..'));

// make sure the exercises directory exists
try {
  fs.accessSync(EXERCISES_DIR);
} catch (err) {
  console.log(`--- creating ${config.path} directory ---`);
  fs.mkdirSync(EXERCISES_DIR);
};

// a function for prettier logs, not very important
const removeDirname = dirName => dirName.split(PARENT_DIR).join('  ...  ');

// the function that will create an object with the same file paths as your /exercises folder
const register = function (dirPath) {
  const dirs = [];
  const files = [];

  // get an array of all file names in the directory
  const paths = fs.readdirSync(dirPath);

  for (let nextPath of paths) {
    // if the file/folder name contains an example word, label it as such
    const isExample = EXAMPLE_WORDS
      .reduce((itIs, exampleWord) => {
        return itIs || nextPath.toLowerCase().includes(exampleWord);
      }, false);

    // is the next path a directory or a file?
    const isDirectory = fs.statSync(path.normalize(path.join(dirPath, nextPath))).isDirectory();
    // if it is a file, and not a javascript file, skip it
    if (!isDirectory && path.extname(nextPath) !== '.js') continue;

    if (isDirectory) {
      // recursively register the path if it's a directory
      //  this will create a virtual folder structure for this path
      const subDir = register(path.normalize(path.join(dirPath, nextPath)));
      try {
        // check if that directory has an over-riding buttons configuration
        //   if it does, add it to the virtual directory
        const subConfigStr = fs.readFileSync(path.normalize(path.join(EXERCISES_DIR, subDir.path, 'config.json')), 'utf-8');
        const subConfig = JSON.parse(subConfigStr);
        subDir.buttons = subConfig;
      } catch (err) { }
      if (subDir) {
        // add the registered sub-directory to the current virtual directory
        dirs.push(subDir);
        if (isExample) subDir.isExample = isExample;
      };
    } else {
      // create a file path object, and push it into the array of files in this directory
      const fileData = { path: '/' + nextPath };
      if (isExample) fileData.isExample = isExample;
      files.push(fileData);
    }
  };

  // if the folder contains no .js files, ignore it
  const noExercises = files.length === 0 && dirs.length === 0;
  if (noExercises) {
    return null;
  };

  // create the new virtual directory object
  const virDir = {
    //  convert the absolute path to a relative path using unix file separators
    path: '/' + dirPath
      .split(path.sep).join('/')
      .split('/').pop(),
  };
  // add the virtual files & sub-directories if they exist
  if (files.length > 0) virDir.files = files;
  if (dirs.length > 0) virDir.dirs = dirs;

  // return the new virtual directory
  return virDir;
};


console.log('\n--- registering .js files in ' + removeDirname(EXERCISES_DIR) + ' ---\n');

// register the /exercises directory
const preRegistered = register(EXERCISES_DIR);
// merge the repository config into the virtual directory
const registered = Object.assign(preRegistered, {
  title: config.title,
  reviewPath: config.reviewPath,
  buttons: config.buttons
});
// set the date/time of last build
registered.lastBuild = (new Date()).toJSON();

console.log('\n--- writing /index.json ---\n');

// write the file
const stringifiedReg = JSON.stringify(registered, null, '  ');
fs.writeFileSync(path.normalize(path.join('index.json')), stringifiedReg);
