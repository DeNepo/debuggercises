# Debuggercises 

## /exercises/09-conditionals/1-execution-paths 

> 6/16/2020, 11:22:08 AM 

[../README.md](../README.md)

- [/1-write-expected.js](#1-write-expectedjs) - _incomplete_ 
- [/2-write-arguments.js](#2-write-argumentsjs) - _fail_ 
- [/3-write-function.js](#3-write-functionjs) - _incomplete_ 

---

## /1-write-expected.js 

> incomplete 
>
> [review source](../../../exercises/09-conditionals/1-execution-paths/1-write-expected.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/09-conditionals/1-execution-paths/1-write-expected.js:14:19)
    at Module._compile (internal/modules/cjs/loader.js:1200:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1220:10)
    at Module.load (internal/modules/cjs/loader.js:1049:32)
    at Function.Module._load (internal/modules/cjs/loader.js:937:14)
    at Module.require (internal/modules/cjs/loader.js:1089:19)
    at require (internal/modules/cjs/helpers.js:73:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:12:7)
    at Object.<anonymous> (  ...  /scripts/review.js:106:1)
    at Module._compile (internal/modules/cjs/loader.js:1200:30) 
```

```js
function mystery(a, b) {
  let result = '';
  if (a && b) {
    result = 'path 1';
  } else if (!a && !b) {
    result = 'path 2';
  } else {
    result = 'path 3';
  }
  return result;
}


const _1_expect = _;
const _1_actual = mystery(0, null);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = _;
const _2_actual = mystery(false, 'hello');
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = _;
const _3_actual = mystery(true, undefined);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = _;
const _4_actual = mystery(1, -1);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = _;
const _5_actual = mystery('', '');
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = _;
const _6_actual = mystery('_6_expect', '_6_actual');
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = _;
const _7_actual = mystery(0, 12);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = _;
const _8_actual = mystery(null, undefined);
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = _;
const _9_actual = mystery(NaN, Infinity);
console.assert(_9_actual === _9_expect, 'Test 9');

```

[TOP](#debuggercises)

---

## /2-write-arguments.js 

> fail 
>
> [review source](../../../exercises/09-conditionals/1-execution-paths/2-write-arguments.js)

```txt
- FAIL: Test 1
- FAIL: Test 2
- FAIL: Test 3
- FAIL: Test 4
+ PASS: Test 5
+ PASS: Test 6
- FAIL: Test 7
+ PASS: Test 8
```

```js
function mystery(a, b) {
  let result = '';
  if (typeof a === 'number') {
    if (typeof b === 'number') {
      result = 'path 1';
    } else {
      result = 'path 2';
    }
  } else {
    if (typeof a === typeof b) {
      result = 'path 3';
    } else {
      result = 'path 4';
    }
  }
  return result;
}

// path 1
const _1_expect = 'path 1';
const _1_actual = mystery(0, null);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 'path 1';
const _2_actual = mystery(false, 'hello');
console.assert(_2_actual === _2_expect, 'Test 2');

// path 2
const _3_expect = 'path 2';
const _3_actual = mystery(true, undefined);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 'path 2';
const _4_actual = mystery(1, -1);
console.assert(_4_actual === _4_expect, 'Test 4');

// path 3
const _5_expect = 'path 3';
const _5_actual = mystery('', '');
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = 'path 3';
const _6_actual = mystery('_6_expect', '_6_actual');
console.assert(_6_actual === _6_expect, 'Test 6');

// path 4
const _7_expect = 'path 4';
const _7_actual = mystery(0, 12);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = 'path 4';
const _8_actual = mystery(null, undefined);
console.assert(_8_actual === _8_expect, 'Test 8');

```

[TOP](#debuggercises)

---

## /3-write-function.js 

> incomplete 
>
> [review source](../../../exercises/09-conditionals/1-execution-paths/3-write-function.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at mystery (  ...  /exercises/09-conditionals/1-execution-paths/3-write-function.js:3:3)
    at Object.<anonymous> (  ...  /exercises/09-conditionals/1-execution-paths/3-write-function.js:17:20)
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
function mystery(a, b) {
  let result = '';
  if (_) {
    result = 'path 1';
  } else if (_) {
    result = 'path 2';
  } else if (_) {
    result = 'path 3';
  } else {
    result = 'path 4';
  }
  return result;
}

// path 1
const _01_expect = 'path 1';
const _01_actual = mystery(1, 'turtle');
console.assert(_01_actual === _01_expect, 'Test 01');

const _02_expect = 'path 1';
const _02_actual = mystery('turtle', 'turtle');
console.assert(_02_actual === _02_expect, 'Test 02');

const _03_expect = 'path 1';
const _03_actual = mystery(42, true);
console.assert(_03_actual === _03_expect, 'Test 03');

// path 2
const _04_expect = 'path 2';
const _04_actual = mystery(0, '');
console.assert(_04_actual === _04_expect, 'Test 04');

const _05_expect = 'path 2';
const _05_actual = mystery(null, NaN);
console.assert(_05_actual === _05_expect, 'Test 05');

const _06_expect = 'path 2';
const _06_actual = mystery(false, false);
console.assert(_06_actual === _06_expect, 'Test 06');

// path 3
const _07_expect = 'path 3';
const _07_actual = mystery(0, 12);
console.assert(_07_actual === _07_expect, 'Test 07');

const _08_expect = 'path 3';
const _08_actual = mystery(false, true);
console.assert(_08_actual === _08_expect, 'Test 08');

const _09_expect = 'path 3';
const _09_actual = mystery('x', '');
console.assert(_09_actual === _09_expect, 'Test 09');

// path 4
const _10_expect = 'path 4';
const _10_actual = mystery('', true);
console.assert(_10_actual === _10_expect, 'Test 10');

const _11_expect = 'path 4';
const _11_actual = mystery(0, '12');
console.assert(_11_actual === _11_expect, 'Test 11');

const _12_expect = 'path 4';
const _12_actual = mystery(100, null);
console.assert(_12_actual === _12_expect, 'Test 12');

```

[TOP](#debuggercises)

