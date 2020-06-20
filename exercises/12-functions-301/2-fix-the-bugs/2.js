'use strict';

// fix the mistakes in this conditional
//  all of the bugs are in the conditional statement
//  there are no mistakes in the type checks, comment, or tests

/**
 * returns false if the arguments are the same length
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean}
 */
const areNotSameLength = (str1, str2) => {
  if (typeof str1 !== 'string') { throw new TypeError('str1'); }
  if (typeof str2 !== 'string') { throw new TypeError('str2'); }

  let result;
  if (str1.Length = str2.Length) {
    result = result + true;
  } else {
    result = result + false;
  }

  if (typeof result !== 'boolean') { throw new TypeError('result'); }
  return result;
};


// all of the tests are correct, there are not bugs below here!

const _1_expect = true;
const _1_actual = areNotSameLength('carboat', 'car boat');
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = true;
const _2_actual = areNotSameLength('water', 'waterfall');
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = true;
const _3_actual = areNotSameLength('water fall', 'waterfall');
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = true;
const _4_actual = areNotSameLength('birch', 'oak');
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = false;
const _5_actual = areNotSameLength('aspen', 'birch');
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = false;
const _6_actual = areNotSameLength('hi!', 'bye');
console.assert(_6_actual === _6_expect, 'Test 6');
