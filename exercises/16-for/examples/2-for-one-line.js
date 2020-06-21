// 1: declare and assign result
let result = 0;


// 2: declare and assign i
// 3, 6, 9, 12, 15: check the condition
// 5, 8, 11, 14: increment i
for (let i = 0; i < 4; i++) {
  // 4, 7, 10, 13: run the body
  result += i;
}

// step: 16
console.assert(result === 6, 'Test 1');


/* anatomy of a for loop: https://javascript.info/while-for#the-for-loop

  for (begin; condition; step) {
    // ... loop body ...
  }

*/

/* variables analysis:

  result: accumulator, number, strategy
    this is the final result of the program
    it accumulates all of i's values using addition
    declared in global scope
    reassigned in the while loop
    read in the assertion
  i: stepper, number, strategy
    it's value is used to create the final result
    it's reassigned incremental values in the for loop declaration
    declared in for loop, not available in global scope
    read in the for loop ...
      to accumulate the result
      to check if the loop has stepped enough times

  this is a simple analysis, what would you want to add?
*/
