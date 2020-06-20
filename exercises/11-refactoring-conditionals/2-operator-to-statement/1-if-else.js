'use strict';

// refactor this function ot use if/else statements
const conditional = (a, b) => {
  const result = typeof a === 'boolean'
    ? !a
    : b;
  return result;
};

// path 1
const _1_expect = true;
const _1_actual = conditional(false, 'x');
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = false;
const _2_actual = conditional(true, null);
console.assert(_2_actual === _2_expect, 'Test 2');

// path 2
const _5_expect = 12;
const _5_actual = conditional(NaN, 12);
console.assert(_5_actual === _5_expect, 'Test 3');

const _6_expect = 'bye';
const _6_actual = conditional('hi!', 'bye');
console.assert(_6_actual === _6_expect, 'Test 4');
