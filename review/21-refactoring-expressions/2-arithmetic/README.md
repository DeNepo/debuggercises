# Debuggercises 

> 6/21/2020, 9:05:10 AM 

## [exercises](../../README.md)/[21-refactoring-expressions](../README.md)/2-arithmetic 

- [/1.js](#1js) - _pass_ 
- [/2.js](#2js) - _pass_ 
- [/3.js](#3js) - _pass_ 
---

## /1.js 

> pass 
>
> [review source](../../../exercises/21-refactoring-expressions/2-arithmetic/1.js)

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
 * does math
 * @param {any} a
 * @param {any} b
 * @returns {number}
 */
const doMath = (a, b, c) => -(a + b) * c;


const _1_expect = -9;
const _1_actual = doMath(1, 2, 3);
console.assert(Object.is(_1_actual, _1_expect), 'Test 1');

const _2_expect = -5;
const _2_actual = doMath(3, 2, 1);
console.assert(Object.is(_2_actual, _2_expect), 'Test 2');

const _3_expect = -0;
const _3_actual = doMath(null, true, false);
console.assert(Object.is(_3_actual, _3_expect), 'Test 3');

const _4_expect = 10;
const _4_actual = doMath('1', '0', '-1');
console.assert(Object.is(_4_actual, _4_expect), 'Test 4');

const _5_expect = NaN;
const _5_actual = doMath(undefined, 'asdf', 'hello');
console.assert(Object.is(_5_actual, _5_expect), 'Test 5');

const _6_expect = -8.75;
const _6_actual = doMath(1.5, 2, 2.5);
console.assert(Object.is(_6_actual, _6_expect), 'Test 6');

```

[TOP](#debuggercises)

---

## /2.js 

> pass 
>
> [review source](../../../exercises/21-refactoring-expressions/2-arithmetic/2.js)

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
 * does math
 * @param {any} a
 * @param {any} b
 * @returns {number}
 */
const doMath = (a, b, c) => -a / b * +c;


const _1_expect = Infinity;
const _1_actual = doMath(-1, 0, 1);
console.assert(Object.is(_1_actual, _1_expect), 'Test 1');

const _2_expect = -1.5;
const _2_actual = doMath(3, 2, 1);
console.assert(Object.is(_2_actual, _2_expect), 'Test 2');

const _3_expect = -1.9764705882352942;
const _3_actual = doMath(1.2, 3.4, 5.6);
console.assert(Object.is(_3_actual, _3_expect), 'Test 3');

const _4_expect = NaN;
const _4_actual = doMath('a', 'b', 'c');
console.assert(Object.is(_4_actual, _4_expect), 'Test 4');

const _5_expect = -0.1;
const _5_actual = doMath('1', 1e1, true);
console.assert(Object.is(_5_actual, _5_expect), 'Test 5');

const _6_expect = NaN;
const _6_actual = doMath(Infinity, '4', false);
console.assert(Object.is(_6_actual, _6_expect), 'Test 6');

```

[TOP](#debuggercises)

---

## /3.js 

> pass 
>
> [review source](../../../exercises/21-refactoring-expressions/2-arithmetic/3.js)

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
 * does math
 * @param {any} a
 * @param {any} b
 * @returns {number}
 */
const doMath = (a, b, c) => b % (c - a * c) / b;


const _1_expect = NaN;
const _1_actual = doMath(-1, 0, 1);
console.assert(Object.is(_1_actual, _1_expect), 'Test 1');

const _2_expect = 0;
const _2_actual = doMath(3, 2, 1);
console.assert(Object.is(_2_actual, _2_expect), 'Test 2');

const _3_expect = 0.011764705882352821;
const _3_actual = doMath(1.2, 3.4, 5.6);
console.assert(Object.is(_3_actual, _3_expect), 'Test 3');

const _4_expect = 1;
const _4_actual = doMath(0.1, 0.2, 0.3);
console.assert(Object.is(_4_actual, _4_expect), 'Test 4');

const _5_expect = NaN;
const _5_actual = doMath('1', 1e1, true);
console.assert(Object.is(_5_actual, _5_expect), 'Test 5');

const _6_expect = 0;
const _6_actual = doMath('', '4', true);
console.assert(Object.is(_6_actual, _6_expect), 'Test 6');

```

[TOP](#debuggercises)

