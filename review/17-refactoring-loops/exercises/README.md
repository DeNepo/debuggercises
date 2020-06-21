# Debuggercises 

> 6/21/2020, 9:05:10 AM 

## [exercises](../../README.md)/[17-refactoring-loops](../README.md)/exercises 

- [/1-for-to-while.js](#1-for-to-whilejs) - _pass_ 
- [/2-for-to-while.js](#2-for-to-whilejs) - _pass_ 
- [/3-while-to-for.js](#3-while-to-forjs) - _pass_ 
- [/4-while-to-for.js](#4-while-to-forjs) - _pass_ 
---

## /1-for-to-while.js 

> pass 
>
> [review source](../../../exercises/17-refactoring-loops/exercises/1-for-to-while.js)

```txt
+ PASS: Test  1
+ PASS: Test  2
+ PASS: Test  3
+ PASS: Test  4
+ PASS: Test  5
+ PASS: Test  6
```

```js
'use strict';

/**
 * repeat a string once for every character in the string
 * @param {string} toRepeat
 * @returns {string}
 */
const repeatLengthTimes = (toRepeat) => {
  if (typeof toRepeat !== 'string') { throw new TypeError('toRepeat'); }

  let result = '';
  for (let i = 0; i < toRepeat.length; i++) {
    result += toRepeat;
  }

  if (typeof result !== 'string') { throw new TypeError('result'); }
  return result;
};


const _1_expect = '3232';
const _1_actual = repeatLengthTimes('32');
console.assert(_1_actual === _1_expect, 'Test  1');

const _2_expect = '';
const _2_actual = repeatLengthTimes('');
console.assert(_2_actual === _2_expect, 'Test  2');

const _3_expect = '321321321';
const _3_actual = repeatLengthTimes('321');
console.assert(_3_actual === _3_expect, 'Test  3');

const _4_expect = '-<>--<>--<>--<>-';
const _4_actual = repeatLengthTimes('-<>-');
console.assert(_4_actual === _4_expect, 'Test  4');

const _5_expect = '.';
const _5_actual = repeatLengthTimes('.');
console.assert(_5_actual === _5_expect, 'Test  5');

const _6_expect = '5432154321543215432154321';
const _6_actual = repeatLengthTimes('54321');
console.assert(_6_actual === _6_expect, 'Test  6');


```

[TOP](#debuggercises)

---

## /2-for-to-while.js 

> pass 
>
> [review source](../../../exercises/17-refactoring-loops/exercises/2-for-to-while.js)

```txt
+ PASS: Test  1
+ PASS: Test  2
+ PASS: Test  3
+ PASS: Test  4
+ PASS: Test  5
+ PASS: Test  6
+ PASS: Test  7
+ PASS: Test  8
+ PASS: Test  9
```

```js
'use strict';

/**
 * among the greatest mysteries in the world, no one knows!
 * @param {number}
 * @returns {number}
 */
const mystery = (x) => {
  if (typeof x !== 'number') { throw new TypeError('x'); }

  let result = 0;
  for (let i = 0; i !== Math.abs(x); i++) {
    if (x > 0) {
      result += 1;
    } else {
      result += -1;
    }
  }

  if (typeof result !== 'number') { throw new TypeError('result'); }
  return result;
};


const _1_actual = mystery(-4);
const _1_expect = -4;
console.assert(_1_actual === _1_expect, 'Test  1');

const _2_actual = mystery(-3);
const _2_expect = -3;
console.assert(_2_actual === _2_expect, 'Test  2');

const _3_actual = mystery(-2);
const _3_expect = -2;
console.assert(_3_actual === _3_expect, 'Test  3');

const _4_actual = mystery(-1);
const _4_expect = -1;
console.assert(_4_actual === _4_expect, 'Test  4');

const _5_expect = 0;
const _5_actual = mystery(0);
console.assert(_5_actual === _5_expect, 'Test  5');

const _6_expect = 1;
const _6_actual = mystery(1);
console.assert(_6_actual === _6_expect, 'Test  6');

const _7_expect = 2;
const _7_actual = mystery(2);
console.assert(_7_actual === _7_expect, 'Test  7');

const _8_expect = 3;
const _8_actual = mystery(3);
console.assert(_8_actual === _8_expect, 'Test  8');

const _9_expect = 4;
const _9_actual = mystery(4);
console.assert(_9_actual === _9_expect, 'Test  9');

```

[TOP](#debuggercises)

---

## /3-while-to-for.js 

> pass 
>
> [review source](../../../exercises/17-refactoring-loops/exercises/3-while-to-for.js)

```txt
+ PASS: Test  1
+ PASS: Test  2
+ PASS: Test  3
+ PASS: Test  4
+ PASS: Test  5
+ PASS: Test  6
```

```js
'use strict';

// refactor (re-write) this function to use a for loop instead of a while loop
//  it should still pass all the same tests!
// hint: you don't need to understand what the loop does
//  you just need to recognize the pieces of a for loop and rearrange them

/**
 * among the greatest mysteries in the world, no one knows!
 * @param {number} x
 * @returns {number}
 */
const mystery = (x) => {
  if (typeof x !== 'number') { throw new TypeError('x'); }

  let result = 0;
  let i = 0;
  while (i !== x) {
    result += i;
    i += 2;
  }

  if (typeof result !== 'number') { throw new TypeError('result'); }
  return result;
};


const _1_expect = 0;
const _1_actual = mystery(0);
console.assert(_1_actual === _1_expect, 'Test  1');

const _2_expect = 2450;
const _2_actual = mystery(100);
console.assert(_2_actual === _2_expect, 'Test  2');

const _3_expect = 30;
const _3_actual = mystery(12);
console.assert(_3_actual === _3_expect, 'Test  3');

const _4_expect = 20;
const _4_actual = mystery(10);
console.assert(_4_actual === _4_expect, 'Test  4');

const _5_expect = 1406;
const _5_actual = mystery(76);
console.assert(_5_actual === _5_expect, 'Test  5');

const _6_expect = 0;
const _6_actual = mystery(2);
console.assert(_6_actual === _6_expect, 'Test  6');


```

[TOP](#debuggercises)

---

## /4-while-to-for.js 

> pass 
>
> [review source](../../../exercises/17-refactoring-loops/exercises/4-while-to-for.js)

```txt
+ PASS: Test  1
+ PASS: Test  2
+ PASS: Test  3
+ PASS: Test  4
+ PASS: Test  5
+ PASS: Test  6
```

```js
'use strict';

// refactor (re-write) this function to use a for loop instead of a while loop
//  it should still pass all the same tests!
// hint: you don't need to understand what the loop does
//  you just need to recognize the pieces of a for loop and rearrange them

/**
 * among the greatest mysteries in the world, no one knows!
 * @param {number} x
 * @returns {number}
 */
const mystery = (x) => {
  if (typeof x !== 'number') { throw new TypeError('x'); }

  let result = 0;
  let i = 6;
  while (i % 6 !== x) {
    result = result + i--;
  }

  if (typeof result !== 'number') { throw new TypeError('result'); }
  return result;
}


const _1_expect = 15;
const _1_actual = mystery(3);
console.assert(_1_actual === _1_expect, 'Test  1');

const _2_expect = 18;
const _2_actual = mystery(-3);
console.assert(_2_actual === _2_expect, 'Test  2');

const _3_expect = 0;
const _3_actual = mystery(0);
console.assert(_3_actual === _3_expect, 'Test  3');

const _4_expect = 11;
const _4_actual = mystery(4);
console.assert(_4_actual === _4_expect, 'Test  4');

const _5_expect = 15;
const _5_actual = mystery(-4);
console.assert(_5_actual === _5_expect, 'Test  5');

const _6_expect = 20;
const _6_actual = mystery(-2);
console.assert(_6_actual === _6_expect, 'Test  6');


```

[TOP](#debuggercises)

