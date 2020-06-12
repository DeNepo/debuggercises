
const relPathFromCallStackLine = (callStackLine, PARENT_DIR) => {
  const lineChar = callStackLine.replace(/^[^(]*\(/, "")
    .replace(/\)[^(]*$/, "")
    .split(/\)[^(]*\(/).join('')
  const filePath = lineChar.split(':')[0];
  const relPath = filePath.replace(PARENT_DIR, '');
  // console.log(' = = ', relPath)
  return relPath;
};

const findMapKey = (err, PARENT_DIR, reportMap) => {
  if (err instanceof Error && err.stack.includes('SyntaxError:')) {
    return err.stack.split('\n')[0]
      .replace(PARENT_DIR, '')
      .split(':')[0];
  };

  const reversedStack = err.stack.split('\n').slice(1).reverse();

  const mapKey = reversedStack
    .map(line => relPathFromCallStackLine(line, PARENT_DIR))
    .map(path => path.split(':')[0])
    .find(possibleKey => reportMap[possibleKey]);

  return mapKey;
};

module.exports = findMapKey;
