/*
  this script uses ../index.json to run & evaluate each .js file in /exercises
  after the review is finished it writes a README for each folder of exercises in /review
*/

// require dependencies (native node modules)
const path = require('path');
const fs = require('fs');

// require evaluation & reporting scripts (non-native, stored in /lib)
const reportify = require('./lib/reportify');
const consoleCatcherFactory = require('./lib/console-catcher');
const reviewify = require('./lib/reviewify');
const reportThrownFactory = require('./lib/report-thrown');
const evaluate = require('./lib/evaluate');

// create a constant variable for the parent directory
const PARENT_DIR = path.normalize(path.join(__dirname, '..'));

console.log('\n--- loading  index.json ---\n');

// index will be modified by side-effect
const index = require(path.normalize(path.join(PARENT_DIR, 'index.json')));
index.unsortedLogs = [];

console.log('\n--- generating empty reports ---\n');

// add empty report objects to the virtual directory, one for each folder and file
reportify.addEmptyReports(index);


console.log('\n--- generating report map ---\n');

// create another object that contains a shortcut to each empty report
//  this is used for storing errors, logs and asserts
const reportMap = reportify.generateReportMap(index);
reportMap.unsortedLogs = index.unsortedLogs;

console.log('\n--- setting up evaluation environment ---\n');

// configure the function that will report any thrown exceptions
const reportThrown = reportThrownFactory(PARENT_DIR, reportMap);

// point to native console methods for debugging and logging in this script
const nativeConsole = Object.assign({}, console);
// over-write the global console object to intercept information from the exercises
Object.assign(console, consoleCatcherFactory(PARENT_DIR, reportMap));

// to catch & report any asynchronous errors that are not from promises
//  (all synchronous errors are caught at evaluation)
process.on('uncaughtException', err => {
  reportThrown(err, '', true);
});

// to catch & report unhandled promise rejections
process.on('unhandledRejection', err => {
  reportThrown(err, '', true, true);
});

// do these things after all exercises have been evaluated and the event loop is cleared
process.on('exit', (exitCode) => {
  try {
    // go through all of the information captured during evaluation and summarize it
    //  ie. look through each assertion/error and decide if a particular file is passed, failed or errored
    nativeConsole.log('\n--- interpreting reports ---\n');
    reportify.summarizeReports(index);

    // render markdown for each file/folder based on the summaries created above
    nativeConsole.log('\n--- generating reviews\'s ---\n');
    reviewify.generateReviews(index);

    // append any asynchronous exceptions that didn't have a callstack as an extra section in the main README
    index.review += reviewify.renderUnsorted(index.unsortedLogs);

    nativeConsole.log('\n--- writing reviews\'s ---\n');

    // write the new markdown files!
    index.reviewPath = index.reviewPath;
    const absReviewPath = path.normalize(path.join(PARENT_DIR, index.reviewPath));
    try {
      fs.accessSync(absReviewPath);
      fs.rmdirSync(absReviewPath, { recursive: true });
      fs.mkdirSync(absReviewPath);
    } catch (err) {
      fs.mkdirSync(absReviewPath);
    };

    reviewify.writeReviews(index, PARENT_DIR);

    // done!
    nativeConsole.log(`exiting with code: ${exitCode}`);

  } catch (err) {
    nativeConsole.error(err)
  }
});


nativeConsole.log('\n--- evaluating .js files ---\n');

// add the date/time of most recent evaluation
index.lastEvaluation = (new Date()).toJSON();

// actually evaluate the exercises
//  check out /lib/evaluate.js for more details
evaluate(reportMap, PARENT_DIR, reportThrown);



nativeConsole.log('\n--- ... waiting for the event loop to clear ---\n');







