const path = require('path');
const config = require("../config.json");

const reportify = require('./lib/reportify');
const consoleCatcherFactory = require('./lib/console-catcher');
const reviewify = require('./lib/reviewify');
const reportThrownFactory = require('./lib/report-thrown');
const evaluate = require('./lib/evaluate');

const PARENT_DIR = path.join(__dirname, '..');
const TITLE = config.title;


console.log('\n--- loading ' + config.path + '/index.json ---\n');

// index will be modified by side-effect
const index = require(path.join(PARENT_DIR, config.path, 'index.json'));
index.unsortedLogs = [];
index.title = TITLE;

console.log('\n--- generating empty reports ---\n');

reportify.addEmptyReports(index);


console.log('\n--- generating report map ---\n');

const reportMap = reportify.generateReportMap(index);
reportMap.unsortedLogs = index.unsortedLogs;

console.log('\n--- setting up evaluation environment ---\n');

const reportThrown = reportThrownFactory(PARENT_DIR, reportMap);

const nativeConsole = Object.assign({}, console);
Object.assign(console, consoleCatcherFactory(PARENT_DIR, reportMap));

process.on('uncaughtException', err => {
  reportThrown(err, '', true);
});

process.on('unhandledRejection', err => {
  reportThrown(err, '', true, true);
});


process.on('exit', (exitCode) => {
  try {
    nativeConsole.log('\n--- interpreting reports ---\n');
    reportify.summarizeReports(index);

    nativeConsole.log('\n--- generating REVIEW.md\'s ---\n');
    reviewify.generateReviews(index);

    index.review += reviewify.renderUnsorted(index.unsortedLogs);

    nativeConsole.log('\n--- writing REVIEW.md\'s ---\n');
    reviewify.writeReviews(index, PARENT_DIR);

    nativeConsole.log(`exiting with code: ${exitCode}`);

  } catch (err) {
    nativeConsole.error(err)
  }
});


nativeConsole.log('\n--- evaluating .js files ---\n');

index.lastEvaluation = (new Date()).toJSON();

evaluate(reportMap, PARENT_DIR, reportThrown);



nativeConsole.log('\n--- ... waiting for the event loop to clear ---\n');







