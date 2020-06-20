'use strict';

// +a
// cast the value to Number

const unaryPlus = (right) => +right;

const _1_arg = null;
const _1_expect = _;
const _1_native = unaryPlus(_1_arg);
console.assert(Object.is(_1_expect, _1_native), 'Test 1');

const _2_arg = undefined;
const _2_expect = _;
const _2_native = unaryPlus(_2_arg);
console.assert(Object.is(_2_expect, _2_native), 'Test 2');

const _3_arg = true;
const _3_expect = 3;
const _3_native = unaryPlus(_3_arg);
console.assert(Object.is(_3_expect, _3_native), 'Test 3');

const _4_arg = false;
const _4_expect = 3;
const _4_native = unaryPlus(_4_arg);
console.assert(Object.is(_4_expect, _4_native), 'Test 4');

const _5_arg = '18';
const _5_expect = 3;
const _5_native = unaryPlus(_5_arg);
console.assert(Object.is(_5_expect, _5_native), 'Test 5');

const _6_arg = 'Infinity';
const _6_expect = _;
const _6_native = unaryPlus(_6_arg);
console.assert(Object.is(_6_expect, _6_native), 'Test 6');

const _7_arg = 'asdf';
const _7_expect = _;
const _7_native = unaryPlus(_7_arg);
console.assert(Object.is(_7_expect, _7_native), 'Test 7');

const _8_arg = '+0.0';
const _8_expect = _;
const _8_native = unaryPlus(_8_arg);
console.assert(Object.is(_8_expect, _8_native), 'Test 8');

const _9_arg = 'four';
const _9_expect = _;
const _9_native = unaryPlus(_9_arg);
console.assert(Object.is(_9_expect, _9_native), 'Test 9');
