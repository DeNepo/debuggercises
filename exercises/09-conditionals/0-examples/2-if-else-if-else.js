'use strict';

// if () {} else if () {} else {}
//  create more than 2 possible paths
//  it's impossible to execute more than one of these paths

function sameness(val1, val2) {
  let result = '';
  if (val1 === val2) {
    result = 'strictly equal';
  } else if (typeof val1 === typeof val2) {
    result = 'same type';
  } else {
    result = 'totally different';
  }
  return result;
}

const result1 = sameness(1, 1);
const isTrue1 = result1 === 'strictly equal';
console.assert(isTrue1, 'Test 1');

const result2 = sameness('hello', 'hello');
const isTrue2 = result2 === 'strictly equal';
console.assert(isTrue2, 'Test 2');

const result3 = sameness(null, null);
const isTrue3 = result3 === 'strictly equal';
console.assert(isTrue3, 'Test 3');

const result4 = sameness(12, 21);
const isTrue4 = result4 === 'same type';
console.assert(isTrue4, 'Test 4');

const result5 = sameness(true, false);
const isTrue5 = result5 === 'same type';
console.assert(isTrue5, 'Test 5');

const result6 = sameness('hello', 'goodbye');
const isTrue6 = result6 === 'same type';
console.assert(isTrue6, 'Test 6');

const result7 = sameness(null, true);
const isTrue7 = result7 === 'totally different';
console.assert(isTrue7, 'Test 7');

const result8 = sameness(':(', 0);
const isTrue8 = result8 === 'totally different';
console.assert(isTrue8, 'Test 8');

const result9 = sameness(false, -1);
const isTrue9 = result9 === 'totally different';
console.assert(isTrue9, 'Test 9');
