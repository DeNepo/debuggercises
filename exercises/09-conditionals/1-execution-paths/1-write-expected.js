function mystery(a, b) {
  let result = '';
  if (a && b) {
    result = 'path 1';
  } else if (!a && !b) {
    result = 'path 2';
  } else {
    result = 'path 3';
  }
  return result;
}


const _1_expect = _;
const _1_actual = mystery(0, null);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = _;
const _2_actual = mystery(false, 'hello');
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = _;
const _3_actual = mystery(true, undefined);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = _;
const _4_actual = mystery(1, -1);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = _;
const _5_actual = mystery('', '');
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = _;
const _6_actual = mystery('_6_expect', '_6_actual');
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = _;
const _7_actual = mystery(0, 12);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = _;
const _8_actual = mystery(null, undefined);
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = _;
const _9_actual = mystery(NaN, Infinity);
console.assert(_9_actual === _9_expect, 'Test 9');
