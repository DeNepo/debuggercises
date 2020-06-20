'use strict';

// unary operators (!, +, -, ++, --) are higher precedence than operators with 2 arguments (+, &&, *, )
//  PS. none of these exercises will have ++ or --
//  those operators modify variables in memory and make things sooo much more complex

// 0: original expression
const originalExpression = (a, b) => a * -(b + b) / !a;

// 1: explicit return
const explicitReturn = (a, b) => {
  return a * -(b + b) / !a;
};

// 2: refactor 1st operation
const refactorOperation1 = (a, b) => {
  // a * -(b + b) / !a;
  const step1 = b + b;
  return a * -step1 / !a;
};

// 3: refactor 2st operation
const refactorOperation2 = (a, b) => {
  // a * -(b + b) / !a;
  const step1 = b + b;
  const step2 = !a;
  return a * -step1 / step2;
};

// 4: refactor 3rd operation
const refactorOperation3 = (a, b) => {
  // a * -(b + b) / !a;
  const step1 = b + b;
  const step2 = !a;
  const step3 = -step1;
  return a * step3 / step2;
};

// 5: refactor 4rd operation
const refactorOperation4 = (a, b) => {
  // a * -(b + b) / !a;
  const step1 = b + b;
  const step2 = !a;
  const step3 = -step1;
  const step4 = a * step3;
  const step5 = step4 / step2;
  return step5;
};
