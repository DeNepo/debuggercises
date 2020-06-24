# Debuggercises 

> 6/24/2020, 5:04:07 PM 

## [exercises](../../README.md)/[04-value-swaps](../README.md)/example 

- [/double-swap.js](#double-swapjs) - _pass_ 
---

## /double-swap.js 

> pass 
>
> [review source](../../../exercises/04-value-swaps/example/double-swap.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
```

```js
'use strict';

// this file shows the final line of code, with all tests passing

// declare & assign variables
let a = "y";
let b = "x";
let temp = null;

// swap the values stored by a and b ...

// 1: store a's value for later
temp = a;
// 2: assign b's value to a
a = b;
// 3: assign the saved value to b
b = temp;


// assert expected values

const isTrue1 = a === "x";
console.assert(isTrue1, "Test 1");

const isTrue2 = b === "y";
console.assert(isTrue2, "Test 2");

const isTrue3 = temp === "y";
console.assert(isTrue3, "Test 3");

```

[TOP](#debuggercises)

