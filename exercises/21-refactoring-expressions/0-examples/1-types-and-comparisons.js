'use strict';

// 0: original expression
const originalExpression = (a) => Number(Boolean(a) === true);

// 1: explicit return
const explicitReturn = (a) => {
  return Number(Boolean(a) === true);
};

// 2: refactor 1st operation
const refactorOperation1 = (a) => {
  const step1 = Boolean(a);
  return Number(step1 === true);
};

// 3: refactor 2st operation
const refactorOperation2 = (a) => {
  const step1 = Boolean(a);
  const step2 = step1 === true;
  return Number(step2);
};

// 4: refactor 3rd operation
const refactorOperation3 = (a) => {
  const step1 = Boolean(a);
  const step2 = step1 === true;
  const step3 = Number(step2);
  return step3;
};

// done!
