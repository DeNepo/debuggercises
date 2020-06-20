'use strict';

let m = _;
console.assert(m === 'tall', 'Test 1: m');
{
  let l = _;
  const m = _;
  l = _;
  console.assert(m === 'short', 'Test 2: m');
  console.assert(l === 'mini', 'Test 3: l');
}
m = _;
console.assert(m === 'medium', 'Test 4: m');
