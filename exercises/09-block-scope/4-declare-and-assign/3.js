'use strict';

_;
console.assert(m === 1, 'Test 1: m');
{
  _;
  _;
  console.assert(m === 2, 'Test 2: m');
  console.assert(l === 3, 'Test 3: l');
}
_;
console.assert(m === 4, 'Test 4: m');
