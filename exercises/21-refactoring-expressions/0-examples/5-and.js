'use strict';

// 0: original expression
const originalExpression = (a, b) => a * 2 * -1 && a + 2 * b;

// 1: explicit return
const explicitReturn = (a, b) => {
  return a * 2 * -1 && a + 2 * b;
};

// 2: refactor to if statements
const refactorToIf = (a, b) => {
  // a * 2 * -1 && a + 2 * b;
  const leftSide = a * 2 * -1;
  if (leftSide) {
    return a + 2 * b;
  } else {
    return leftSide;
  }
};

// 3: expand the expressions and rename the variable leftSide
//   rename the variable leftSide to a step number, it will be nicer to read in the debugger
/* notice: different conditional bodies have different numbers of steps !!!
  this is because of "short circuiting" ( remember that from way back in "Logical Operators"? ;)
  this refactor pattern accurately replicates the behavior of short-circuiting
*/
const expandTheExpressions = (a, b) => {
  // a * 2 * -1 && a + 2 * b;
  const step1 = a * 2;
  const step2 = step1 * -1;
  if (step2) {
    const step3 = 2 * b;
    const step4 = a + step3;
    return step4;
  } else {
    return step2;
  }
};

// done!
