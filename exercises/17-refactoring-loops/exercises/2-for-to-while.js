'use strict';

/**
 * among the greatest mysteries in the world, no one knows!
 * @param {number}
 * @returns {number}
 */
const mystery = (x) => {
  if (typeof x !== 'number') { throw new TypeError('x'); }

  let result = 0;
  for (let i = 0; i !== Math.abs(x); i++) {
    if (x > 0) {
      result += 1;
    } else {
      result += -1;
    }
  }

  if (typeof result !== 'number') { throw new TypeError('result'); }
  return result;
};


const _1_actual = mystery(-4);
const _1_expect = -4;
console.assert(_1_actual === _1_expect, 'Test  1');

const _2_actual = mystery(-3);
const _2_expect = -3;
console.assert(_2_actual === _2_expect, 'Test  2');

const _3_actual = mystery(-2);
const _3_expect = -2;
console.assert(_3_actual === _3_expect, 'Test  3');

const _4_actual = mystery(-1);
const _4_expect = -1;
console.assert(_4_actual === _4_expect, 'Test  4');

const _5_expect = 0;
const _5_actual = mystery(0);
console.assert(_5_actual === _5_expect, 'Test  5');

const _6_expect = 1;
const _6_actual = mystery(1);
console.assert(_6_actual === _6_expect, 'Test  6');

const _7_expect = 2;
const _7_actual = mystery(2);
console.assert(_7_actual === _7_expect, 'Test  7');

const _8_expect = 3;
const _8_actual = mystery(3);
console.assert(_8_actual === _8_expect, 'Test  8');

const _9_expect = 4;
const _9_actual = mystery(4);
console.assert(_9_actual === _9_expect, 'Test  9');
