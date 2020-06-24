'use strict';

/**
 * reproduces the behavior of -a for primitive types
 * @param {any} a
 * @returns {number}
 */
function unaryMinus(a) {

};

const _1_a = 1;
const _1_native = -_1_a;
const _1_copy = unaryMinus(_1_a);
console.assert(Object.is(_1_copy, _1_native), 'Test 1');

const _2_a = '1';
const _2_native = -_2_a;
const _2_copy = unaryMinus(_2_a);
console.assert(Object.is(_2_copy, _2_native), 'Test 2');

const _3_a = '1';
const _3_native = -_3_a;
const _3_copy = unaryMinus(_3_a);
console.assert(Object.is(_3_copy, _3_native), 'Test 3');

const _4_a = true;
const _4_native = -_4_a;
const _4_copy = unaryMinus(_4_a);
console.assert(Object.is(_4_copy, _4_native), 'Test 4');

const _5_a = true;
const _5_native = -_5_a;
const _5_copy = unaryMinus(_5_a);
console.assert(Object.is(_5_copy, _5_native), 'Test 5');

const _6_a = false;
const _6_native = -_6_a;
const _6_copy = unaryMinus(_6_a);
console.assert(Object.is(_6_copy, _6_native), 'Test 6');

const _7_a = false;
const _7_native = -_7_a;
const _7_copy = unaryMinus(_7_a);
console.assert(Object.is(_7_copy, _7_native), 'Test 7');

const _8_a = null;
const _8_native = -_8_a;
const _8_copy = unaryMinus(_8_a);
console.assert(Object.is(_8_copy, _8_native), 'Test 8');

const _9_a = undefined;
const _9_native = -_9_a;
const _9_copy = unaryMinus(_9_a);
console.assert(Object.is(_9_copy, _9_native), 'Test 9');
