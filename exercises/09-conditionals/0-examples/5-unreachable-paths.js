'use strict';

// it's possible to write conditionals paths that can never happen!
//  keep an eye out for this, it can cause bugs and makes your code hard to understand

function impossibleElse(value) {
  let result = '';
  if (value || !value) {
    result = 'path 1: truthy or falsy';
  } else {
    result = 'path 2: unreachable!';
  }
  return result;
}

const result1 = impossibleElse(1);
const isTrue1 = result1 === 'path 1: truthy or falsy';
console.assert(isTrue1, 'Test 1');

const result2 = impossibleElse('hi!');
const isTrue2 = result2 === 'path 1: truthy or falsy';
console.assert(isTrue2, 'Test 2');

const result3 = impossibleElse(true);
const isTrue3 = result3 === 'path 1: truthy or falsy';
console.assert(isTrue3, 'Test 3');

const result4 = impossibleElse(0);
const isTrue4 = result4 === 'path 1: truthy or falsy';
console.assert(isTrue4, 'Test 4');

const result5 = impossibleElse('');
const isTrue5 = result5 === 'path 1: truthy or falsy';
console.assert(isTrue5, 'Test 5');

const result6 = impossibleElse(false);
const isTrue6 = result6 === 'path 1: truthy or falsy';
console.assert(isTrue6, 'Test 6');

const result7 = impossibleElse(null);
const isTrue7 = result7 === 'path 1: truthy or falsy';
console.assert(isTrue7, 'Test 7');

const result8 = impossibleElse(undefined);
const isTrue8 = result8 === 'path 1: truthy or falsy';
console.assert(isTrue8, 'Test 8');
