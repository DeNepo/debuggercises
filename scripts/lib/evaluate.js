const fs = require('fs');

// todo: infinite loop & interval guards
const evaluate = (mapObj, PARENT_DIR, reportThrown) => {
  for (let path in mapObj) {
    if (path === 'unsortedLogs') { continue; }

    const thisPath = PARENT_DIR + path;
    try {
      mapObj[path].source = fs.readFileSync(thisPath, 'utf-8');
      mapObj[path].evaluated = true;
      require(thisPath);
    } catch (err) {
      reportThrown(err, path);
    };
  };
};


module.exports = evaluate;
