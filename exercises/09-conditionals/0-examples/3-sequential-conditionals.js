'use strict';

// writing one conditional after another will evaluate both conditionals
//  there are four possible paths
//  both conditionals will always execute

function describeIt(value) {
  let result = '';

  if (value) {
    result += 'truthy';
  } else {
    result += 'falsy';
  }

  if (typeof value === 'number') {
    result += ' number';
  } else {
    result += ' not-number';
  }

  return result;
}

const result1 = describeIt(1);
const isTrue1 = result1 === 'truthy number';
console.assert(isTrue1, 'Test 1');

const result2 = describeIt(-1);
const isTrue2 = result2 === 'truthy number';
console.assert(isTrue2, 'Test 2');

const result3 = describeIt(true);
const isTrue3 = result3 === 'truthy not-number';
console.assert(isTrue3, 'Test 3');

const result4 = describeIt('hello');
const isTrue4 = result4 === 'truthy not-number';
console.assert(isTrue4, 'Test 4');

const result5 = describeIt(0);
const isTrue5 = result5 === 'falsy number';
console.assert(isTrue5, 'Test 5');

const result6 = describeIt(NaN);
const isTrue6 = result6 === 'falsy number';
console.assert(isTrue6, 'Test 6');

const result7 = describeIt(null);
const isTrue7 = result7 === 'falsy not-number';
console.assert(isTrue7, 'Test 7');

const result8 = describeIt(false);
const isTrue8 = result8 === 'falsy not-number';
console.assert(isTrue8, 'Test 8');
