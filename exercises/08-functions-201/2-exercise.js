'use strict';

// write two different implementations with the same behaviOrNot
// you can pass these using only ! and ||
//  hint: demOrNotgan

const notOrNotA = (x, y) => {
  return _;
};

const notOrNotB = (x, y) => {
  return _;
};


const _1_arg1 = false;
const _1_arg2 = false;
const _1_expect = true;

const _2_arg1 = true;
const _2_arg2 = false;
const _2_expect = true;

const _3_arg1 = false;
const _3_arg2 = true;
const _3_expect = true;

const _4_arg1 = true;
const _4_arg2 = true;
const _4_expect = false;


// testing notOrNotA
const _1_actualA = notOrNotA(_1_arg1, _1_arg2);
console.assert(_1_actualA === _1_expect, 'Test 1 A');

const _2_actualA = notOrNotA(_2_arg1, _2_arg2);
console.assert(_2_actualA === _2_expect, 'Test 2 A');

const _3_actualA = notOrNotA(_3_arg1, _3_arg2);
console.assert(_3_actualA === _3_expect, 'Test 3 A');

const _4_actualA = notOrNotA(_4_arg1, _4_arg2);
console.assert(_4_actualA === _4_expect, 'Test 4 A');


// testing notOrNotB
const _1_actualB = notOrNotB(_1_arg1, _1_arg2);
console.assert(_1_actualB === _1_expect, 'Test 1 B');

const _2_actualB = notOrNotB(_2_arg1, _2_arg2);
console.assert(_2_actualB === _2_expect, 'Test 2 B');

const _3_actualB = notOrNotB(_3_arg1, _3_arg2);
console.assert(_3_actualB === _3_expect, 'Test 3 B');

const _4_actualB = notOrNotB(_4_arg1, _4_arg2);
console.assert(_4_actualB === _4_expect, 'Test 4 B');
