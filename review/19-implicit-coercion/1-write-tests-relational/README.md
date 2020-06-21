# Debuggercises 

> 6/21/2020, 9:05:10 AM 

## [exercises](../../README.md)/[19-implicit-coercion](../README.md)/1-write-tests-relational 

- [/greater-than-or-equal-to.js](#greater-than-or-equal-tojs) - _incomplete_ 
- [/greater-than.js](#greater-thanjs) - _incomplete_ 
- [/less-than-or-equal-to.js](#less-than-or-equal-tojs) - _incomplete_ 
- [/less-than.js](#less-thanjs) - _incomplete_ 
---

## /greater-than-or-equal-to.js 

> incomplete 
>
> [review source](../../../exercises/19-implicit-coercion/1-write-tests-relational/greater-than-or-equal-to.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/19-implicit-coercion/1-write-tests-relational/greater-than-or-equal-to.js:11:19)
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

// a >= b
// if both args are strings, compare the unicode characters
// otherwise convert both values to Number and compare as numbers

const greaterThanOrEqualTo = (left, right) => left >= right;

const _1_a = '1';
const _1_b = 1;
const _1_expect = _;
const _1_native = greaterThanOrEqualTo(_1_a, _1_b);
console.assert(_1_expect === _1_native, 'Test 1');

const _2_a = _;
const _2_b = null;
const _2_expect = true;
const _2_native = greaterThanOrEqualTo(_2_a, _2_b);
console.assert(_2_expect === _2_native, 'Test 2');

const _3_a = _;
const _3_b = null;
const _3_expect = false;
const _3_native = greaterThanOrEqualTo(_3_a, _3_b);
console.assert(_3_expect === _3_native, 'Test 3');

const _4_a = '0.0';
const _4_b = false;
const _4_expect = _;
const _4_native = greaterThanOrEqualTo(_4_a, _4_b);
console.assert(_4_expect === _4_native, 'Test 4');

const _5_a = false;
const _5_b = true;
const _5_expect = _;
const _5_native = greaterThanOrEqualTo(_5_a, _5_b);
console.assert(_5_expect === _5_native, 'Test 5');

const _6_a = '13';
const _6_b = true;
const _6_expect = _;
const _6_native = greaterThanOrEqualTo(_6_a, _6_b);
console.assert(_6_expect === _6_native, 'Test 6');

const _7_a = 'aa';
const _7_b = 'ab';
const _7_expect = _;
const _7_native = greaterThanOrEqualTo(_7_a, _7_b);
console.assert(_7_expect === _7_native, 'Test 7');

const _8_a = 'aa';
const _8_b = 'aa';
const _8_expect = _;
const _8_native = greaterThanOrEqualTo(_8_a, _8_b);
console.assert(_8_expect === _8_native, 'Test 8');

const _9_a = 0;
const _9_b = '';
const _9_expect = _;
const _9_native = greaterThanOrEqualTo(_9_a, _9_b);
console.assert(_9_expect === _9_native, 'Test 9');

```

[TOP](#debuggercises)

---

## /greater-than.js 

> incomplete 
>
> [review source](../../../exercises/19-implicit-coercion/1-write-tests-relational/greater-than.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/19-implicit-coercion/1-write-tests-relational/greater-than.js:11:19)
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

// a > b
// if both args are strings, compare the unicode characters
// otherwise convert both values to Number and compare as numbers

const greaterThan = (left, right) => left > right;

const _1_a = '1';
const _1_b = 1;
const _1_expect = _;
const _1_native = greaterThan(_1_a, _1_b);
console.assert(_1_expect === _1_native, 'Test 1');

const _2_a = _;
const _2_b = null;
const _2_expect = true;
const _2_native = greaterThan(_2_a, _2_b);
console.assert(_2_expect === _2_native, 'Test 2');

const _3_a = _;
const _3_b = null;
const _3_expect = false;
const _3_native = greaterThan(_3_a, _3_b);
console.assert(_3_expect === _3_native, 'Test 3');

const _4_a = true;
const _4_b = false;
const _4_expect = _;
const _4_native = greaterThan(_4_a, _4_b);
console.assert(_4_expect === _4_native, 'Test 4');

const _5_a = false;
const _5_b = true;
const _5_expect = _;
const _5_native = greaterThan(_5_a, _5_b);
console.assert(_5_expect === _5_native, 'Test 5');

const _6_a = '13';
const _6_b = true;
const _6_expect = _;
const _6_native = greaterThan(_6_a, _6_b);
console.assert(_6_expect === _6_native, 'Test 6');

const _7_a = 'aa';
const _7_b = 'ab';
const _7_expect = _;
const _7_native = greaterThan(_7_a, _7_b);
console.assert(_7_expect === _7_native, 'Test 7');

const _8_a = 'aa';
const _8_b = 'ab';
const _8_expect = _;
const _8_native = greaterThan(_8_a, _8_b);
console.assert(_8_expect === _8_native, 'Test 8');

const _9_a = 0;
const _9_b = 'ab';
const _9_expect = _;
const _9_native = greaterThan(_9_a, _9_b);
console.assert(_9_expect === _9_native, 'Test 9');

```

[TOP](#debuggercises)

---

## /less-than-or-equal-to.js 

> incomplete 
>
> [review source](../../../exercises/19-implicit-coercion/1-write-tests-relational/less-than-or-equal-to.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/19-implicit-coercion/1-write-tests-relational/less-than-or-equal-to.js:11:19)
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

// a <= b
// if both args are strings, compare the unicode characters
// otherwise convert both values to Number and compare as numbers

const lessThanOrEqualTo = (left, right) => left <= right;

const _1_a = '1';
const _1_b = 1;
const _1_expect = _;
const _1_native = lessThanOrEqualTo(_1_a, _1_b);
console.assert(_1_expect === _1_native, 'Test 1');

const _2_a = _;
const _2_b = null;
const _2_expect = true;
const _2_native = lessThanOrEqualTo(_2_a, _2_b);
console.assert(_2_expect === _2_native, 'Test 2');

const _3_a = _;
const _3_b = null;
const _3_expect = false;
const _3_native = lessThanOrEqualTo(_3_a, _3_b);
console.assert(_3_expect === _3_native, 'Test 3');

const _4_a = '0.0';
const _4_b = false;
const _4_expect = _;
const _4_native = lessThanOrEqualTo(_4_a, _4_b);
console.assert(_4_expect === _4_native, 'Test 4');

const _5_a = false;
const _5_b = true;
const _5_expect = _;
const _5_native = lessThanOrEqualTo(_5_a, _5_b);
console.assert(_5_expect === _5_native, 'Test 5');

const _6_a = '13';
const _6_b = true;
const _6_expect = _;
const _6_native = lessThanOrEqualTo(_6_a, _6_b);
console.assert(_6_expect === _6_native, 'Test 6');

const _7_a = 'aa';
const _7_b = 'ab';
const _7_expect = _;
const _7_native = lessThanOrEqualTo(_7_a, _7_b);
console.assert(_7_expect === _7_native, 'Test 7');

const _8_a = 'aa';
const _8_b = 'aa';
const _8_expect = _;
const _8_native = lessThanOrEqualTo(_8_a, _8_b);
console.assert(_8_expect === _8_native, 'Test 8');

const _9_a = 0;
const _9_b = '';
const _9_expect = _;
const _9_native = lessThanOrEqualTo(_9_a, _9_b);
console.assert(_9_expect === _9_native, 'Test 9');

```

[TOP](#debuggercises)

---

## /less-than.js 

> incomplete 
>
> [review source](../../../exercises/19-implicit-coercion/1-write-tests-relational/less-than.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/19-implicit-coercion/1-write-tests-relational/less-than.js:11:19)
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

// a < b
// if both args are strings, compare the unicode characters
// otherwise convert both values to Number and compare as numbers

const lessThan = (left, right) => left < right;

const _1_a = '1';
const _1_b = 1;
const _1_expect = _;
const _1_native = lessThan(_1_a, _1_b);
console.assert(_1_expect === _1_native, 'Test 1');

const _2_a = _;
const _2_b = null;
const _2_expect = true;
const _2_native = lessThan(_2_a, _2_b);
console.assert(_2_expect === _2_native, 'Test 2');

const _3_a = _;
const _3_b = null;
const _3_expect = false;
const _3_native = lessThan(_3_a, _3_b);
console.assert(_3_expect === _3_native, 'Test 3');

const _4_a = '0.0';
const _4_b = false;
const _4_expect = _;
const _4_native = lessThan(_4_a, _4_b);
console.assert(_4_expect === _4_native, 'Test 4');

const _5_a = false;
const _5_b = true;
const _5_expect = _;
const _5_native = lessThan(_5_a, _5_b);
console.assert(_5_expect === _5_native, 'Test 5');

const _6_a = '13';
const _6_b = true;
const _6_expect = _;
const _6_native = lessThan(_6_a, _6_b);
console.assert(_6_expect === _6_native, 'Test 6');

const _7_a = 'aa';
const _7_b = 'ab';
const _7_expect = _;
const _7_native = lessThan(_7_a, _7_b);
console.assert(_7_expect === _7_native, 'Test 7');

const _8_a = 'aa';
const _8_b = 'aa';
const _8_expect = _;
const _8_native = lessThan(_8_a, _8_b);
console.assert(_8_expect === _8_native, 'Test 8');

const _9_a = 0;
const _9_b = '';
const _9_expect = _;
const _9_native = lessThan(_9_a, _9_b);
console.assert(_9_expect === _9_native, 'Test 9');

```

[TOP](#debuggercises)

