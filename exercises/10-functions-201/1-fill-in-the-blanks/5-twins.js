'use strict';

// write two different implementations with the same behavior
//  hint: demorgan

/**
 * returns true if neither argument is true, false if either are true
 * @param {boolean} x
 * @param {boolean} y
 * @returns {boolean}
 */
function notAndA(x, y) {
  if (typeof x !== 'boolean') { throw new TypeError(); }
  if (typeof y !== 'boolean') { throw new TypeError(); }

  const result = _;

  if (typeof result !== 'boolean') { throw new TypeError(); }
  return result;
}

/**
 * returns true if neither argument is true, false if either are true
 * @param {boolean} x
 * @param {boolean} y
 * @returns {boolean}
 */
function notAndB(x, y) {
  if (typeof x !== 'boolean') { throw new TypeError(); }
  if (typeof y !== 'boolean') { throw new TypeError(); }

  const result = _;

  if (typeof result !== 'boolean') { throw new TypeError(); }
  return result;
}


const _1_arg1 = false;
const _1_arg2 = false;
const _1_expect = true;
const _1_actualA = notAndA(_1_arg1, _1_arg2);
const _1_actualB = notAndB(_1_arg1, _1_arg2);
console.assert(_1_actualA === _1_expect, 'Test 1 A');
console.assert(_1_actualB === _1_expect, 'Test 1 B');

const _2_arg1 = true;
const _2_arg2 = false;
const _2_expect = false;
const _2_actualA = notAndA(_2_arg1, _2_arg2);
const _2_actualB = notAndB(_2_arg1, _2_arg2);
console.assert(_2_actualA === _2_expect, 'Test 2 A');
console.assert(_2_actualB === _2_expect, 'Test 2 B');

const _3_arg1 = false;
const _3_arg2 = true;
const _3_expect = false;
const _3_actualA = notAndA(_3_arg1, _3_arg2);
const _3_actualB = notAndB(_3_arg1, _3_arg2);
console.assert(_3_actualA === _3_expect, 'Test 3 A');
console.assert(_3_actualB === _3_expect, 'Test 3 B');

const _4_arg1 = true;
const _4_arg2 = true;
const _4_expect = false;
const _4_actualA = notAndA(_4_arg1, _4_arg2);
const _4_actualB = notAndB(_4_arg1, _4_arg2);
console.assert(_4_actualA === _4_expect, 'Test 4 A');
console.assert(_4_actualB === _4_expect, 'Test 4 B');
