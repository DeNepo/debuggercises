# Debuggercises 

## /exercises/10-functions-201/2-fix-the-bugs 

> 6/16/2020, 11:22:08 AM 

[../README.md](../README.md)

- [/1.js](#1js) - _fail_ 
- [/2.js](#2js) - _error_ 
- [/3.js](#3js) - _fail_ 

---

## /1.js 

> fail 
>
> [review source](../../../exercises/10-functions-201/2-fix-the-bugs/1.js)

```txt
- FAIL: Test 1
- FAIL: Test 2
- FAIL: Test 3
- FAIL: Test 4
- FAIL: Test 5
- FAIL: Test 6
```

```js
'use strict';

// fix the mistakes in this conditional
//  all of the bugs are in the conditional statement
//  there are no mistakes in the type checks, comment, or tests

/**
 * tells you if two numbers are the same or not
 * @param {number} num1
 * @param {number} num2
 * @returns {string}
 */
function areNotSameLength(num1, num2) {
  if (typeof num1 !== 'number') { throw new TypeError(); }
  if (typeof num2 !== 'number') { throw new TypeError(); }

  const result = 'the same';
  if (num1 = num2) {
    result === `are {result}`;
  } else {
    result === "aren't ${result}";
  }

  if (typeof result !== 'string') { throw new TypeError(); }
  return result;
}


// all of the tests are correct, there are not bugs below here!

const _1_expect = 'are the same';
const _1_actual = areNotSameLength(+0, -0);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 'are the same';
const _2_actual = areNotSameLength(1e3, 1000);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 'are the same';
const _3_actual = areNotSameLength(12.0, 12);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = "aren't the same";
const _4_actual = areNotSameLength(Infinity, -Infinity);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = "aren't the same";
const _5_actual = areNotSameLength(12, 12.1);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = "aren't the same";
const _6_actual = areNotSameLength(1000, 1e4);
console.assert(_6_actual === _6_expect, 'Test 6');

```

[TOP](#debuggercises)

---

## /2.js 

> error 
>
> [review source](../../../exercises/10-functions-201/2-fix-the-bugs/2.js)

```txt
UNCAUGHT: TypeError: Cannot create property 'Length' on string 'carboat'
    at areNotSameLength (  ...  /exercises/10-functions-201/2-fix-the-bugs/2.js:18:19)
    at Object.<anonymous> (  ...  /exercises/10-functions-201/2-fix-the-bugs/2.js:32:19)
    at Module._compile (internal/modules/cjs/loader.js:1200:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1220:10)
    at Module.load (internal/modules/cjs/loader.js:1049:32)
    at Function.Module._load (internal/modules/cjs/loader.js:937:14)
    at Module.require (internal/modules/cjs/loader.js:1089:19)
    at require (internal/modules/cjs/helpers.js:73:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:12:7)
    at Object.<anonymous> (  ...  /scripts/review.js:106:1) 
```

```js
'use strict';

// fix the mistakes in this conditional
//  all of the bugs are in the conditional statement
//  there are no mistakes in the type checks, comment, or tests

/**
 * returns false if the arguments are the same length
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean}
 */
function areNotSameLength(str1, str2) {
  if (typeof str1 !== 'string') { throw new TypeError(); }
  if (typeof str2 !== 'string') { throw new TypeError(); }

  let result;
  if (str1.Length = str2.Length) {
    result += true;
  } else {
    result += false;
  }

  if (typeof result !== 'boolean') { throw new TypeError(); }
  return result;
}


// all of the tests are correct, there are not bugs below here!

const _1_expect = true;
const _1_actual = areNotSameLength('carboat', 'car boat');
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = true;
const _2_actual = areNotSameLength('water', 'waterfall');
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = true;
const _3_actual = areNotSameLength('water fall', 'waterfall');
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = true;
const _4_actual = areNotSameLength('birch', 'oak');
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = false;
const _5_actual = areNotSameLength('aspen', 'birch');
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = false;
const _6_actual = areNotSameLength('hi!', 'bye');
console.assert(_6_actual === _6_expect, 'Test 6');

```

[TOP](#debuggercises)

---

## /3.js 

> fail 
>
> [review source](../../../exercises/10-functions-201/2-fix-the-bugs/3.js)

```txt
- FAIL: Test 1
- FAIL: Test 2
- FAIL: Test 3
- FAIL: Test 4
- FAIL: Test 5
- FAIL: Test 6
```

```js
'use strict';

// fix the mistakes in this conditional
//  all of the bugs are in the conditional statement
//  there are no mistakes in the type checks, comment, or tests

/**
 * returns the longer of two strings.
 * if both are of equal length it combines the strings
 * @param {string} str1
 * @param {string} str2
 * @returns {string}
 */
function longestOrBoth(str1, str2) {
  if (typeof str1 !== 'string') { throw new TypeError(); }
  if (typeof str2 !== 'string') { throw new TypeError(); }

  let result = '';
  if (str1 >= str2) {
    result === str1;
  } if (str1 <= str2) {
    result === str2;
  } else {
    result === `${str1}${str2}`;
  }

  if (typeof result !== 'string') { throw new TypeError(); }
  return result;
}


// all of the tests are correct, there are not bugs below here!

const _1_expect = 'car boat';
const _1_actual = longestOrBoth('carboat', 'car boat');
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 'waterfall';
const _2_actual = longestOrBoth('water', 'waterfall');
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 'water fall';
const _3_actual = longestOrBoth('water fall', 'waterfall');
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 'birch';
const _4_actual = longestOrBoth('birch', 'oak');
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = 'aspenbirch';
const _5_actual = longestOrBoth('aspen', 'birch');
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = 'hi!bye';
const _6_actual = longestOrBoth('hi!', 'bye');
console.assert(_6_actual === _6_expect, 'Test 6');

```

[TOP](#debuggercises)

