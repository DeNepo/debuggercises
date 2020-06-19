const pathModule = require('path');
const fs = require('fs');

// todo: interval guards
const evaluate = (mapObj, PARENT_DIR, reportThrown, maxIterations) => {
  for (let path in mapObj) {
    if (path === 'unsortedLogs') { continue; }

    const thisPath = pathModule.normalize(pathModule.join(PARENT_DIR, path));
    let source = '';
    let loopDetected = '';
    if (typeof maxIterations === 'number') {
      try {
        source = fs.readFileSync(thisPath, 'utf-8');
        mapObj[path].source = source;
        let loopNum = 0;
        loopDetected = source.replace(/for *\(.*\{|while *\(.*\{|do *\{/g, loopHead => {
          const id = ++loopNum;
          return `let _${id} = 0;${loopHead}if (++_${id} > ${maxIterations}) { throw new Error('Loop exceeded ${maxIterations} iterations'); }`
        });
        fs.writeFileSync(thisPath, loopDetected);
      } catch (err) {
        console.error(err);
      };
    }
    try {
      mapObj[path].evaluated = true;
      require(thisPath);
    } catch (err) {
      reportThrown(err, path);
    };
    if (typeof maxIterations === 'number') {
      try {
        fs.writeFileSync(thisPath, source);
      } catch (err) {
        console.error(err);
      };
    };

  };
};


module.exports = evaluate;
