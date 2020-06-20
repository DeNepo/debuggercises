'use strict';

const statement = (a, b) => {
  let result = '';
  if (typeof a === typeof b) {
    result = 'path 1';
  } else {
    result = 'path 2';
  }
  return result;
};

const operator = (a, b) => {
  const result = typeof a === typeof b
    ? 'path 1'
    : 'path 2';
  return result;
};

// path 1

const _1_arg1 = true;
const _1_arg2 = false;
const _1_expect = 'path 1';
const _1_actualStatement = statement(_1_arg1, _1_arg2);
const _1_actualOperator = operator(_1_arg1, _1_arg2);
console.assert(_1_actualStatement === _1_expect, 'Test 1: Statement');
console.assert(_1_actualOperator === _1_expect, 'Test 1: Operator');

const _2_arg1 = 1;
const _2_arg2 = -1;
const _2_expect = 'path 1';
const _2_actualStatement = statement(_2_arg1, _2_arg2);
const _2_actualOperator = operator(_2_arg1, _2_arg2);
console.assert(_2_actualStatement === _2_expect, 'Test 2: Statement');
console.assert(_2_actualOperator === _2_expect, 'Test 2: Operator');

// path 2

const _3_arg1 = 'true';
const _3_arg2 = true;
const _3_expect = 'path 2';
const _3_actualStatement = statement(_3_arg1, _3_arg2);
const _3_actualOperator = operator(_3_arg1, _3_arg2);
console.assert(_3_actualStatement === _3_expect, 'Test 3: Statement');
console.assert(_3_actualOperator === _3_expect, 'Test 3: Operator');

const _4_arg1 = null;
const _4_arg2 = NaN;
const _4_expect = 'path 2';
const _4_actualStatement = statement(_4_arg1, _4_arg2);
const _4_actualOperator = operator(_4_arg1, _4_arg2);
console.assert(_4_actualStatement === _4_expect, 'Test 4: Statement');
console.assert(_4_actualOperator === _4_expect, 'Test 4: Operator');
