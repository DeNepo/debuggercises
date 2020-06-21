# Debuggercises 

> 6/21/2020, 9:05:10 AM 

## [exercises](../../README.md)/[19-implicit-coercion](../README.md)/1-write-tests-arithmetic 

- [/division.js](#divisionjs) - _incomplete_ 
- [/multiplication.js](#multiplicationjs) - _incomplete_ 
- [/remainder.js](#remainderjs) - _incomplete_ 
- [/subtraction.js](#subtractionjs) - _incomplete_ 
- [/unary-minus.js](#unary-minusjs) - _incomplete_ 
- [/unary-plus.js](#unary-plusjs) - _incomplete_ 
---

## /division.js 

> incomplete 
>
> [review source](../../../exercises/19-implicit-coercion/1-write-tests-arithmetic/division.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/19-implicit-coercion/1-write-tests-arithmetic/division.js:13:19)
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

// a / b
// cast both values to Number and do division
//  what happens when you divide by 0?
//  what happens when you divide by NaN?
//  what happens when you divide by Infinity?

const divide = (left, right) => left / right;

const _1_a = '1';
const _1_b = 1;
const _1_expect = _;
const _1_native = divide(_1_a, _1_b);
console.assert(Object.is(_1_expect, _1_native), 'Test 1');

const _2_a = _;
const _2_b = null;
const _2_expect = Infinity;
const _2_native = divide(_2_a, _2_b);
console.assert(Object.is(_2_expect, _2_native), 'Test 2');

const _3_a = false;
const _3_b = null;
const _3_expect = _;
const _3_native = divide(_3_a, _3_b);
console.assert(Object.is(_3_expect, _3_native), 'Test 3');

const _4_a = '12';
const _4_b = false;
const _4_expect = _;
const _4_native = divide(_4_a, _4_b);
console.assert(Object.is(_4_expect, _4_native), 'Test 4');

const _5_a = false;
const _5_b = true;
const _5_expect = _;
const _5_native = divide(_5_a, _5_b);
console.assert(Object.is(_5_expect, _5_native), 'Test 5');

const _6_a = '13';
const _6_b = Infinity;
const _6_expect = _;
const _6_native = divide(_6_a, _6_b);
console.assert(Object.is(_6_expect, _6_native), 'Test 6');

const _7_a = '18';
const _7_b = 'aa';
const _7_expect = _;
const _7_native = divide(_7_a, _7_b);
console.assert(Object.is(_7_expect, _7_native), 'Test 7');

const _8_a = 'hello';
const _8_b = 'goodbye';
const _8_expect = _;
const _8_native = divide(_8_a, _8_b);
console.assert(Object.is(_8_expect, _8_native), 'Test 8');

const _9_a = undefined;
const _9_b = '';
const _9_expect = _;
const _9_native = divide(_9_a, _9_b);
console.assert(Object.is(_9_expect, _9_native), 'Test 9');

```

[TOP](#debuggercises)

---

## /multiplication.js 

> incomplete 
>
> [review source](../../../exercises/19-implicit-coercion/1-write-tests-arithmetic/multiplication.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/19-implicit-coercion/1-write-tests-arithmetic/multiplication.js:10:19)
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

// a * b
// cast both values to Number and do multiplication

const multiply = (left, right) => left * right;

const _1_a = '1';
const _1_b = 1;
const _1_expect = _;
const _1_native = multiply(_1_a, _1_b);
console.assert(Object.is(_1_expect, _1_native), 'Test 1');

const _2_a = _;
const _2_b = null;
const _2_expect = 0;
const _2_native = multiply(_2_a, _2_b);
console.assert(Object.is(_2_expect, _2_native), 'Test 2');

const _3_a = false;
const _3_b = null;
const _3_expect = _;
const _3_native = multiply(_3_a, _3_b);
console.assert(Object.is(_3_expect, _3_native), 'Test 3');

const _4_a = '0.0';
const _4_b = false;
const _4_expect = _;
const _4_native = multiply(_4_a, _4_b);
console.assert(Object.is(_4_expect, _4_native), 'Test 4');

const _5_a = false;
const _5_b = true;
const _5_expect = _;
const _5_native = multiply(_5_a, _5_b);
console.assert(Object.is(_5_expect, _5_native), 'Test 5');

const _6_a = '13';
const _6_b = true;
const _6_expect = _;
const _6_native = multiply(_6_a, _6_b);
console.assert(Object.is(_6_expect, _6_native), 'Test 6');

const _7_a = 'aa';
const _7_b = '18';
const _7_expect = _;
const _7_native = multiply(_7_a, _7_b);
console.assert(Object.is(_7_expect, _7_native), 'Test 7');

const _8_a = 'aa';
const _8_b = 'aa';
const _8_expect = _;
const _8_native = multiply(_8_a, _8_b);
console.assert(Object.is(_8_expect, _8_native), 'Test 8');

const _9_a = undefined;
const _9_b = 'hellow';
const _9_expect = _;
const _9_native = multiply(_9_a, _9_b);
console.assert(Object.is(_9_expect, _9_native), 'Test 9');

```

[TOP](#debuggercises)

---

## /remainder.js 

> incomplete 
>
> [review source](../../../exercises/19-implicit-coercion/1-write-tests-arithmetic/remainder.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/19-implicit-coercion/1-write-tests-arithmetic/remainder.js:13:19)
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

// a % b
// cast both values to Number and return the remainder when x is divided by y
//  what happens when you use Infinity?
//  what happens when you use 0?
//  what happens when you use NaN?

const remainder = (left, right) => left % right;

const _1_a = '8';
const _1_b = 2;
const _1_expect = _;
const _1_native = remainder(_1_a, _1_b);
console.assert(Object.is(_1_expect, _1_native), 'Test 1');

const _2_a = '2';
const _2_b = 8;
const _2_expect = _;
const _2_native = remainder(_2_a, _2_b);
console.assert(Object.is(_2_expect, _2_native), 'Test 2');

const _3_a = '5';
const _3_b = _;
const _3_expect = 3;
const _3_native = remainder(_3_a, _3_b);
console.assert(Object.is(_3_expect, _3_native), 'Test 3');

const _4_a = '5'; // find a different value than above
const _4_b = _;
const _4_expect = 3;
const _4_native = remainder(_4_a, _4_b);
console.assert(Object.is(_4_expect, _4_native), 'Test 4');

const _5_a = '5'; // find a different value than above
const _5_b = _;
const _5_expect = 3;
const _5_native = remainder(_5_a, _5_b);
console.assert(Object.is(_5_expect, _5_native), 'Test 5');

const _6_a = 8;
const _6_b = null;
const _6_expect = _;
const _6_native = remainder(_6_a, _6_b);
console.assert(Object.is(_6_expect, _6_native), 'Test 6');

const _7_a = 0;
const _7_b = 8;
const _7_expect = _;
const _7_native = remainder(_7_a, _7_b);
console.assert(Object.is(_7_expect, _7_native), 'Test 7');

const _8_a = Infinity;
const _8_b = 8;
const _8_expect = _;
const _8_native = remainder(_8_a, _8_b);
console.assert(Object.is(_8_expect, _8_native), 'Test 8');

const _9_a = undefined;
const _9_b = '4';
const _9_expect = _;
const _9_native = remainder(_9_a, _9_b);
console.assert(Object.is(_9_expect, _9_native), 'Test 9');

```

[TOP](#debuggercises)

---

## /subtraction.js 

> incomplete 
>
> [review source](../../../exercises/19-implicit-coercion/1-write-tests-arithmetic/subtraction.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/19-implicit-coercion/1-write-tests-arithmetic/subtraction.js:10:19)
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

// a - b
// cast both values to Number and do subtraction

const subtract = (left, right) => left - right;

const _1_a = '1';
const _1_b = 1;
const _1_expect = _;
const _1_native = subtract(_1_a, _1_b);
console.assert(Object.is(_1_expect, _1_native), 'Test 1');

const _2_a = _;
const _2_b = null;
const _2_expect = 0;
const _2_native = subtract(_2_a, _2_b);
console.assert(Object.is(_2_expect, _2_native), 'Test 2');

const _3_a = false;
const _3_b = null;
const _3_expect = _;
const _3_native = subtract(_3_a, _3_b);
console.assert(Object.is(_3_expect, _3_native), 'Test 3');

const _4_a = '0.0';
const _4_b = false;
const _4_expect = _;
const _4_native = subtract(_4_a, _4_b);
console.assert(Object.is(_4_expect, _4_native), 'Test 4');

const _5_a = false;
const _5_b = true;
const _5_expect = _;
const _5_native = subtract(_5_a, _5_b);
console.assert(Object.is(_5_expect, _5_native), 'Test 5');

const _6_a = '13';
const _6_b = true;
const _6_expect = _;
const _6_native = subtract(_6_a, _6_b);
console.assert(Object.is(_6_expect, _6_native), 'Test 6');

const _7_a = 'aa';
const _7_b = '18';
const _7_expect = _;
const _7_native = subtract(_7_a, _7_b);
console.assert(Object.is(_7_expect, _7_native), 'Test 7');

const _8_a = 'aa';
const _8_b = 'aa';
const _8_expect = _;
const _8_native = subtract(_8_a, _8_b);
console.assert(Object.is(_8_expect, _8_native), 'Test 8');

const _9_a = undefined;
const _9_b = 'hellow';
const _9_expect = _;
const _9_native = subtract(_9_a, _9_b);
console.assert(Object.is(_9_expect, _9_native), 'Test 9');

```

[TOP](#debuggercises)

---

## /unary-minus.js 

> incomplete 
>
> [review source](../../../exercises/19-implicit-coercion/1-write-tests-arithmetic/unary-minus.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/19-implicit-coercion/1-write-tests-arithmetic/unary-minus.js:9:19)
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

// -a
// cast the value to Number and reverses the sign

const unaryMinus = (right) => -right;

const _1_arg = null;
const _1_expect = _;
const _1_native = unaryMinus(_1_arg);
console.assert(Object.is(_1_expect, _1_native), 'Test 1');

const _2_arg = undefined;
const _2_expect = _;
const _2_native = unaryMinus(_2_arg);
console.assert(Object.is(_2_expect, _2_native), 'Test 2');

const _3_arg = true;
const _3_expect = 3;
const _3_native = unaryMinus(_3_arg);
console.assert(Object.is(_3_expect, _3_native), 'Test 3');

const _4_arg = false;
const _4_expect = 3;
const _4_native = unaryMinus(_4_arg);
console.assert(Object.is(_4_expect, _4_native), 'Test 4');

const _5_arg = '18';
const _5_expect = 3;
const _5_native = unaryMinus(_5_arg);
console.assert(Object.is(_5_expect, _5_native), 'Test 5');

const _6_arg = 'Infinity';
const _6_expect = _;
const _6_native = unaryMinus(_6_arg);
console.assert(Object.is(_6_expect, _6_native), 'Test 6');

const _7_arg = 'asdf';
const _7_expect = _;
const _7_native = unaryMinus(_7_arg);
console.assert(Object.is(_7_expect, _7_native), 'Test 7');

const _8_arg = '-0.0';
const _8_expect = _;
const _8_native = unaryMinus(_8_arg);
console.assert(Object.is(_8_expect, _8_native), 'Test 8');

const _9_arg = 'four';
const _9_expect = _;
const _9_native = unaryMinus(_9_arg);
console.assert(Object.is(_9_expect, _9_native), 'Test 9');

```

[TOP](#debuggercises)

---

## /unary-plus.js 

> incomplete 
>
> [review source](../../../exercises/19-implicit-coercion/1-write-tests-arithmetic/unary-plus.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/19-implicit-coercion/1-write-tests-arithmetic/unary-plus.js:9:19)
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

// +a
// cast the value to Number

const unaryPlus = (right) => +right;

const _1_arg = null;
const _1_expect = _;
const _1_native = unaryPlus(_1_arg);
console.assert(Object.is(_1_expect, _1_native), 'Test 1');

const _2_arg = undefined;
const _2_expect = _;
const _2_native = unaryPlus(_2_arg);
console.assert(Object.is(_2_expect, _2_native), 'Test 2');

const _3_arg = true;
const _3_expect = 3;
const _3_native = unaryPlus(_3_arg);
console.assert(Object.is(_3_expect, _3_native), 'Test 3');

const _4_arg = false;
const _4_expect = 3;
const _4_native = unaryPlus(_4_arg);
console.assert(Object.is(_4_expect, _4_native), 'Test 4');

const _5_arg = '18';
const _5_expect = 3;
const _5_native = unaryPlus(_5_arg);
console.assert(Object.is(_5_expect, _5_native), 'Test 5');

const _6_arg = 'Infinity';
const _6_expect = _;
const _6_native = unaryPlus(_6_arg);
console.assert(Object.is(_6_expect, _6_native), 'Test 6');

const _7_arg = 'asdf';
const _7_expect = _;
const _7_native = unaryPlus(_7_arg);
console.assert(Object.is(_7_expect, _7_native), 'Test 7');

const _8_arg = '+0.0';
const _8_expect = _;
const _8_native = unaryPlus(_8_arg);
console.assert(Object.is(_8_expect, _8_native), 'Test 8');

const _9_arg = 'four';
const _9_expect = _;
const _9_native = unaryPlus(_9_arg);
console.assert(Object.is(_9_expect, _9_native), 'Test 9');

```

[TOP](#debuggercises)

