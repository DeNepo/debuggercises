'use strict';

const conditional = (a, b) => {
  let result;
  if (typeof a === 'number') {
    if (typeof b === 'number') {
      result = a + b;
    } else {
      result = b;
    }
  } else {
    if (typeof b === 'string') {
      result = b + a;
    } else {
      result = a;
    }
  }
  return result;
};

// path 1
const _1_expect = 24;
const _1_actual = conditional(12, 12);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 0;
const _2_actual = conditional(-1, 1);
console.assert(_2_actual === _2_expect, 'Test 2');

// path 2
const _3_expect = null;
const _3_actual = conditional(NaN, null);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 'hello!';
const _4_actual = conditional(-3, 'hello!');
console.assert(_4_actual === _4_expect, 'Test 4');

// path 3
const _5_expect = ' -';
const _5_actual = conditional('-', ' ');
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = 'truefalse';
const _6_actual = conditional(false, 'true');
console.assert(_6_actual === _6_expect, 'Test 6');

// path 4
const _7_expect = 'hello';
const _7_actual = conditional('hello', 100);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = true;
const _8_actual = conditional(true, null);
console.assert(_8_actual === _8_expect, 'Test 8');
