'use strict';

// fill in the blanks to write 9 passing test cases for this function
// be curious!  what happens if you use strange values?

/**
 * compares the type and value of two parameters
 * @param {any} a
 * @param {any} b
 * @returns {boolean} result of the comparison
 */
function strictEqual(a, b) {
  // no need to check a or b, they can be any type

  const result = a === b;

  if (typeof result !== 'boolean') { throw new TypeError(); }
  return result;
}


const _1_expect = _;
const _1_actual = strictEqual(_);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = _;
const _2_actual = strictEqual(_);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = _;
const _3_actual = strictEqual(_);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = _;
const _4_actual = strictEqual(_);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = _;
const _5_actual = strictEqual(_);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = _;
const _6_actual = strictEqual(_);
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = _;
const _7_actual = strictEqual(_);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = _;
const _8_actual = strictEqual(_);
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = _;
const _9_actual = strictEqual(_);
console.assert(_9_actual === _9_expect, 'Test 9');
