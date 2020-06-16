# Debuggercises 

## /exercises/06-explicit-coercion/exercises 

> 6/16/2020, 11:22:08 AM 

[../README.md](../README.md)

- [/1-write-expected.js](#1-write-expectedjs) - _incomplete_ 
- [/2-write-arguments.js](#2-write-argumentsjs) - _incomplete_ 
- [/3-write-function.js](#3-write-functionjs) - _fail_ 

---

## /1-write-expected.js 

> incomplete 
>
> [review source](../../../exercises/06-explicit-coercion/exercises/1-write-expected.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/06-explicit-coercion/exercises/1-write-expected.js:13:19)
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
'use strict';

function mystery(x) {
  if (typeof x === 'boolean') { throw new TypeError('x cannot be a boolean'); }

  const booleaned = Boolean(x);
  const numbered = Number(booleaned);
  return numbered;
}

// write the expected return value

const _1_expect = _;
const _1_actual = mystery(undefined);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = _;
const _2_actual = mystery(null);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = _;
const _3_actual = mystery('false');
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = _;
const _4_actual = mystery('');
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = _;
const _5_actual = mystery(0);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = _;
const _6_actual = mystery('  ');
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = _;
const _7_actual = mystery(-1);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = _;
const _8_actual = mystery(true);
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = _;
const _9_actual = mystery(1);
console.assert(_9_actual === _9_expect, 'Test 9');


```

[TOP](#debuggercises)

---

## /2-write-arguments.js 

> incomplete 
>
> [review source](../../../exercises/06-explicit-coercion/exercises/2-write-arguments.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/06-explicit-coercion/exercises/2-write-arguments.js:14:27)
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
'use strict';

function mystery(x) {
  if (typeof x === 'string') { throw new TypeError('x cannot be a string'); }

  const stringed = String(x);
  const numbered = Number(stringed);
  return numbered;
}

// find an argument to get the expected return value

const _1_expect = -1;
const _1_actual = mystery(_);
console.assert(Object.is(_1_actual, _1_expect), 'Test 1');

const _2_expect = 0;
const _2_actual = mystery(_);
console.assert(Object.is(_2_actual, _2_expect), 'Test 2');

const _3_expect = 1;
const _3_actual = mystery(_);
console.assert(Object.is(_3_actual, _3_expect), 'Test 3');

const _4_expect = 0.5;
const _4_actual = mystery(_);
console.assert(Object.is(_4_actual, _4_expect), 'Test 4');

const _5_expect = 1000;
const _5_actual = mystery(_);
console.assert(Object.is(_5_actual, _5_expect), 'Test 5');

const _6_expect = NaN;
const _6_actual = mystery(_);
console.assert(Object.is(_6_actual, _6_expect), 'Test 6');

const _7_expect = NaN;
const _7_actual = mystery(_);
console.assert(Object.is(_7_actual, _7_expect), 'Test 7');

const _8_expect = NaN;
const _8_actual = mystery(_);
console.assert(Object.is(_8_actual, _8_expect), 'Test 8');

const _9_expect = NaN;
const _9_actual = mystery(_);
console.assert(Object.is(_9_actual, _9_expect), 'Test 9');


```

[TOP](#debuggercises)

---

## /3-write-function.js 

> fail 
>
> [review source](../../../exercises/06-explicit-coercion/exercises/3-write-function.js)

```txt
- FAIL: Test 1
- FAIL: Test 2
- FAIL: Test 3
- FAIL: Test 4
- FAIL: Test 5
- FAIL: Test 6
- FAIL: Test 7
- FAIL: Test 8
- FAIL: Test 9
```

```js
'use strict';

/* write a function to pass the test cases
  it can be solved using only
   Number
   ===
*/
function mystery(x, y) {

}

// all of the test cases are correct

const _1_expect = true;
const _1_actual = mystery('', '');
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = true;
const _2_actual = mystery(false, null);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = false;
const _3_actual = mystery('asdf', 'asdf');
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = true;
const _4_actual = mystery('1.0', '1');
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = false;
const _5_actual = mystery(false, true);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = false;
const _6_actual = mystery('1.5', '1');
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = true;
const _7_actual = mystery('1e3', '1000');
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = true;
const _8_actual = mystery(false, '');
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = false;
const _9_actual = mystery(undefined, undefined);
console.assert(_9_actual === _9_expect, 'Test 9');


```

[TOP](#debuggercises)

