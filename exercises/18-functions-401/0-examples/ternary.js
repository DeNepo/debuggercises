'use strict';

/**
 * behaves exactly the same as the ternary operator
 * @param {any} a - the condition
 * @param {any} b - the return value if truthy
 * @param {any} c - the return value if falsy
 * @returns {any}
 */

const explicit1 = (a, b, c) => {
  const result = a ? b : c;
  return result;
};

const explicit2 = (a, b, c) => {
  return a ? b : c;
};

const implicit = (a, b, c) => a ? b : c;


const _1_arg1 = 1;
const _1_arg2 = 1;
const _1_arg3 = 0;
const _1_explicit1 = explicit1(_1_arg1, _1_arg2, _1_arg3);
const _1_explicit2 = explicit2(_1_arg1, _1_arg2, _1_arg3);
const _1_implicit = implicit(_1_arg1, _1_arg2, _1_arg3);
console.assert(_1_explicit1 === _1_implicit && _1_explicit2 === _1_implicit, 'Test 1');

const _2_arg1 = 1;
const _2_arg2 = 0;
const _2_arg3 = 0;
const _2_explicit1 = explicit1(_2_arg1, _2_arg2, _2_arg3);
const _2_explicit2 = explicit2(_2_arg1, _2_arg2, _2_arg3);
const _2_implicit = implicit(_2_arg1, _2_arg2, _2_arg3);
console.assert(_2_explicit1 === _2_implicit && _2_explicit2 === _2_implicit, 'Test 2');

const _3_arg1 = 0;
const _3_arg2 = 1;
const _3_arg3 = 0;
const _3_explicit1 = explicit1(_3_arg1, _3_arg2, _3_arg3);
const _3_explicit2 = explicit2(_3_arg1, _3_arg2, _3_arg3);
const _3_implicit = implicit(_3_arg1, _3_arg2, _3_arg3);
console.assert(_3_explicit1 === _3_implicit && _3_explicit2 === _3_implicit, 'Test 3');

const _4_arg1 = 0;
const _4_arg2 = 0;
const _4_arg3 = 0;
const _4_explicit1 = explicit1(_4_arg1, _4_arg2, _4_arg3);
const _4_explicit2 = explicit2(_4_arg1, _4_arg2, _4_arg3);
const _4_implicit = implicit(_4_arg1, _4_arg2, _4_arg3);
console.assert(_4_explicit1 === _4_implicit && _4_explicit2 === _4_implicit, 'Test 4');

