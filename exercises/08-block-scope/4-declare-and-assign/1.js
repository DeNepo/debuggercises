'use strict';

_;
console.assert(a === false, 'Test 1');
{
  _;
  console.assert(a === null, 'Test 2');
}
console.assert(a === false, 'Test 3');
