'use strict';

/**
 * reproduces the behavior of (a % b) for primitive types
 * @param {any} a - left operand
 * @param {any} b - right operand
 * @returns {number}
 */
function remainder(a, b) {

};

const _1_a = '8';
const _1_b = 2;
const _1_native = _1_a % _1_b;
const _1_copy = remainder(_1_a, _1_b);
console.assert(Object.is(_1_expect, _1_native), 'Test 1');

const _2_a = '2';
const _2_b = 8;
const _2_native = _2_a % _2_b;
const _2_copy = remainder(_2_a, _2_b);
console.assert(Object.is(_2_expect, _2_native), 'Test 2');

const _3_a = '5';
const _3_b = Infinity;
const _3_native = _3_a % _3_b;
const _3_copy = remainder(_3_a, _3_b);
console.assert(Object.is(_3_expect, _3_native), 'Test 3');

const _4_a = '5';
const _4_b = false;
const _4_native = _4_a % _4_b;
const _4_copy = remainder(_4_a, _4_b);
console.assert(Object.is(_4_expect, _4_native), 'Test 4');

const _5_a = true;
const _5_b = 18;
const _5_native = _5_a % _5_b;
const _5_copy = remainder(_5_a, _5_b);
console.assert(Object.is(_5_expect, _5_native), 'Test 5');

const _6_a = 8;
const _6_b = undefined;
const _6_native = _6_a % _6_b;
const _6_copy = remainder(_6_a, _6_b);
console.assert(Object.is(_6_expect, _6_native), 'Test 6');

const _7_a = 0;
const _7_b = 8;
const _7_native = _7_a % _7_b;
const _7_copy = remainder(_7_a, _7_b);
console.assert(Object.is(_7_expect, _7_native), 'Test 7');

const _8_a = Infinity;
const _8_b = 8;
const _8_native = _8_a % _8_b;
const _8_copy = remainder(_8_a, _8_b);
console.assert(Object.is(_8_expect, _8_native), 'Test 8');

const _9_a = undefined;
const _9_b = '4';
const _9_native = _9_a % _9_b;
const _9_copy = remainder(_9_a, _9_b);
console.assert(Object.is(_9_expect, _9_native), 'Test 9');
