'use strict';

// write a function that behaves the same as &&
//  ... without using &&
function and(left, right) {

}

const _1_expect = 0;
const _1_actual = and(0, 0);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 0;
const _2_actual = and(1, 0);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 0;
const _3_actual = and(0, 1);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 1;
const _4_actual = and(1, 1);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = '';
const _5_actual = and('', 'asdf');
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = '';
const _6_actual = and('asdf', '');
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = false;
const _7_actual = and(true, false);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = NaN;
const _8_actual = and(NaN, undefined);
console.assert(Object.is(_8_actual, _8_expect), 'Test 8');

const _9_expect = 'asdf';
const _9_actual = and(Infinity, 'asdf');
console.assert(_9_actual === _9_expect, 'Test 9');
