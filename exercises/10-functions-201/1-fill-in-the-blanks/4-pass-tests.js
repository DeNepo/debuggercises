'use strict';

// write the logic to pass the tests
// describe the function's behavior in the comment

/**
 * _
 * @param {any} a
 * @returns {boolean}
 */
function mystery(a) {
  // no need to check a , they can be any type

  const result = _;

  if (typeof result !== 'boolean') { throw new TypeError(); }
  return result;
}


const _1_expect = false;
const _1_actual = mystery('1');
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = false;
const _2_actual = mystery(true);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = false;
const _3_actual = mystery(null);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = false;
const _4_actual = mystery(8.5);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = false;
const _5_actual = mystery('Infinity');
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = false;
const _6_actual = mystery('');
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = true;
const _7_actual = mystery(undefined);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = true;
const _8_actual = mystery('four');
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = true;
const _9_actual = mystery('hi!');
console.assert(_9_actual === _9_expect, 'Test 9');
