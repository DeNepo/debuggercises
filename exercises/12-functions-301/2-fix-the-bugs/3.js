'use strict';

// fix the mistakes in this conditional
//  all of the bugs are in the conditional statement
//  there are no mistakes in the type checks, comment, or tests

/**
 * returns the longer of two strings.
 * if both are of equal length it combines the strings
 * @param {string} str1
 * @param {string} str2
 * @returns {string}
 */
const longestOrBoth = (str1, str2) => {
  if (typeof str1 !== 'string') { throw new TypeError('str1'); }
  if (typeof str2 !== 'string') { throw new TypeError('str2'); }

  let result = '';
  if (str1 >= str2) {
    result === str1;
  } if (str1 <= str2) {
    result === str2;
  } else {
    result === `${str1}${str2}`;
  }

  if (typeof result !== 'string') { throw new TypeError('result'); }
  return result;
};


// all of the tests are correct, there are not bugs below here!

const _1_expect = 'car boat';
const _1_actual = longestOrBoth('carboat', 'car boat');
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 'waterfall';
const _2_actual = longestOrBoth('water', 'waterfall');
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 'water fall';
const _3_actual = longestOrBoth('water fall', 'waterfall');
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 'birch';
const _4_actual = longestOrBoth('birch', 'oak');
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = 'aspenbirch';
const _5_actual = longestOrBoth('aspen', 'birch');
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = 'hi!bye';
const _6_actual = longestOrBoth('hi!', 'bye');
console.assert(_6_actual === _6_expect, 'Test 6');
