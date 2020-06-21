# Debuggercises 

> 6/21/2020, 9:05:10 AM 

## [exercises](../../README.md)/[19-implicit-coercion](../README.md)/2-replicate 

- [/loose-inequality.js](#loose-inequalityjs) - _fail_ 
- [/remainder.js](#remainderjs) - _error_ 
- [/unary-minus.js](#unary-minusjs) - _fail_ 
---

## /loose-inequality.js 

> fail 
>
> [review source](../../../exercises/19-implicit-coercion/2-replicate/loose-inequality.js)

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
- FAIL: Test 10
- FAIL: Test 11
- FAIL: Test 12
- FAIL: Test 13
- FAIL: Test 14
- FAIL: Test 15
```

```js
'use strict';

/**
 * compares primitive values according to the same rules as !=
 * see: https://dorey.github.io/JavaScript-Equality-Table/, https://eqeq.js.org/
 * @param {any} a - the left operand
 * @param {any} b - the right operand
 * @returns {boolean}
 */
function looseInequality(a, b) {

};

const _01_a = null;
const _01_b = undefined;
const _01_native = _01_a != _01_b;
const _01_copy = looseInequality(_01_a, _01_b);
console.assert(_01_copy === _01_native, 'Test 1');

const _02_a = null;
const _02_b = null;
const _02_native = _02_a != _02_b;
const _02_copy = looseInequality(_02_a, _02_b);
console.assert(_02_copy === _02_native, 'Test 2');

const _03_a = undefined;
const _03_b = undefined;
const _03_native = _03_a != _03_b;
const _03_copy = looseInequality(_03_a, _03_b);
console.assert(_03_copy === _03_native, 'Test 3');

const _04_a = true;
const _04_b = 1;
const _04_native = _04_a != _04_b;
const _04_copy = looseInequality(_04_a, _04_b);
console.assert(_04_copy === _04_native, 'Test 4');

const _05_a = true;
const _05_b = '1';
const _05_native = _05_a != _05_b;
const _05_copy = looseInequality(_05_a, _05_b);
console.assert(_05_copy === _05_native, 'Test 5');

const _06_a = false;
const _06_b = 0;
const _06_native = _06_a != _06_b;
const _06_copy = looseInequality(_06_a, _06_b);
console.assert(_06_copy === _06_native, 'Test 6');

const _07_a = false;
const _07_b = '0';
const _07_native = _07_a != _07_b;
const _07_copy = looseInequality(_07_a, _07_b);
console.assert(_07_copy === _07_native, 'Test 7');

const _08_a = 1.0;
const _08_b = '1';
const _08_native = _08_a != _08_b;
const _08_copy = looseInequality(_08_a, _08_b);
console.assert(_08_copy === _08_native, 'Test 8');

const _09_a = -18;
const _09_b = '-18.0';
const _09_native = _09_a != _09_b;
const _09_copy = looseInequality(_09_a, _09_b);
console.assert(_09_copy === _09_native, 'Test 9');

const _10_a = 0;
const _10_b = '';
const _10_native = _10_a != _10_b;
const _10_copy = looseInequality(_10_a, _10_b);
console.assert(_10_copy === _10_native, 'Test 10');

const _11_a = false;
const _11_b = '';
const _11_native = _11_a != _11_b;
const _11_copy = looseInequality(_11_a, _11_b);
console.assert(_11_copy === _11_native, 'Test 11');

const _12_a = null;
const _12_b = '';
const _12_native = _12_a != _12_b;
const _12_copy = looseInequality(_12_a, _12_b);
console.assert(_12_copy === _12_native, 'Test 12');

const _13_a = undefined;
const _13_b = false;
const _13_native = _13_a != _13_b;
const _13_copy = looseInequality(_13_a, _13_b);
console.assert(_13_copy === _13_native, 'Test 13');

const _14_a = true;
const _14_b = '-1';
const _14_native = _14_a != _14_b;
const _14_copy = looseInequality(_14_a, _14_b);
console.assert(_14_copy === _14_native, 'Test 14');

const _15_a = NaN;
const _15_b = 'any other value';
const _15_native = _15_a != _15_b;
const _15_copy = looseInequality(_15_a, _15_b);
console.assert(_15_copy === _15_native, 'Test 15');

```

[TOP](#debuggercises)

---

## /remainder.js 

> error 
>
> [review source](../../../exercises/19-implicit-coercion/2-replicate/remainder.js)

```txt
UNCAUGHT: ReferenceError: _1_expect is not defined
    at Object.<anonymous> (  ...  /exercises/19-implicit-coercion/2-replicate/remainder.js:17:26)
    at Module._compile (internal/modules/cjs/loader.js:1200:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1220:10)
    at Module.load (internal/modules/cjs/loader.js:1049:32)
    at Function.Module._load (internal/modules/cjs/loader.js:937:14)
    at Module.require (internal/modules/cjs/loader.js:1089:19)
    at require (internal/modules/cjs/helpers.js:73:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:28:7)
    at Object.<anonymous> (  ...  /scripts/review.js:119:1)
    at Module._compile (internal/modules/cjs/loader.js:1200:30) 
```

```js
'use strict';

/**
 * reproduces the behavior of (a % b) for primitive types
 * @param {any} a - left operand
 * @param {any} b - right operand
 * @returns {number}
 */
function remainder(a, b) {

};

const _1_a = '8';
const _1_b = 2;
const _1_native = _1_a % _1_b;
const _1_copy = remainder(_1_a, _1_b);
console.assert(Object.is(_1_expect, _1_native), 'Test 1');

const _2_a = '2';
const _2_b = 8;
const _2_native = _2_a % _2_b;
const _2_copy = remainder(_2_a, _2_b);
console.assert(Object.is(_2_expect, _2_native), 'Test 2');

const _3_a = '5';
const _3_b = Infinity;
const _3_native = _3_a % _3_b;
const _3_copy = remainder(_3_a, _3_b);
console.assert(Object.is(_3_expect, _3_native), 'Test 3');

const _4_a = '5';
const _4_b = false;
const _4_native = _4_a % _4_b;
const _4_copy = remainder(_4_a, _4_b);
console.assert(Object.is(_4_expect, _4_native), 'Test 4');

const _5_a = true;
const _5_b = 18;
const _5_native = _5_a % _5_b;
const _5_copy = remainder(_5_a, _5_b);
console.assert(Object.is(_5_expect, _5_native), 'Test 5');

const _6_a = 8;
const _6_b = undefined;
const _6_native = _6_a % _6_b;
const _6_copy = remainder(_6_a, _6_b);
console.assert(Object.is(_6_expect, _6_native), 'Test 6');

const _7_a = 0;
const _7_b = 8;
const _7_native = _7_a % _7_b;
const _7_copy = remainder(_7_a, _7_b);
console.assert(Object.is(_7_expect, _7_native), 'Test 7');

const _8_a = Infinity;
const _8_b = 8;
const _8_native = _8_a % _8_b;
const _8_copy = remainder(_8_a, _8_b);
console.assert(Object.is(_8_expect, _8_native), 'Test 8');

const _9_a = undefined;
const _9_b = '4';
const _9_native = _9_a % _9_b;
const _9_copy = remainder(_9_a, _9_b);
console.assert(Object.is(_9_expect, _9_native), 'Test 9');

```

[TOP](#debuggercises)

---

## /unary-minus.js 

> fail 
>
> [review source](../../../exercises/19-implicit-coercion/2-replicate/unary-minus.js)

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

/**
 * reproduces the behavior of -a for primitive types
 * @param {any} a
 * @returns {number}
 */
function unaryMinus(a) {

};

const _1_a = 1;
const _1_native = -_1_a;
const _1_copy = unaryMinus(_1_a);
console.assert(Object.is(_1_copy, _1_native), 'Test 1');

const _2_a = '1';
const _2_native = -_2_a;
const _2_copy = unaryMinus(_2_a);
console.assert(Object.is(_2_copy, _2_native), 'Test 2');

const _3_a = '1';
const _3_native = -_3_a;
const _3_copy = unaryMinus(_3_a);
console.assert(Object.is(_3_copy, _3_native), 'Test 3');

const _4_a = true;
const _4_native = -_4_a;
const _4_copy = unaryMinus(_4_a);
console.assert(Object.is(_4_copy, _4_native), 'Test 4');

const _5_a = true;
const _5_native = -_5_a;
const _5_copy = unaryMinus(_5_a);
console.assert(Object.is(_5_copy, _5_native), 'Test 5');

const _6_a = false;
const _6_native = -_6_a;
const _6_copy = unaryMinus(_6_a);
console.assert(Object.is(_6_copy, _6_native), 'Test 6');

const _7_a = false;
const _7_native = -_7_a;
const _7_copy = unaryMinus(_7_a);
console.assert(Object.is(_7_copy, _7_native), 'Test 7');

const _8_a = null;
const _8_native = -_8_a;
const _8_copy = unaryMinus(_8_a);
console.assert(Object.is(_8_copy, _8_native), 'Test 8');

const _9_a = undefined;
const _9_native = -_9_a;
const _9_copy = unaryMinus(_9_a);
console.assert(Object.is(_9_copy, _9_native), 'Test 9');

```

[TOP](#debuggercises)

