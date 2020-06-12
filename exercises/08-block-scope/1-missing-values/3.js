'use strict';

let m = 3;
console.assert(m === _, 'Test 1: m');
{
  let l = 10;
  const m = 5;
  l = 0;
  console.assert(m === _, 'Test 2: m');
  console.assert(l === _, 'Test 3: l');
}
m = 20;
console.assert(m === _, 'Test 4: m');
