'use strict';

/* test cases are how developers understand and debug their code

  you will learn more about different testing tools and strategies in the next module
  for now, the goal is to practice using simple test cases to explore and describe functions

  A test case has 4 main parts:
    (they won't always be written the same way, but they'll always be there)
  1. argument(s)
    - the values to pass to the function
  2. an expected value
    - what the function SHOULD return if it is working correctly
  3. an actual value
    - what the function DID return
  4. a description
    - in these exercises it will be Test X, just enough to help you debug your code
    - later on, the description will be a full sentence that describes what is being tested

  By failing test cases you learn to understand what your code actually did
  By writing test cases you learn to predict and describe your function's behavior
  The magic happens when these two come together
*/

// the rest of this file is an example of passing test cases
// this isn't how you will write tests professionally, but it's good for learning


const findTheType = (param) => {
  const result = typeof param;
  return result;
};

const _1_arg = true;
const _1_expect = 'boolean';
const _1_actual = findTheType(_1_arg);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_arg = null;
const _2_expect = 'object';
const _2_actual = findTheType(_2_arg);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_arg = undefined;
const _3_expect = 'undefined';
const _3_actual = findTheType(_3_arg);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_arg = 'hello!';
const _4_expect = 'string';
const _4_actual = findTheType(_4_arg);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_arg = 14;
const _5_expect = 'number';
const _5_actual = findTheType(_5_arg);
console.assert(_5_actual === _5_expect, 'Test 5');
