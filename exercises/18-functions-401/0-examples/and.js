'use strict';

/**
 * behaves exactly the same as the and operator
 * @param {any} a - the left operand
 * @param {any} b - the right operand
 * @returns {any}
 */

const explicit1 = (a, b) => {
  const result = a && b;
  return result;
};

const explicit2 = (a, b) => {
  return a && b;
};

const implicit = (a, b) => a && b;


const _1_arg1 = 1;
const _1_arg2 = 1;
const _1_explicit1 = explicit1(_1_arg1, _1_arg2);
const _1_explicit2 = explicit2(_1_arg1, _1_arg2);
const _1_implicit = implicit(_1_arg1, _1_arg2);
console.assert(_1_explicit1 === _1_implicit && _1_explicit2 === _1_implicit, 'Test 1');

const _2_arg1 = 1;
const _2_arg2 = 0;
const _2_explicit1 = explicit1(_2_arg1, _2_arg2);
const _2_explicit2 = explicit2(_2_arg1, _2_arg2);
const _2_implicit = implicit(_2_arg1, _2_arg2);
console.assert(_2_explicit1 === _2_implicit && _2_explicit2 === _2_implicit, 'Test 2');

const _3_arg1 = 0;
const _3_arg2 = 1;
const _3_explicit1 = explicit1(_3_arg1, _3_arg2);
const _3_explicit2 = explicit2(_3_arg1, _3_arg2);
const _3_implicit = implicit(_3_arg1, _3_arg2);
console.assert(_3_explicit1 === _3_implicit && _3_explicit2 === _3_implicit, 'Test 3');

const _4_arg1 = 0;
const _4_arg2 = 0;
const _4_explicit1 = explicit1(_4_arg1, _4_arg2);
const _4_explicit2 = explicit2(_4_arg1, _4_arg2);
const _4_implicit = implicit(_4_arg1, _4_arg2);
console.assert(_4_explicit1 === _4_implicit && _4_explicit2 === _4_implicit, 'Test 4');

