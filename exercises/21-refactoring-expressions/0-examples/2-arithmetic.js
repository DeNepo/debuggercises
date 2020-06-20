'use strict';

// 0: original expression
const originalExpression = (a, b) => a * (b + b) / a;

// 1: explicit return
const explicitReturn = (a, b) => {
  return a * (b + b) / a;
};

// 2: refactor 1st operation
const refactorOperation1 = (a, b) => {
  const step1 = b + b;
  return a * (step1) / a;
};

// 3: refactor 2st operation
const refactorOperation2 = (a, b) => {
  const step1 = b + b;
  const step2 = a * step1;
  return step2 / a;
};

// 4: refactor 3rd operation
const refactorOperation3 = (a, b) => {
  const step1 = b + b;
  const step2 = a * step1;
  const step3 = step2 / a;
  return step3;
};

// done!
