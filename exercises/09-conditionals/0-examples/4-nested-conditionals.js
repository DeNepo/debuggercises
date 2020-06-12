'use strict';

// nesting conditionals is also possible
//  there are four possible paths
//  and 3 conditional statements, but only 2 will ever execute!

function nestedConditionals(a, b, c) {
  let result = '';

  if (a) {
    if (b) {
      result = 'a: truthy, b: truthy';
    } else {
      result = 'a: truthy, b: falsy';
    }
  } else {
    if (c) {
      result = 'a: falsy, c: truthy';
    } else {
      result = 'a: falsy, c: falsy';
    }
  }

  return result;
}


const result1 = nestedConditionals(true, true, true);
const isTrue1 = result1 === 'a: truthy, b: truthy';
console.assert(isTrue1, 'Test 1');

const result2 = nestedConditionals(true, true, false);
const isTrue2 = result2 === 'a: truthy, b: truthy';
console.assert(isTrue2, 'Test 2');

const result3 = nestedConditionals(true, false, true);
const isTrue3 = result3 === 'a: truthy, b: falsy';
console.assert(isTrue3, 'Test 3');

const result4 = nestedConditionals(true, false, false);
const isTrue4 = result4 === 'a: truthy, b: falsy';
console.assert(isTrue4, 'Test 4');

const result5 = nestedConditionals(false, true, true);
const isTrue5 = result5 === 'a: falsy, c: truthy';
console.assert(isTrue5, 'Test 5');

const result6 = nestedConditionals(false, false, true);
const isTrue6 = result6 === 'a: falsy, c: truthy';
console.assert(isTrue6, 'Test 6');

const result7 = nestedConditionals(false, true, false);
const isTrue7 = result7 === 'a: falsy, c: falsy';
console.assert(isTrue7, 'Test 7');

const result8 = nestedConditionals(false, false, false);
const isTrue8 = result8 === 'a: falsy, c: falsy';
console.assert(isTrue8, 'Test 8');
