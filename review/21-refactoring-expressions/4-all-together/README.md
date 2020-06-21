# Debuggercises 

> 6/21/2020, 9:05:10 AM 

## [exercises](../../README.md)/[21-refactoring-expressions](../README.md)/4-all-together 

- [/1.js](#1js) - _pass_ 
- [/2.js](#2js) - _pass_ 
- [/3.js](#3js) - _pass_ 
- [/4.js](#4js) - _pass_ 
- [/5.js](#5js) - _pass_ 
---

## /1.js 

> pass 
>
> [review source](../../../exercises/21-refactoring-expressions/4-all-together/1.js)

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
 * the worlds greatest mystery, will anyone ever know ?!
 * @param {any} a
 * @param {any} b
 * @returns {(number|boolean)}
 */
const mystery = (a, b) => a % b || !!a;


const _1_expect = false;
const _1_actual = mystery(null, 0);
console.assert(Object.is(_1_actual, _1_expect), 'Test 1');

const _2_expect = true;
const _2_actual = mystery(12, 3);
console.assert(Object.is(_2_actual, _2_expect), 'Test 2');

const _3_expect = 3;
const _3_actual = mystery(3, 12);
console.assert(Object.is(_3_actual, _3_expect), 'Test 3');

const _4_expect = 1;
const _4_actual = mystery('6', '5');
console.assert(Object.is(_4_actual, _4_expect), 'Test 4');

const _5_expect = 0.14159265358979312;
const _5_actual = mystery(Math.PI, true);
console.assert(Object.is(_5_actual, _5_expect), 'Test 5');

const _6_expect = true;
const _6_actual = mystery('hello!', 'goodbye :(');
console.assert(Object.is(_6_actual, _6_expect), 'Test 6');

```

[TOP](#debuggercises)

---

## /2.js 

> pass 
>
> [review source](../../../exercises/21-refactoring-expressions/4-all-together/2.js)

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
 * the worlds greatest mystery, will anyone ever know ?!
 * @param {any} a
 * @returns {boolean}
 */
const mystery = (a) => typeof a === 'number' + a;


const _1_expect = false;
const _1_actual = mystery('number');
console.assert(Object.is(_1_actual, _1_expect), 'Test 1');

const _2_expect = false;
const _2_actual = mystery('string');
console.assert(Object.is(_2_actual, _2_expect), 'Test 2');

const _3_expect = false;
const _3_actual = mystery(23);
console.assert(Object.is(_3_actual, _3_expect), 'Test 3');

const _4_expect = false;
const _4_actual = mystery(NaN);
console.assert(Object.is(_4_actual, _4_expect), 'Test 4');

const _5_expect = false;
const _5_actual = mystery(null);
console.assert(Object.is(_5_actual, _5_expect), 'Test 5');

const _6_expect = false;
const _6_actual = mystery(undefined);
console.assert(Object.is(_6_actual, _6_expect), 'Test 6');

```

[TOP](#debuggercises)

---

## /3.js 

> pass 
>
> [review source](../../../exercises/21-refactoring-expressions/4-all-together/3.js)

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
 * the worlds greatest mystery, will anyone ever know ?!
 * @param {any} a
 * @returns {boolean}
 */
const mystery = (a) => !!+a == Boolean(Number(a));


const _1_expect = true;
const _1_actual = mystery('23');
console.assert(Object.is(_1_actual, _1_expect), 'Test 1');

const _2_expect = true;
const _2_actual = mystery('fdsa');
console.assert(Object.is(_2_actual, _2_expect), 'Test 2');

const _3_expect = true;
const _3_actual = mystery(23);
console.assert(Object.is(_3_actual, _3_expect), 'Test 3');

const _4_expect = true;
const _4_actual = mystery(NaN);
console.assert(Object.is(_4_actual, _4_expect), 'Test 4');

const _5_expect = true;
const _5_actual = mystery(null);
console.assert(Object.is(_5_actual, _5_expect), 'Test 5');

const _6_expect = true;
const _6_actual = mystery(undefined);
console.assert(Object.is(_6_actual, _6_expect), 'Test 6');

```

[TOP](#debuggercises)

---

## /4.js 

> pass 
>
> [review source](../../../exercises/21-refactoring-expressions/4-all-together/4.js)

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
 * the worlds greatest mystery, will anyone ever know ?!
 * @param {any} a
 * @param {any} b
 * @returns {boolean}
 */
const mystery = (a, b) => a == b && typeof a !== typeof b;


const _1_expect = true;
const _1_actual = mystery('23', 23.0);
console.assert(Object.is(_1_actual, _1_expect), 'Test 1');

const _2_expect = false;
const _2_actual = mystery('fdsa', 'fdsa');
console.assert(Object.is(_2_actual, _2_expect), 'Test 2');

const _3_expect = true;
const _3_actual = mystery(undefined, null);
console.assert(Object.is(_3_actual, _3_expect), 'Test 3');

const _4_expect = false;
const _4_actual = mystery(1000, 1e3);
console.assert(Object.is(_4_actual, _4_expect), 'Test 4');

const _5_expect = true;
const _5_actual = mystery(true, 1);
console.assert(Object.is(_5_actual, _5_expect), 'Test 5');

const _6_expect = false;
const _6_actual = mystery(undefined, NaN);
console.assert(Object.is(_6_actual, _6_expect), 'Test 6');

```

[TOP](#debuggercises)

---

## /5.js 

> pass 
>
> [review source](../../../exercises/21-refactoring-expressions/4-all-together/5.js)

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
 * the worlds greatest mystery, will anyone ever know ?!
 * @param {any} a
 * @param {any} b
 * @returns {boolean}
 */
const mystery = (a, b) => !+(!!a + (+b) % a);


const _1_expect = false;
const _1_actual = mystery('23', 23.0);
console.assert(Object.is(_1_actual, _1_expect), 'Test 1');

const _2_expect = true;
const _2_actual = mystery('fdsa', 'fdsa');
console.assert(Object.is(_2_actual, _2_expect), 'Test 2');

const _3_expect = true;
const _3_actual = mystery(undefined, null);
console.assert(Object.is(_3_actual, _3_expect), 'Test 3');

const _4_expect = false;
const _4_actual = mystery(1000, 1e3);
console.assert(Object.is(_4_actual, _4_expect), 'Test 4');

const _5_expect = false;
const _5_actual = mystery(true, 1);
console.assert(Object.is(_5_actual, _5_expect), 'Test 5');

const _6_expect = true;
const _6_actual = mystery(undefined, NaN);
console.assert(Object.is(_6_actual, _6_expect), 'Test 6');

```

[TOP](#debuggercises)

