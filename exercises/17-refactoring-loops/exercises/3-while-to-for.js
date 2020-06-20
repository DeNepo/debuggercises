'use strict';

// refactor (re-write) this function to use a for loop instead of a while loop
//  it should still pass all the same tests!
// hint: you don't need to understand what the loop does
//  you just need to recognize the pieces of a for loop and rearrange them

/**
 * among the greatest mysteries in the world, no one knows!
 * @param {number} x
 * @returns {number}
 */
const mystery = (x) => {
  if (typeof x !== 'number') { throw new TypeError('x'); }

  let result = 0;
  let i = 0;
  while (i !== x) {
    result += i;
    i += 2;
  }

  if (typeof result !== 'number') { throw new TypeError('result'); }
  return result;
};


const _1_expect = 0;
const _1_actual = mystery(0);
console.assert(_1_actual === _1_expect, 'Test  1');

const _2_expect = 2450;
const _2_actual = mystery(100);
console.assert(_2_actual === _2_expect, 'Test  2');

const _3_expect = 30;
const _3_actual = mystery(12);
console.assert(_3_actual === _3_expect, 'Test  3');

const _4_expect = 20;
const _4_actual = mystery(10);
console.assert(_4_actual === _4_expect, 'Test  4');

const _5_expect = 1406;
const _5_actual = mystery(76);
console.assert(_5_actual === _5_expect, 'Test  5');

const _6_expect = 0;
const _6_actual = mystery(2);
console.assert(_6_actual === _6_expect, 'Test  6');

