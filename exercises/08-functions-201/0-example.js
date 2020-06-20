'use strict';

/* BEHAVIOR vs. IMPLEMENTATION:

  BEHAVIOR: this is what your function DOES
    - behavior does not care about what's inside your function body
    - all that matters to behavior is what goes in and what goes
    - the comments you learned to write in part 1 describe behavior only
    - testing is all about describing and verifying the behavior of your function

  IMPLEMENTATION: this is HOW your function does what it does
    - implementation is all about the lines of code in your function body
    - what language features did you use?
    - how does the data change step by step inside your function?
    - your comments comments should not mention the implementation
    - debugging is all about understanding and fixing the implementation of your code

  Two functions can have the same behavior (tests), and different implementation (source code)

  Check it out:
*/


const reverseStringArray = (str) => {
  return str.split('').reverse().join('');
};

const reverseStringLoop = (str) => {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
};


const _1_arg = 'abcde';
const _1_expect = 'edcba';
const _1_actualArray = reverseStringArray(_1_arg);
const _1_actualLoop = reverseStringLoop(_1_arg);
console.assert(_1_actualArray === _1_expect, 'Test 1 Array');
console.assert(_1_actualLoop === _1_expect, 'Test 1 Loop');

const _2_arg = 'racecar';
const _2_expect = 'racecar';
const _2_actualArray = reverseStringArray(_2_arg);
const _2_actualLoop = reverseStringLoop(_2_arg);
console.assert(_2_actualArray === _2_expect, 'Test 2 Array');
console.assert(_2_actualLoop === _2_expect, 'Test 2 Loop');

const _3_arg = '-<=>-';
const _3_expect = '->=<-';
const _3_actualArray = reverseStringArray(_3_arg);
const _3_actualLoop = reverseStringLoop(_3_arg);
console.assert(_3_actualArray === _3_expect, 'Test 3 Array');
console.assert(_3_actualLoop === _3_expect, 'Test 3 Loop');


