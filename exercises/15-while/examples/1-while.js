// 1: use strict
'use strict';

// 2: declare and assign a
let a = 0;
// 3: declare and assign b
const b = 8;

// 4, 6, 8, 10, 12: check the condition
while (a !== b) {
  // 5, 7, 9, 11: increment a
  a += b / 4;
}

// 13: assert a
console.assert(a === 8, 'Test 1');

/* anatomy of a while loop: https://javascript.info/while-for#the-while-loop
  while (condition) {
    // ... loop body ...
  }
*/
