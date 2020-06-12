'use strict';

// conditionals decide which path to execute based on truthiness

function truthinessDecides(value) {
  let result = '';
  if (value) {
    result = 'path 1: truthy';
  } else {
    result = 'path 2: falsy';
  }
  return result;
}

const result1 = truthinessDecides(1);
const isTrue1 = result1 === 'path 1: truthy';
console.assert(isTrue1, 'Test 1: path 1');

const result2 = truthinessDecides('hi!');
const isTrue2 = result2 === 'path 1: truthy';
console.assert(isTrue2, 'Test 2: path 1');

const result3 = truthinessDecides(true);
const isTrue3 = result3 === 'path 1: truthy';
console.assert(isTrue3, 'Test 3: path 1');

const result4 = truthinessDecides(0);
const isTrue4 = result4 === 'path 2: falsy';
console.assert(isTrue4, 'Test 4: path 2');

const result5 = truthinessDecides('');
const isTrue5 = result5 === 'path 2: falsy';
console.assert(isTrue5, 'Test 5: path 2');

const result6 = truthinessDecides(false);
const isTrue6 = result6 === 'path 2: falsy';
console.assert(isTrue6, 'Test 6: path 2');

const result7 = truthinessDecides(null);
const isTrue7 = result7 === 'path 2: falsy';
console.assert(isTrue7, 'Test 7: path 2');

const result8 = truthinessDecides(undefined);
const isTrue8 = result8 === 'path 2: falsy';
console.assert(isTrue8, 'Test 8: path 2');
