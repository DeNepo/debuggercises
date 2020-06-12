'use strict';

_;
console.assert(x === 'hi!', 'Test 1: x');
{
  _;
  _;

  console.assert(x === 'bye!', 'Test 2: x');
  console.assert(y === 'hi!', 'Test 3: y');
}
console.assert(x === 'bye!', 'Test 4: x');
