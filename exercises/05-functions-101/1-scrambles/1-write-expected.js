'use strict';

function scramble(param1, param2, param3) {
  return `${param3}${param1}${param2}`;
}

const _1_expect = _;
const _1_actual = scramble('a', 'c', 'b');
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = _;
const _2_actual = scramble('a', 'b', 'c');
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = _;
const _3_actual = scramble('c', 'b', 'a');
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = _;
const _4_actual = scramble('b', 'a', 'c');
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = _;
const _5_actual = scramble('b', 'c', 'a');
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = _;
const _6_actual = scramble('c', 'a', 'b');
console.assert(_6_actual === __6expect, 'Test 6');

