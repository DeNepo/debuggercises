# Debuggercises 

## /exercises/09-conditionals/1-execution-paths 

> 6/12/2020, 7:45:38 PM 

[../REVIEW.md](../REVIEW.md)

- [/1-write-expected.js](#1-write-expectedjs) - _error_ 
- [/2-write-arguments.js](#2-write-argumentsjs)  
- [/3-write-function.js](#3-write-functionjs)  

---

## /1-write-expected.js 

> error 
>
> [review source](./1-write-expected.js)

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
    at Object.<anonymous> (  ...  /scripts/review.js:72:1)
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

>  
>
> [review source](./2-write-arguments.js)

[TOP](#debuggercises)

---

## /3-write-function.js 

>  
>
> [review source](./3-write-function.js)

[TOP](#debuggercises)

