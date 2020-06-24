# Debuggercises 

> 6/24/2020, 5:04:07 PM 

## [exercises](../../README.md)/[07-logical-operators](../README.md)/exercises 

- [/and.js](#andjs) - _incomplete_ 
- [/not.js](#notjs) - _incomplete_ 
- [/or.js](#orjs) - _incomplete_ 
---

## /and.js 

> incomplete 
>
> [review source](../../../exercises/07-logical-operators/exercises/and.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at and (  ...  /exercises/07-logical-operators/exercises/and.js:6:3)
    at Object.<anonymous> (  ...  /exercises/07-logical-operators/exercises/and.js:10:19)
    at Module._compile (internal/modules/cjs/loader.js:1200:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1220:10)
    at Module.load (internal/modules/cjs/loader.js:1049:32)
    at Function.Module._load (internal/modules/cjs/loader.js:937:14)
    at Module.require (internal/modules/cjs/loader.js:1089:19)
    at require (internal/modules/cjs/helpers.js:73:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:28:7)
    at Object.<anonymous> (  ...  /scripts/review.js:119:1) 
```

```js
'use strict';

// write a function that behaves the same as &&
//  ... without using &&, only using ? :
const and = (left, right) => {
  return _ ? _ : _;
};

const _1_expect = 0;
const _1_actual = and(0, 0);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 0;
const _2_actual = and(1, 0);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 0;
const _3_actual = and(0, 1);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 1;
const _4_actual = and(1, 1);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = '';
const _5_actual = and('', 'asdf');
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = '';
const _6_actual = and('asdf', '');
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = false;
const _7_actual = and(true, false);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = NaN;
const _8_actual = and(NaN, undefined);
console.assert(Object.is(_8_actual, _8_expect), 'Test 8');

const _9_expect = 'asdf';
const _9_actual = and(Infinity, 'asdf');
console.assert(_9_actual === _9_expect, 'Test 9');

```

[TOP](#debuggercises)

---

## /not.js 

> incomplete 
>
> [review source](../../../exercises/07-logical-operators/exercises/not.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at not (  ...  /exercises/07-logical-operators/exercises/not.js:6:3)
    at Object.<anonymous> (  ...  /exercises/07-logical-operators/exercises/not.js:10:19)
    at Module._compile (internal/modules/cjs/loader.js:1200:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1220:10)
    at Module.load (internal/modules/cjs/loader.js:1049:32)
    at Function.Module._load (internal/modules/cjs/loader.js:937:14)
    at Module.require (internal/modules/cjs/loader.js:1089:19)
    at require (internal/modules/cjs/helpers.js:73:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:28:7)
    at Object.<anonymous> (  ...  /scripts/review.js:119:1) 
```

```js
'use strict';

// write a function that behaves the same as !
//  ... but doesn't use !, only using ? :
const not = (value) => {
  return _ ? _ : _;
};

const _1_expect = true;
const _1_actual = not(0);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = true;
const _2_actual = not(false);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = true;
const _3_actual = not(undefined);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = true;
const _4_actual = not(null);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = true;
const _5_actual = not('');
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = true;
const _6_actual = not(NaN);
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = false;
const _7_actual = not('fdsa');
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = false;
const _8_actual = not('true');
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = false;
const _9_actual = not(1);
console.assert(_9_actual === _9_expect, 'Test 9');

```

[TOP](#debuggercises)

---

## /or.js 

> incomplete 
>
> [review source](../../../exercises/07-logical-operators/exercises/or.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at or (  ...  /exercises/07-logical-operators/exercises/or.js:6:3)
    at Object.<anonymous> (  ...  /exercises/07-logical-operators/exercises/or.js:10:19)
    at Module._compile (internal/modules/cjs/loader.js:1200:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1220:10)
    at Module.load (internal/modules/cjs/loader.js:1049:32)
    at Function.Module._load (internal/modules/cjs/loader.js:937:14)
    at Module.require (internal/modules/cjs/loader.js:1089:19)
    at require (internal/modules/cjs/helpers.js:73:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:28:7)
    at Object.<anonymous> (  ...  /scripts/review.js:119:1) 
```

```js
'use strict';

// write a function that behaves the same as ||
//  ... without using ||, only using ? :
const or = (left, right) => {
  return _ ? _ : _;
};

const _1_expect = 0;
const _1_actual = or(0, 0);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 1;
const _2_actual = or(1, 0);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 1;
const _3_actual = or(0, 1);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 1;
const _4_actual = or(1, 1);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = 'asdf';
const _5_actual = or('', 'asdf');
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = 'asdf';
const _6_actual = or('asdf', '');
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = true;
const _7_actual = or(true, false);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = undefined;
const _8_actual = or(NaN, undefined);
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = Infinity;
const _9_actual = or(Infinity, 'asdf');
console.assert(_9_actual === _9_expect, 'Test 9');

```

[TOP](#debuggercises)

