'use strict';

// refactor this function ot use a ternary operator
const conditional = (a, b) => {
  let result;
  if (a && b) {
    result = !a;
  } else if (a || b) {
    result = !b;
  } else {
    result = a === b;
  }
  return result;
};

// path 1
const _1_expect = false;
const _1_actual = conditional(1, true);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = false;
const _2_actual = conditional('hi', 'bye');
console.assert(_2_actual === _2_expect, 'Test 2');

// path 2
const _3_expect = true;
const _3_actual = conditional(true, null);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = false;
const _4_actual = conditional(false, 12);
console.assert(_4_actual === _4_expect, 'Test 4');

// path 3
const _5_expect = true;
const _5_actual = conditional(false, false);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = false;
const _6_actual = conditional(false, 0);
console.assert(_6_actual === _6_expect, 'Test 6');
