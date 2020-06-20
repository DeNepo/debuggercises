'use strict';

/*
  &&, || execute from left to right.
  expanding logical expressions is like writing nested conditional statements
*/

// 0: original expression
const originalExpression = (a, b) => typeof a === 'string' || typeof b === 'string' && a !== b;

// 1: explicit return
const explicitReturn = (a, b) => {
  return typeof a === 'string' || typeof b === 'string' && a !== b;
};

// 2: refactor first logical operator to a conditional
const refactorFirstLogicalOperator = (a, b) => {
  // typeof a === 'string' || typeof b === 'string' && a !== b;
  const leftSide = typeof a === 'string'
  if (leftSide) {
    return leftSide;
  } else {
    return typeof b === 'string' && a !== b;
  }
};

// 3: refactor second logical operator to a conditional
const refactorSecondLogicalOperator = (a, b) => {
  // typeof a === 'string' || typeof b === 'string' && a !== b;
  const leftSide = typeof a === 'string'
  if (leftSide) {
    return leftSide;
  } else {
    const leftSide = typeof b === 'string';
    if (leftSide) {
      return a !== b;
    } else {
      return leftSide;
    }
  }
};

// 4: expand expressions & rename variables (moving from top to bottom)
const expandExpressionsAndRename = (a, b) => {
  // typeof a === 'string' || typeof b === 'string' && a !== b;
  const step1 = typeof a;
  const step2 = step1 === 'string'
  if (step2) {
    return step2;
  } else {
    const step3 = typeof b;
    const step4 = step3 === 'string';
    if (step4) {
      const step5 = a !== b;
      return step5;
    } else {
      return step4;
    }
  }
};

// done!
