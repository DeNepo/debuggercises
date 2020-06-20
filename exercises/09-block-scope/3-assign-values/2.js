'use strict';

let x = _;
console.assert(x === null, 'Test 1: x');
{
  x = _;
  const y = _;

  console.assert(x === false, 'Test 2: x');
  console.assert(y === null, 'Test 3: y');
}
console.assert(x === false, 'Test 4: x');
