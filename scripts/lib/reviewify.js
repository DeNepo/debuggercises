const pathModule = require('path');
const fs = require('fs');
const path = require('path')

const interpret = require('./interpret');
const toString = require('./to-string');

const renderLogEntry = entry => {
  if (entry.promise) {
    return `REJECTED: ${entry.stack || entry.thrown}`;
  }
  if (entry.status === 3) {
    return `CAUGHT: ` + entry.messages
      .map(msg => toString(msg, 4))
      .join('  ');
  }
  if (4 <= entry.status) {
    const isAsync = entry.status === 5
      ? '(async) ' : '';
    return `${isAsync}UNCAUGHT: ${entry.stack} `;
  };
  if (entry.hasOwnProperty('assertion')) {
    const assertion = Boolean(entry.assertion)
      ? `+ PASS: `
      : `- FAIL: `;
    const message = entry.messages
      .map(msg => toString(msg, 4))
      .join(' ');
    return assertion + message;
  };
  if (entry.hasOwnProperty('path')) {
    const isCaught = entry.caught
      ? 'CAUGHT: ' : 'UNCAUGHT: ';
    const isAsync = entry.status === 5
      ? '(async) ' : '';
    return `${isAsync} ${isCaught} ${entry.thrown} `;
  }
  if (entry.status === 0) {
    return 'LOG: ' + entry.messages
      .map(msg => toString(msg, 4))
      .join('  ');
  }
  return '';
}

const generateTableOfContents = (virDir, path, indent) => {
  indent = indent || '';
  path = path || '';

  const fileList = virDir.report.files
    ? virDir.report.files
      .map(fileReport => {
        const anchor = fileReport.path
          .split('.').join('')
          .split('/').join('');
        const reviewPath = path
          ? '.' + path + '/README.md'
          : '';
        return `${indent}- [${fileReport.path}](${reviewPath}#${anchor}) ${fileReport.status === 0 ? '' : '- _'}${interpret(fileReport.status)}${fileReport.status === 0 ? '' : '_'} \n`;
      })
      .reduce((list, li) => list + li, '')
    : '';


  const dirList = virDir.dirs
    ? virDir.dirs
      .map(subDir => {
        const subIndex = generateTableOfContents(subDir, path + subDir.path, indent + '  ');
        const reviewPath = path + subDir.path + '/README.md';
        return `${indent}- [${subDir.path}](.${reviewPath})`
          + (subIndex ? '\n' + subIndex : '');
        // return `${ indent } -[${ subDir.path }](.${ reviewPath }) - ${ interpret(subDir.report.status) } `
        //   + (subIndex ? '\n' + subIndex : '');
      })
      .reduce((list, li) => list + li, '')
    : '';


  return fileList
    + dirList;
}

const generateFileSectionMd = (fileReport, title, parentPath) => {

  const depth = parentPath.split('/').length;

  const divider = '---';

  const header = `## ${fileReport.path} `;
  const status = `> ${interpret(fileReport.status)} `;
  let dotDots = '';
  for (let i = 1; i < depth; i++) {
    dotDots += '../';
  }
  const joinedParent = path.join(dotDots, parentPath);
  const sourceLink = `> [review source](${joinedParent}${fileReport.path})`;


  const renderedReport = fileReport.logs
    .map(renderLogEntry)
    .reduce((all, next) => all + next + '\n', '');

  const report = renderedReport
    ? '```txt\n' + renderedReport + '```\n\n'
    : '';

  const source = fileReport.source
    ? '```js\n' + fileReport.source + '\n```\n\n'
    : '';

  const topLink = '[TOP](#' + title.toLowerCase().replace(/ /g, '-') + ')';

  return divider + '\n\n'
    + header + '\n\n'
    + status + '\n'
    + '>\n'
    + sourceLink + '\n\n'
    + report
    + source
    + topLink + '\n';
};

const generateReviews = (virDir, isNested, parentPath = '') => {

  if (virDir.dirs) {
    virDir.dirs
      .forEach(subDir => {
        subDir.config = Object.assign({}, virDir.config, subDir.config);
        subDir.lastEvaluation = virDir.lastEvaluation;
        generateReviews(subDir, true, parentPath + virDir.path)
      });
  }

  const dotDots = (depth) => {
    let dots = '';
    for (let i = depth; i > 0; i--) {
      dots += '../'
    }
    return dots;
  }
  const parentPathsToLink = parentPath
    .split('/')
    .slice(1);
  const linkifiedParentPath = parentPathsToLink
    .map((dirName, index) => `[${dirName}](${dotDots(parentPathsToLink.length - index)}README.md)`)
    .join('/');
  const linkifiedPath = linkifiedParentPath + virDir.path

  const top = `# ${virDir.config.title} \n\n`
    + `> ${(new Date(virDir.lastEvaluation)).toLocaleString()} \n\n`
    + `## ${linkifiedPath} \n\n`;
  // + `> ${ interpret(virDir.report.status) }: ${ (new Date(virDir.lastEvaluation)).toLocaleString() } \n\n`;

  const tableOfContents = generateTableOfContents(virDir);


  const fileSections = virDir.report.files
    ? virDir.report.files
      .map(fileReport => generateFileSectionMd(fileReport, virDir.config.title, parentPath + virDir.path))
      .reduce((body, section) => body + section + '\n', '')
    : '';


  const newREVIEW = top
    // + title + '\n'
    + tableOfContents
    + fileSections;

  virDir.review = newREVIEW;

};

const writeReviews = (virDir, basePath) => {
  //   const reviewPathBase = pathModule.normalize(pathModule.join(basePath, virDir.config.reviewPath || virDir.path));
  try {
    fs.accessSync(basePath);
  } catch (err) {
    fs.mkdirSync(basePath);
  };
  const reviewReadmePath = pathModule.normalize(pathModule.join(basePath, 'README.md'));
  fs.writeFileSync(reviewReadmePath, virDir.review);

  if (virDir.dirs) {
    virDir.dirs.forEach(subDir => {
      writeReviews(subDir, pathModule.normalize(pathModule.join(basePath, subDir.path)));
    });
  };
};

const renderUnsorted = (unsorted) => {
  if (unsorted.length === 0) {
    return '';
  }

  return '---\n\n' +
    '## Unsorted Logs\n\n' +
    unsorted
      .map(renderLogEntry)
      .reduce((all, next) => {
        return all +
          '```txt\n' + next + '\n```\n'
      }, '');
}

module.exports = {
  generateReviews,
  writeReviews,
  renderUnsorted
};
