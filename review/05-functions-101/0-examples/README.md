# Debuggercises 

## /exercises/05-functions-101/0-examples 

> 6/16/2020, 8:02:11 AM 

[../README.md](../README.md)

- [/1-declaration-vs-execution.js](#1-declaration-vs-executionjs)  
- [/2-parameters-and-arguments.js](#2-parameters-and-argumentsjs)  
- [/3-return-values.js](#3-return-valuesjs) - _pass_ 
- [/4-tracing-execution.js](#4-tracing-executionjs) - _pass_ 
- [/5-scope.js](#5-scopejs)  
- [/6-test-cases.js](#6-test-casesjs) - _pass_ 

---

## /1-declaration-vs-execution.js 

>  
>
> [review source](../../../exercises/05-functions-101/0-examples/1-declaration-vs-execution.js)

```txt
LOG: I exist!
LOG: I exist!
LOG: I exist!
```

```js
'use strict';

// Be sure to study this in JS Tutor or debugger

// DECLARING a function creates it in memory
//  without executing the code inside the curly braces
function iExist() {
  console.log('I exist!');
}

// EXECUTING a function will run the code in it's body
// you can do this as many times as you like
iExist();
iExist();
iExist();

// there are 3 logs, and one console.log in the source code
//  console.log is not run when the function is DECLARED
//  but it is run each time the function is EXECUTED

```

[TOP](#debuggercises)

---

## /2-parameters-and-arguments.js 

>  
>
> [review source](../../../exercises/05-functions-101/0-examples/2-parameters-and-arguments.js)

```txt
LOG: string  4
LOG: number  4
LOG: string  4.0
LOG: boolean  true
LOG: object  null
LOG: undefined  undefined
LOG: undefined  undefined
```

```js
'use strict';

// PS. study this in JS Tutor!

// functions allow you to reuse the same code with different values
//  PARAMETERS declare variables available inside your function
//  they are assigned a value when you EXECUTE the function
function logTheParameter(parameter) {
  console.log(typeof parameter, parameter);
}

// ARGUMENTS assign values to parameters when functions are EXECUTED
// you can pass arguments directly as values
logTheParameter('4');
logTheParameter(4.0);
logTheParameter('4.0');

// or indirectly using variables
const arg1 = true;
logTheParameter(arg1);

const arg2 = null;
logTheParameter(arg2);

const arg3 = undefined;
logTheParameter(arg3);

// if no argument is passed, parameters will be undefined
logTheParameter();

```

[TOP](#debuggercises)

---

## /3-return-values.js 

> pass 
>
> [review source](../../../exercises/05-functions-101/0-examples/3-return-values.js)

```txt
+ PASS: Assertion 1
+ PASS: Assertion 2
+ PASS: Assertion 3
+ PASS: Assertion 4
+ PASS: Assertion 5
```

```js
'use strict';

// PS. study this in JS Tutor!

// RETURN VALUES allow you to send values from functions to global scope
function findTheType(param) {
  return typeof param;
  console.log('nothing after a return statement is executed!');
}

// to save return values for later, assign them to a variable
const returned1 = findTheType(4.0);
const isTrue1 = returned1 === 'number';
console.assert(isTrue1, 'Assertion 1');

const returned2 = findTheType('4.0');
const isTrue2 = returned2 === 'string';
console.assert(isTrue2, 'Assertion 2');

const arg3 = null;
const returned3 = findTheType(arg3);
const isTrue3 = returned3 === 'object';
console.assert(isTrue3, 'Assertion 3');

const arg4 = undefined;
const returned4 = findTheType(arg4);
const isTrue4 = returned4 === 'undefined';
console.assert(isTrue4, 'Assertion 4');

const returned5 = findTheType();
const isTrue5 = returned5 === 'undefined';
console.assert(isTrue5, 'Assertion 5');

```

[TOP](#debuggercises)

---

## /4-tracing-execution.js 

> pass 
>
> [review source](../../../exercises/05-functions-101/0-examples/4-tracing-execution.js)

```txt
+ PASS: Assertion 1
+ PASS: Assertion 2
```

```js
// PS. Study this in JS Tutor and the debugger

// 0: Creation Phase, function is declared
function flipper(param1, param2) {
  // 2 and 9: a return value is generated
  return param2 + param1;
  // 3 and 10: global result variable is declared & assigned
}

// 1: flipper is executed, creating a new frame
//    parameters are assigned values using 'a' & 'b'
const result1 = flipper('a', 'b');
// 4: the value of result1 is compared to the expected value
const isTrue1 = result1 === 'ba';
// 5: the first assertion is evaluated
console.assert(isTrue1, 'Assertion 1');

// 6: variable is declared & assigned
const arg1 = 'x';
// 7: variable is declared & assigned
const arg2 = 'y';

// 8: flipper is executed, creating a new frame
//    parameters are assigned values from arg1 & arg2
const result2 = flipper(arg1, arg2);

// 11: the value of result2 is compared to the expected value
const isTrue2 = result2 === 'yx';
// 12: the second assertion is evaluated
console.assert(isTrue2, 'Assertion 2');



```

[TOP](#debuggercises)

---

## /5-scope.js 

>  
>
> [review source](../../../exercises/05-functions-101/0-examples/5-scope.js)

```txt
LOG: -- example 1 --
LOG: string  number
LOG: -- example 2 --
LOG: string  string
LOG: -- example 3 --
LOG: string  object
```

```js
'use strict';

// PS. study this in JS Tutor!

// variables declared in a function body are SCOPED to that function
//  this includes parameters and locally declared variables
function findTheType(param) {
  const result = typeof param;
  return result;
}

// what happens if you uncomment the console.logs below?

console.log('-- example 1 --');
const arg1 = 5;
const returned1 = findTheType(arg1);
console.log(typeof returned1, returned1);
// console.log(typeof param, param);
// console.log(typeof result, result);

console.log('-- example 2 --');
const arg2 = 'hi!';
const returned2 = findTheType(arg2);
console.log(typeof returned2, returned2);
// console.log(typeof param, param);
// console.log(typeof result, result);

console.log('-- example 3 --');
const arg3 = null;
const returned3 = findTheType(arg3);
console.log(typeof returned3, returned3);
// console.log(typeof param, param);
// console.log(typeof result, result);

```

[TOP](#debuggercises)

---

## /6-test-cases.js 

> pass 
>
> [review source](../../../exercises/05-functions-101/0-examples/6-test-cases.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
+ PASS: Test 5
```

```js
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


function findTheType(param) {
  const result = typeof param;
  return result;
}

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

```

[TOP](#debuggercises)

