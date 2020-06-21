const findMapKey = require('./find-map-key');

module.exports = (PARENT_DIR, reportMap) => {

  const removeDirname = dirName => dirName.split(PARENT_DIR).join('  ...  ');


  const reportThrown = (thrown, path, async, promise) => {
    // console.log(thrown);



    const thrownReport = { async, promise };
    if (thrown instanceof Error) {
      if (thrown && thrown.stack && thrown.stack.includes('ReferenceError: _ is not defined')) {
        // ReferenceError: _ is not defined
        // still a blank to fill in
        thrownReport.status = 8;
      } else if (thrown && thrown.stack && thrown.stack.includes('Loop exceeded') && thrown.stack.includes('iterations')) {
        // Error: Loop exceeded [0-9] iterations
        // caught a possibly endless loop at evaluation
        thrownReport.status = 9;
      } else if (thrown && thrown.stack && thrown.stack.includes('RangeError: Maximum call stack size exceeded')) {
        thrownReport.status = 10;
      } else if (thrown.stack.includes('SyntaxError:')) {
        thrownReport.status = 7;
      } else {
        thrownReport.status =
          promise ? 4
            : async ? 5
              : 6;
      };

      thrownReport.error = thrown.name + ': ' + thrown.message;
      thrownReport.stack = removeDirname(thrown.stack);
      const mapKey = path || findMapKey(thrown, PARENT_DIR, reportMap);
      // console.log('---------', thrownReport.stack)
      try {
        reportMap[mapKey].logs.push(thrownReport);
      } catch (err) {
        reportMap.unsortedLogs.push(thrownReport);
      }

    } else {

      thrownReport.status = promise ? 4
        : async ? 5
          : 6;
      thrownReport.thrown = thrown;

      thrownReport.path = path;

      try {
        reportMap[mapKey].logs.push(thrownReport);
      } catch (err) {
        reportMap.unsortedLogs.push(thrownReport);
      }

    }


  };

  return reportThrown;
}
