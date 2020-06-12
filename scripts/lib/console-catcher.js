const findMapKey = require('./find-map-key');

const nativeConsole = Object.assign({}, console);

module.exports = (PARENT_DIR, reportMap) => {

  const removeDirname = dirName => dirName.split(PARENT_DIR).join('  ...  ');

  return {

    assert: function assert() {
      const args = Array.from(arguments);
      nativeConsole.assert(...args);

      const pseudoErr = {};
      Error.captureStackTrace(pseudoErr);
      const mapKey = findMapKey(pseudoErr, PARENT_DIR, reportMap);
      const assertionReport = {
        status: args[0] ? 1 : 2,
        assertion: args[0],
        messages: args.slice(1)
      };
      try {
        reportMap[mapKey].logs.push(assertionReport);
      } catch (err) {
        reportMap.unsortedLogs.push(assertionReport);
      }
    },

    error: function error() {
      const args = Array.from(arguments);
      nativeConsole.error(...args);

      const caughtReport = {
        caught: true,
        status: 3,
        messages: args,
      };

      const pseudoErr = {};
      Error.captureStackTrace(pseudoErr);
      const mapKey = findMapKey(pseudoErr, PARENT_DIR, reportMap);
      try {
        reportMap[mapKey].logs.push(caughtReport);
      } catch (err) {
        reportMap.unsortedLogs.push(caughtReport);
      }
    },

    log: function log() {
      const args = Array.from(arguments);
      nativeConsole.log(...args);

      const pseudoErr = {};
      Error.captureStackTrace(pseudoErr);
      const mapKey = findMapKey(pseudoErr, PARENT_DIR, reportMap);
      const logReport = {
        status: 0,
        messages: args
      };
      try {
        reportMap[mapKey].logs.push(logReport);
      } catch (err) {
        reportMap.unsortedLogs.push(logReport);
      }
    }
  }
};
