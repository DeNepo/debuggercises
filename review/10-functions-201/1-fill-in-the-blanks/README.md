# Debuggercises 

## /exercises/10-functions-201/1-fill-in-the-blanks 

> 6/16/2020, 8:02:11 AM 

[../README.md](../README.md)

- [/1-write-tests.js](#1-write-testsjs) - _incomplete_ 
- [/2-write-tests.js](#2-write-testsjs) - _incomplete_ 
- [/3-pass-tests.js](#3-pass-testsjs) - _incomplete_ 
- [/4-pass-tests.js](#4-pass-testsjs) - _incomplete_ 
- [/5-twins.js](#5-twinsjs) - _incomplete_ 
- [/6-twins.js](#6-twinsjs) - _incomplete_ 

---

## /1-write-tests.js 

> incomplete 
>
> [review source](../../../exercises/10-functions-201/1-fill-in-the-blanks/1-write-tests.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/10-functions-201/1-fill-in-the-blanks/1-write-tests.js:23:19)
    at Module._compile (internal/modules/cjs/loader.js:1200:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1220:10)
    at Module.load (internal/modules/cjs/loader.js:1049:32)
    at Function.Module._load (internal/modules/cjs/loader.js:937:14)
    at Module.require (internal/modules/cjs/loader.js:1089:19)
    at require (internal/modules/cjs/helpers.js:73:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:12:7)
    at Object.<anonymous> (  ...  /scripts/review.js:100:1)
    at Module._compile (internal/modules/cjs/loader.js:1200:30) 
```

```js
'use strict';

// fill in the blanks to write 9 passing test cases for this function
// be curious!  what happens if you use strange numbers like
//  NaN, Infinity, -0.0, 1.0003, -Infinity, -NaN, ...

/**
 * adds two numbers together
 * @param {number} x
 * @param {number} y
 * @returns {number} the sum of x and y
 */
function add(x, y) {
  if (typeof x !== 'number') { throw new TypeError(); }
  if (typeof y !== 'number') { throw new TypeError(); }

  const result = x + y;

  if (typeof result !== 'number') { throw new TypeError(); }
  return result;
}

const _1_expect = _;
const _1_actual = add(_);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = _;
const _2_actual = add(_);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = _;
const _3_actual = add(_);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = _;
const _4_actual = add(_);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = _;
const _5_actual = add(_);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = _;
const _6_actual = add(_);
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = _;
const _7_actual = add(_);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = _;
const _8_actual = add(_);
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = _;
const _9_actual = add(_);
console.assert(_9_actual === _9_expect, 'Test 9');

```

[TOP](#debuggercises)

---

## /2-write-tests.js 

> incomplete 
>
> [review source](../../../exercises/10-functions-201/1-fill-in-the-blanks/2-write-tests.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/10-functions-201/1-fill-in-the-blanks/2-write-tests.js:22:19)
    at Module._compile (internal/modules/cjs/loader.js:1200:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1220:10)
    at Module.load (internal/modules/cjs/loader.js:1049:32)
    at Function.Module._load (internal/modules/cjs/loader.js:937:14)
    at Module.require (internal/modules/cjs/loader.js:1089:19)
    at require (internal/modules/cjs/helpers.js:73:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:12:7)
    at Object.<anonymous> (  ...  /scripts/review.js:100:1)
    at Module._compile (internal/modules/cjs/loader.js:1200:30) 
```

```js
'use strict';

// fill in the blanks to write 9 passing test cases for this function
// be curious!  what happens if you use strange values?

/**
 * compares the type and value of two parameters
 * @param {any} a
 * @param {any} b
 * @returns {boolean} result of the comparison
 */
function strictEqual(a, b) {
  // no need to check a or b, they can be any type

  const result = a === b;

  if (typeof result !== 'boolean') { throw new TypeError(); }
  return result;
}


const _1_expect = _;
const _1_actual = strictEqual(_);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = _;
const _2_actual = strictEqual(_);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = _;
const _3_actual = strictEqual(_);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = _;
const _4_actual = strictEqual(_);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = _;
const _5_actual = strictEqual(_);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = _;
const _6_actual = strictEqual(_);
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = _;
const _7_actual = strictEqual(_);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = _;
const _8_actual = strictEqual(_);
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = _;
const _9_actual = strictEqual(_);
console.assert(_9_actual === _9_expect, 'Test 9');

```

[TOP](#debuggercises)

---

## /3-pass-tests.js 

> incomplete 
>
> [review source](../../../exercises/10-functions-201/1-fill-in-the-blanks/3-pass-tests.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at sameTruthiness (  ...  /exercises/10-functions-201/1-fill-in-the-blanks/3-pass-tests.js:14:18)
    at Object.<anonymous> (  ...  /exercises/10-functions-201/1-fill-in-the-blanks/3-pass-tests.js:22:19)
    at Module._compile (internal/modules/cjs/loader.js:1200:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1220:10)
    at Module.load (internal/modules/cjs/loader.js:1049:32)
    at Function.Module._load (internal/modules/cjs/loader.js:937:14)
    at Module.require (internal/modules/cjs/loader.js:1089:19)
    at require (internal/modules/cjs/helpers.js:73:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:12:7)
    at Object.<anonymous> (  ...  /scripts/review.js:100:1) 
```

```js
'use strict';

// write the logic to pass these tests

/**
 * checks if two values have the same truthiness
 * @param {any} a
 * @param {any} b
 * @returns {boolean}
 */
function sameTruthiness(a, b) {
  // no need to check a or b, they can be any type

  const result = _;

  if (typeof result !== 'boolean') { throw new TypeError(); }
  return result;
}


const _1_expect = false;
const _1_actual = sameTruthiness(1, 0);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = false;
const _2_actual = sameTruthiness('', ' ');
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = false;
const _3_actual = sameTruthiness(null, 'null');
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = false;
const _4_actual = sameTruthiness(false, -Infinity);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = false;
const _5_actual = sameTruthiness(NaN, 'false');
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = true;
const _6_actual = sameTruthiness(2, '2');
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = true;
const _7_actual = sameTruthiness('true', true);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = true;
const _8_actual = sameTruthiness(-1, 1);
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = true;
const _9_actual = sameTruthiness('hi!', 'bye :(');
console.assert(_9_actual === _9_expect, 'Test 9');

```

[TOP](#debuggercises)

---

## /4-pass-tests.js 

> incomplete 
>
> [review source](../../../exercises/10-functions-201/1-fill-in-the-blanks/4-pass-tests.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at mystery (  ...  /exercises/10-functions-201/1-fill-in-the-blanks/4-pass-tests.js:14:18)
    at Object.<anonymous> (  ...  /exercises/10-functions-201/1-fill-in-the-blanks/4-pass-tests.js:22:19)
    at Module._compile (internal/modules/cjs/loader.js:1200:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1220:10)
    at Module.load (internal/modules/cjs/loader.js:1049:32)
    at Function.Module._load (internal/modules/cjs/loader.js:937:14)
    at Module.require (internal/modules/cjs/loader.js:1089:19)
    at require (internal/modules/cjs/helpers.js:73:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:12:7)
    at Object.<anonymous> (  ...  /scripts/review.js:100:1) 
```

```js
'use strict';

// write the logic to pass the tests
// describe the function's behavior in the comment

/**
 * _
 * @param {any} a
 * @returns {boolean}
 */
function mystery(a) {
  // no need to check a , they can be any type

  const result = _;

  if (typeof result !== 'boolean') { throw new TypeError(); }
  return result;
}


const _1_expect = false;
const _1_actual = mystery('1');
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = false;
const _2_actual = mystery(true);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = false;
const _3_actual = mystery(null);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = false;
const _4_actual = mystery(8.5);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = false;
const _5_actual = mystery('Infinity');
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = false;
const _6_actual = mystery('');
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = true;
const _7_actual = mystery(undefined);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = true;
const _8_actual = mystery('four');
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = true;
const _9_actual = mystery('hi!');
console.assert(_9_actual === _9_expect, 'Test 9');

```

[TOP](#debuggercises)

---

## /5-twins.js 

> incomplete 
>
> [review source](../../../exercises/10-functions-201/1-fill-in-the-blanks/5-twins.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at notAndA (  ...  /exercises/10-functions-201/1-fill-in-the-blanks/5-twins.js:16:18)
    at Object.<anonymous> (  ...  /exercises/10-functions-201/1-fill-in-the-blanks/5-twins.js:42:20)
    at Module._compile (internal/modules/cjs/loader.js:1200:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1220:10)
    at Module.load (internal/modules/cjs/loader.js:1049:32)
    at Function.Module._load (internal/modules/cjs/loader.js:937:14)
    at Module.require (internal/modules/cjs/loader.js:1089:19)
    at require (internal/modules/cjs/helpers.js:73:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:12:7)
    at Object.<anonymous> (  ...  /scripts/review.js:100:1) 
```

```js
'use strict';

// write two different implementations with the same behavior
//  hint: demorgan

/**
 * returns true if neither argument is true, false if either are true
 * @param {boolean} x
 * @param {boolean} y
 * @returns {boolean}
 */
function notAndA(x, y) {
  if (typeof x !== 'boolean') { throw new TypeError(); }
  if (typeof y !== 'boolean') { throw new TypeError(); }

  const result = _;

  if (typeof result !== 'boolean') { throw new TypeError(); }
  return result;
}

/**
 * returns true if neither argument is true, false if either are true
 * @param {boolean} x
 * @param {boolean} y
 * @returns {boolean}
 */
function notAndB(x, y) {
  if (typeof x !== 'boolean') { throw new TypeError(); }
  if (typeof y !== 'boolean') { throw new TypeError(); }

  const result = _;

  if (typeof result !== 'boolean') { throw new TypeError(); }
  return result;
}


const _1_arg1 = false;
const _1_arg2 = false;
const _1_expect = true;
const _1_actualA = notAndA(_1_arg1, _1_arg2);
const _1_actualB = notAndB(_1_arg1, _1_arg2);
console.assert(_1_actualA === _1_expect, 'Test 1 A');
console.assert(_1_actualB === _1_expect, 'Test 1 B');

const _2_arg1 = true;
const _2_arg2 = false;
const _2_expect = false;
const _2_actualA = notAndA(_2_arg1, _2_arg2);
const _2_actualB = notAndB(_2_arg1, _2_arg2);
console.assert(_2_actualA === _2_expect, 'Test 2 A');
console.assert(_2_actualB === _2_expect, 'Test 2 B');

const _3_arg1 = false;
const _3_arg2 = true;
const _3_expect = false;
const _3_actualA = notAndA(_3_arg1, _3_arg2);
const _3_actualB = notAndB(_3_arg1, _3_arg2);
console.assert(_3_actualA === _3_expect, 'Test 3 A');
console.assert(_3_actualB === _3_expect, 'Test 3 B');

const _4_arg1 = true;
const _4_arg2 = true;
const _4_expect = false;
const _4_actualA = notAndA(_4_arg1, _4_arg2);
const _4_actualB = notAndB(_4_arg1, _4_arg2);
console.assert(_4_actualA === _4_expect, 'Test 4 A');
console.assert(_4_actualB === _4_expect, 'Test 4 B');

```

[TOP](#debuggercises)

---

## /6-twins.js 

> incomplete 
>
> [review source](../../../exercises/10-functions-201/1-fill-in-the-blanks/6-twins.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at notAndA (  ...  /exercises/10-functions-201/1-fill-in-the-blanks/6-twins.js:16:18)
    at Object.<anonymous> (  ...  /exercises/10-functions-201/1-fill-in-the-blanks/6-twins.js:42:20)
    at Module._compile (internal/modules/cjs/loader.js:1200:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1220:10)
    at Module.load (internal/modules/cjs/loader.js:1049:32)
    at Function.Module._load (internal/modules/cjs/loader.js:937:14)
    at Module.require (internal/modules/cjs/loader.js:1089:19)
    at require (internal/modules/cjs/helpers.js:73:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:12:7)
    at Object.<anonymous> (  ...  /scripts/review.js:100:1) 
```

```js
'use strict';

// write two different implementations with the same behavior
//  hint: demorgan

/**
 * returns true if either argument is false, false if both arguments are true
 * @param {boolean} x
 * @param {boolean} y
 * @returns {boolean}
 */
function notAndA(x, y) {
  if (typeof x !== 'boolean') { throw new TypeError(); }
  if (typeof y !== 'boolean') { throw new TypeError(); }

  const result = _;

  if (typeof result !== 'boolean') { throw new TypeError(); }
  return result;
}

/**
 * returns true if either argument is false, false if both arguments are true
 * @param {boolean} x
 * @param {boolean} y
 * @returns {boolean}
 */
function notAndB(x, y) {
  if (typeof x !== 'boolean') { throw new TypeError(); }
  if (typeof y !== 'boolean') { throw new TypeError(); }

  const result = _;

  if (typeof result !== 'boolean') { throw new TypeError(); }
  return result;
}


const _1_arg1 = false;
const _1_arg2 = false;
const _1_expect = true;
const _1_actualA = notAndA(_1_arg1, _1_arg2);
const _1_actualB = notAndB(_1_arg1, _1_arg2);
console.assert(_1_actualA === _1_expect, 'Test 1 A');
console.assert(_1_actualB === _1_expect, 'Test 1 B');

const _2_arg1 = true;
const _2_arg2 = false;
const _2_expect = true;
const _2_actualA = notAndA(_2_arg1, _2_arg2);
const _2_actualB = notAndB(_2_arg1, _2_arg2);
console.assert(_2_actualA === _2_expect, 'Test 2 A');
console.assert(_2_actualB === _2_expect, 'Test 2 B');

const _3_arg1 = false;
const _3_arg2 = true;
const _3_expect = true;
const _3_actualA = notAndA(_3_arg1, _3_arg2);
const _3_actualB = notAndB(_3_arg1, _3_arg2);
console.assert(_3_actualA === _3_expect, 'Test 3 A');
console.assert(_3_actualB === _3_expect, 'Test 3 B');

const _4_arg1 = true;
const _4_arg2 = true;
const _4_expect = false;
const _4_actualA = notAndA(_4_arg1, _4_arg2);
const _4_actualB = notAndB(_4_arg1, _4_arg2);
console.assert(_4_actualA === _4_expect, 'Test 4 A');
console.assert(_4_actualB === _4_expect, 'Test 4 B');

```

[TOP](#debuggercises)

