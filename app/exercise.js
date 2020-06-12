export default (() => {
  function Exercise(path, dirPath, userConfig = {}) {
    if (typeof path !== 'string') {
      throw new TypeError('path must be a string');
    };
    this.path = {
      rel: path,
      abs: dirPath ? dirPath + path : null
    };
    const orderedConfigKeys = Object.keys(userConfig);
    Object.keys(Exercise.defaultConfig)
      .forEach((key) => {
        if (!orderedConfigKeys.includes(key)) {
          orderedConfigKeys.push(key);
        }
      });
    this.config = orderedConfigKeys
      .reduce((finalConfig, key) => {
        finalConfig[key] = Object.keys(userConfig).includes(key)
          ? userConfig[key]
          : Exercise.defaultConfig[key];
        return finalConfig;
      }, {});
  }

  Exercise.vizTools = {
    console: (code) => {
      eval(code);
    },
    debugger: (code) => {
      const stepThrough = eval;
      const debuggered = "debugger;\n\n" + code;
      stepThrough(debuggered);
    },
    jsTutor: (code) => {
      const encodedJST = encodeURIComponent(code);
      const sanitizedJST = Exercise.utils.sanitize(encodedJST);
      const jsTutorURL = "http://www.pythontutor.com/live.html#code=" + sanitizedJST + "&cumulative=false&curInstr=2&heapPrimitives=false&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false";
      window.open(jsTutorURL, '_blank');
    },
    loupe: (code) => {
      const encoded = encodeURIComponent(btoa(code));
      const loupeURL = "http://latentflip.com/loupe/?code=" + encoded + "!!!"
      window.open(loupeURL, '_blank');
    },
    promisees: (code) => {
      const encoded = encodeURIComponent(code).replace(/%20/g, '+');
      const URL = "https://bevacqua.github.io/promisees/#code=" + encoded;
      window.open(URL, '_blank');
    },
    flowViz: (code) => {
      const encoded = encodeURIComponent(code);
      const sanitized = Exercise.utils.sanitize(encoded);
      const URL = 'https://janke-learning.org/flowviz?snippet=' + sanitized;
      window.open(URL, '_blank');
    },
    parsonizer: (code) => {
      const encoded = encodeURIComponent(code);
      const sanitized = Exercise.utils.sanitize(encoded);
      const URL = 'https://janke-learning.org/parsonizer?code=' + sanitized;
      window.open(URL, '_blank');
    },
    jsHint: (code) => {
      const encoded = encodeURIComponent(code);
      const sanitized = Exercise.utils.sanitize(encoded);
      const URL = 'https://janke-learning.org/linter?snippet=' + sanitized;
      window.open(URL, '_blank');
    },
    spot: (code) => {
      const encoded = encodeURIComponent(code);
      const sanitized = Exercise.utils.sanitize(encoded);
      const URL = 'https://janke-learning.org/spot?snippet=' + sanitized;
      window.open(URL, '_blank');
    },
    shuffle: (code) => {
      const encoded = encodeURIComponent(code);
      const sanitized = Exercise.utils.sanitize(encoded);
      const URL = 'https://janke-learning.org/shuffle?snippet=' + sanitized;
      window.open(URL, '_blank');
    },
    // staticStudy: (code) => {
    //   const encoded = encodeURIComponent(code);
    //   const sanitized = Exercise.utils.sanitize(encoded);
    //   const URL = 'https://janke-learning.org/static-study?snippet=' + sanitized;
    //   window.open(URL, '_blank');
    // },
    codeAlong: (code) => {
      const encoded = encodeURIComponent(code);
      const sanitized = Exercise.utils.sanitize(encoded);
      const URL = 'https://janke-learning.org/code-along?snippet=' + sanitized;
      window.open(URL, '_blank');
    },
    babel: async (code) => {
      // conditionally load this function since it's large and not often used
      if (!Exercise.utils.compressToBase64) {
        const { compressToBase64 } = await import('./utils/LZStringCompressToBase64.js');
        Exercise.utils.compressToBase64 = compressToBase64;
      }
      // pulled from the site's source
      const encoded = Exercise.utils.compressToBase64(code)
        .replace(/\+/g, "-") // Convert '+' to '-'
        .replace(/\//g, "_") // Convert '/' to '_'
        .replace(/=+$/, ""); // Remove ending '=';
      const URL = `https://babeljs.io/repl#?browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=${encoded}&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=true&sourceType=module&lineWrap=true&presets=es2015%2Cstage-3&prettier=false&targets=&version=7.9.0&externalPlugins=`
      window.open(URL, '_blank');
    },
    esprima: (code) => {
      const encoded = encodeURIComponent(code);
      const URL = 'https://esprima.org/demo/parse.html?code=' + encoded;
      window.open(URL, '_blank');
    },
    tsTutor: (code) => {
      const encodedTST = encodeURIComponent(code);
      const sanitizedJTST = Exercise.utils.sanitize(encodedTST);
      const tsTutorURL = `http://www.pythontutor.com/visualize.html#code=${encodedTST}&cumulative=false&curInstr=0&heapPrimitives=false&mode=display&origin=opt-frontend.js&py=ts&rawInputLstJSON=%5B%5D&textReferences=false`;
      window.open(tsTutorURL, '_blank');
    },
  };

  Object.defineProperty(Exercise, 'defaultConfig', {
    get: () => Object.keys(Exercise.vizTools)
      .reduce((config, key) => {
        if (key === 'console' || key === 'debugger') {
          config[key] = true;
        } else {
          config[key] = false;
        }
        return config;
      }, {})
  });

  Exercise.utils = {
    sanitize: (str) => str
      .replace(/\(/g, '%28')
      .replace(/\)/g, '%29')
      .replace(/%09/g, '%20%20'),
    // large code, to be initialized when needed. ie. babel
    compressToBase64: null,
    studyWith: function (cb) {
      const studyType = cb.name;
      // xhr for a promise-free callstack in console & debugger
      const xhr = new XMLHttpRequest();
      xhr.open('GET', '.' + this.path.abs);
      xhr.setRequestHeader("study", studyType);
      xhr.responseType = 'text';
      xhr.send();
      xhr.onload = () => {
        if (xhr.status != 200) {
          console.error(`${xhr.status}: ${xhr.statusText}`);
        } else {
          const code = xhr.response;
          console.log(`--- ${studyType}: ${this.path.rel} ----`);
          cb(code);
        }
      }
      xhr.onerror = function (err) {
        console.error(err);
      }
    }
  }

  Exercise.prototype.load = async function (loadingMsg) {
    if (loadingMsg) { console.log(loadingMsg); }
    return await import('..' + this.path.abs);
  }

  Exercise.prototype.source = async function (loadingMsg) {
    if (loadingMsg) { console.log(loadingMsg); }
    try {
      const res = await fetch('.' + this.path.abs);
      const code = await res.text();
      return code;
    } catch (err) {
      console.error(err);
    }
  }

  Exercise.prototype.render = function () {
    const container = document.createElement('span');

    const nameEl = document.createElement('text');
    nameEl.innerHTML = this.path.rel + ' : ';
    container.appendChild(nameEl);

    for (let vizTool in this.config) {
      if (this.config[vizTool] && typeof Exercise.vizTools[vizTool] === 'function') {
        const vizToolButton = document.createElement('button');
        vizToolButton.style = 'padding-right: .5em';
        vizToolButton.innerHTML = vizTool;
        vizToolButton.onclick = () => Exercise.utils.studyWith.call(this, Exercise.vizTools[vizTool]);
        container.appendChild(vizToolButton);
      }
    }

    return container;
  }

  Object.freeze(Exercise);

  return Exercise;
})();
