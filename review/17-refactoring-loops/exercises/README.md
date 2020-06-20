# Debuggercises 

> 6/20/2020, 4:47:24 PM 

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
+ PASS: first 0
+ PASS: second -3
+ PASS: third 0
+ PASS: fourth -3
+ PASS: fifth -47.33203125
+ PASS: sixth -10.3125
+ PASS: seventh -47.33203125
+ PASS: eighth 0
+ PASS: ninth -3
+ PASS: tenth -3
```

```js
// fill in the blanks so that both loops behave the same
//  the tests are correct, there's no need to change them!
const forToWhile_1_Tests = [
  { name: 'first', args: [-60], expected: 0 },
  { name: 'second', args: [3], expected: -3 },
  { name: 'third', args: [-3], expected: 0 },
  { name: 'fourth', args: [0], expected: -3 },
  { name: 'fifth', args: [100], expected: -47.33203125 },
  { name: 'sixth', args: [12], expected: -10.3125 },
  { name: 'seventh', args: [67], expected: -47.33203125 },
  { name: 'eighth', args: [-4], expected: 0 },
  { name: 'ninth', args: [-2], expected: -3 },
  { name: 'tenth', args: [4], expected: -3 },
];

// refactor this for loop into a while loop
function forToWhile(a) {
  let result = 0;
  for (let i = -3; i === 10 || i < a; i *= -1.5) {
    result += i;
  }
  return result;
}

forToWhile_1_Tests.forEach(function evaluateTestCase(test) {
  try {
    console.assert(forToWhile(...test.args) === test.expected, test.name + ' ' + forToWhile(...test.args));
  } catch (err) {
    if (err.message === 'Loop exceeded 1000 iterations') {
      test.hasOwnProperty('expected')
        ? console.assert(false, test.name + ' ---> 1000+')
        : console.assert(true, test.name + ' ---> 1000+');
    } else { throw err; }
  }
});

```

[TOP](#debuggercises)

---

## /2-for-to-while.js 

> pass 
>
> [review source](../../../exercises/17-refactoring-loops/exercises/2-for-to-while.js)

```txt
+ PASS: first 10
+ PASS: second 3
+ PASS: third 10
+ PASS: fourth 0
+ PASS: fifth 10
+ PASS: sixth 10
+ PASS: seventh 10
+ PASS: eighth 10
+ PASS: ninth 10
+ PASS: tenth 6
```

```js
// fill in the blanks so that both loops behave the same
//  the tests are correct, there's no need to change them!
const forToWhile_2_Tests = [
  { name: 'first', args: [-60], expected: 10 },
  { name: 'second', args: [3], expected: 3 },
  { name: 'third', args: [-3], expected: 10 },
  { name: 'fourth', args: [0], expected: 0 },
  { name: 'fifth', args: [100], expected: 10 },
  { name: 'sixth', args: [12], expected: 10 },
  { name: 'seventh', args: [67], expected: 10 },
  { name: 'eighth', args: [-4], expected: 10 },
  { name: 'ninth', args: [-2], expected: 10 },
  { name: 'tenth', args: [4], expected: 6 },
];

// refactor this for loop into a while loop
function forToWhile(a) {
  let result = 0;
  for (let i = 0, j = 10; i !== j && i !== a; i++ , j--) {
    result += i;
  }
  return result;
}

forToWhile_2_Tests.forEach(function evaluateTestCase(test) {
  try {
    console.assert(forToWhile(...test.args) === test.expected, test.name + ' ' + forToWhile(...test.args));
  } catch (err) {
    if (err.message === 'Loop exceeded 1000 iterations') {
      test.hasOwnProperty('expected')
        ? console.assert(false, test.name + ' ---> 1000+')
        : console.assert(true, test.name + ' ---> 1000+');
    } else { throw err; }
  }
});

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

