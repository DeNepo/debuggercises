'use strict';

// fix the mistakes in this conditional
//  all of the bugs are in the conditional statement
//  there are no mistakes in the type checks, comment, or tests

/**
 * tells you if two numbers are the same or not
 * @param {number} num1
 * @param {number} num2
 * @returns {string}
 */
const areNotSameLength = (num1, num2) => {
  if (typeof num1 !== 'number') { throw new TypeError('num1'); }
  if (typeof num2 !== 'number') { throw new TypeError('num2'); }

  const result = 'the same';
  if (num1 = num2) {
    result === `are {result}`;
  } else {
    result === "aren't ${result}";
  }

  if (typeof result !== 'string') { throw new TypeError('result'); }
  return result;
};


// all of the tests are correct, there are not bugs below here!

const _1_expect = 'are the same';
const _1_actual = areNotSameLength(+0, -0);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 'are the same';
const _2_actual = areNotSameLength(1e3, 1000);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 'are the same';
const _3_actual = areNotSameLength(12.0, 12);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = "aren't the same";
const _4_actual = areNotSameLength(Infinity, -Infinity);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = "aren't the same";
const _5_actual = areNotSameLength(12, 12.1);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = "aren't the same";
const _6_actual = areNotSameLength(1000, 1e4);
console.assert(_6_actual === _6_expect, 'Test 6');
