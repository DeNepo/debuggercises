'use strict';

// refactor this function ot use if/else statements
const conditional = (a, b) => {
  const result = !a && !b
    ? a
    : a && b
      ? b
      : typeof a;
  return result;
};

// path 1
const _1_expect = 0;
const _1_actual = conditional(0, false);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = '';
const _2_actual = conditional('', null);
console.assert(_2_actual === _2_expect, 'Test 2');

// path 2
const _3_expect = 100;
const _3_actual = conditional(true, 100);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 12;
const _4_actual = conditional(-12, 12);
console.assert(_4_actual === _4_expect, 'Test 4');

// path 3
const _5_expect = 'boolean';
const _5_actual = conditional(false, true);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = 'number';
const _6_actual = conditional(100, false);
console.assert(_6_actual === _6_expect, 'Test 6');
