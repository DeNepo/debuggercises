'use strict';

// write two different implementations with the same behavior
// you can pass these using only ! and &&
//  hint: demorgan

const notAndNotA = (x, y) => {
  return _;
};


const notAndNotB = (x, y) => {
  return _;
};


const _1_arg1 = false;
const _1_arg2 = false;
const _1_expect = true;

const _2_arg1 = true;
const _2_arg2 = false;
const _2_expect = false;

const _3_arg1 = false;
const _3_arg2 = true;
const _3_expect = false;

const _4_arg1 = true;
const _4_arg2 = true;
const _4_expect = false;


// testing notAndNotA
const _1_actualA = notAndNotA(_1_arg1, _1_arg2);
console.assert(_1_actualA === _1_expect, 'Test 1 A');

const _2_actualA = notAndNotA(_2_arg1, _2_arg2);
console.assert(_2_actualA === _2_expect, 'Test 2 A');

const _3_actualA = notAndNotA(_3_arg1, _3_arg2);
console.assert(_3_actualA === _3_expect, 'Test 3 A');

const _4_actualA = notAndNotA(_4_arg1, _4_arg2);
console.assert(_4_actualA === _4_expect, 'Test 4 A');


// testing notAndNotB
const _1_actualB = notAndNotB(_1_arg1, _1_arg2);
console.assert(_1_actualB === _1_expect, 'Test 1 B');

const _2_actualB = notAndNotB(_2_arg1, _2_arg2);
console.assert(_2_actualB === _2_expect, 'Test 2 B');

const _3_actualB = notAndNotB(_3_arg1, _3_arg2);
console.assert(_3_actualB === _3_expect, 'Test 3 B');

const _4_actualB = notAndNotB(_4_arg1, _4_arg2);
console.assert(_4_actualB === _4_expect, 'Test 4 B');
