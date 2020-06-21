# Debuggercises 

> 6/21/2020, 9:05:10 AM 

## [exercises](../../README.md)/[21-refactoring-expressions](../README.md)/1-coercion-and-comparing 

- [/1.js](#1js) - _pass_ 
- [/2.js](#2js) - _pass_ 
- [/3.js](#3js) - _pass_ 
---

## /1.js 

> pass 
>
> [review source](../../../exercises/21-refactoring-expressions/1-coercion-and-comparing/1.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
+ PASS: Test 5
+ PASS: Test 6
```

```js
'use strict';

// refactor this function so there's one operation per step
//  re-run the tests every time you make a change (even a tiny change!)
//  practice using tests to pace your development

/**
 * determines if two values have the same type
 * @param {any} a
 * @param {any} b
 * @returns {boolean}
 */
const compareTypes = (a, b) => typeof a === typeof b;


const _1_expect = true;
const _1_actual = compareTypes('', '     ');
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = true;
const _2_actual = compareTypes(NaN, NaN);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = true;
const _3_actual = compareTypes(true, false);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = false;
const _4_actual = compareTypes(null, 'null');
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = false;
const _5_actual = compareTypes(undefined, null);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = false;
const _6_actual = compareTypes(0, false);
console.assert(_6_actual === _6_expect, 'Test 6');

```

[TOP](#debuggercises)

---

## /2.js 

> pass 
>
> [review source](../../../exercises/21-refactoring-expressions/1-coercion-and-comparing/2.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
+ PASS: Test 5
+ PASS: Test 6
```

```js
'use strict';

// refactor this function so there's one operation per step
//  re-run the tests every time you make a change (even a tiny change!)
//  practice using tests to pace your development

/**
 * determines if two values have different truthiness
 * @param {any} a
 * @param {any} b
 * @returns {boolean}
 */
const differentTruthiness = (a, b) => Boolean(a) !== Boolean(b);


const _1_expect = true;
const _1_actual = differentTruthiness('', '     ');
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = true;
const _2_actual = differentTruthiness(NaN, 'NaN');
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = true;
const _3_actual = differentTruthiness(true, false);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = false;
const _4_actual = differentTruthiness(NaN, NaN);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = false;
const _5_actual = differentTruthiness('', 0);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = false;
const _6_actual = differentTruthiness(1, true);
console.assert(_6_actual === _6_expect, 'Test 6');

```

[TOP](#debuggercises)

---

## /3.js 

> pass 
>
> [review source](../../../exercises/21-refactoring-expressions/1-coercion-and-comparing/3.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
+ PASS: Test 5
+ PASS: Test 6
```

```js
'use strict';

// refactor this function so there's one operation per step
//  re-run the tests every time you make a change (even a tiny change!)
//  practice using tests to pace your development

/**
 * determines if two values coerce to the same number
 *  two values that coerce to NaN are considered matching
 * @param {any} a
 * @param {any} b
 * @returns {boolean}
 */
const sameNumberyness = (a, b) => Object.is(Number(a), Number(b));


const _1_expect = true;
const _1_actual = sameNumberyness(undefined, 'NaN');
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = true;
const _2_actual = sameNumberyness(100, '100');
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = true;
const _3_actual = sameNumberyness(null, false);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = false;
const _4_actual = sameNumberyness(100, '101');
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = false;
const _5_actual = sameNumberyness('', 1);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = false;
const _6_actual = sameNumberyness(0, true);
console.assert(_6_actual === _6_expect, 'Test 6');

```

[TOP](#debuggercises)

