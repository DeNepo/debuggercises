'use strict';

const conditional = (a, b) => {
  const result = typeof a === 'boolean'
    ? a === b
      ? a
      : typeof b
    : typeof b === 'boolean'
      ? b
      : typeof a;
  return result;
};

// path 1
const _1_expect = true;
const _1_actual = conditional(true, true);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = false;
const _2_actual = conditional(false, false);
console.assert(_2_actual === _2_expect, 'Test 2');

// path 2
const _3_expect = 'object';
const _3_actual = conditional(true, null);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 'string';
const _4_actual = conditional(false, 'hello!');
console.assert(_4_actual === _4_expect, 'Test 4');

// path 3
const _5_expect = true;
const _5_actual = conditional('true', true);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = false;
const _6_actual = conditional('false', false);
console.assert(_6_actual === _6_expect, 'Test 6');

// path 4
const _7_expect = 'string';
const _7_actual = conditional('hello', 100);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = 'undefined';
const _8_actual = conditional(undefined, null);
console.assert(_8_actual === _8_expect, 'Test 8');
