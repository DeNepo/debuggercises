# undefined 

> 6/19/2020, 12:47:28 AM 

## [exercises](../../README.md)/[14-for](../README.md)/examples 

- [/for-infinite.js](#for-infinitejs) - _too much iteration_ 
- [/for-many-lines.js](#for-many-linesjs) - _pass_ 
- [/for-one-line.js](#for-one-linejs) - _pass_ 
---

## /for-infinite.js 

> too much iteration 
>
> [review source](../../../exercises/14-for/examples/for-infinite.js)

```txt
LOG: C  0
LOG: C  1
LOG: C  2
LOG: C  3
LOG: C  4
LOG: C  5
LOG: C  6
LOG: C  7
LOG: C  8
LOG: C  9
LOG: C  10
LOG: C  11
LOG: C  12
LOG: C  13
LOG: C  14
LOG: C  15
LOG: C  16
LOG: C  17
LOG: C  18
LOG: C  19
LOG: C  20
LOG: C  21
LOG: C  22
LOG: C  23
LOG: C  24
LOG: C  25
LOG: C  26
LOG: C  27
LOG: C  28
LOG: C  29
LOG: C  30
LOG: C  31
LOG: C  32
LOG: C  33
LOG: C  34
LOG: C  35
LOG: C  36
LOG: C  37
LOG: C  38
LOG: C  39
LOG: C  40
LOG: C  41
LOG: C  42
LOG: C  43
LOG: C  44
LOG: C  45
LOG: C  46
LOG: C  47
LOG: C  48
LOG: C  49
UNCAUGHT: Error: Loop exceeded 50 iterations
    at Object.<anonymous> (  ...  /exercises/14-for/examples/for-infinite.js:18:65)
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

// it is possible to write loops that will never end
//  using 'evaluate code' stops your loops after 1000 iterations
//  and throws a custom error (so googling it won't help)
// using '.. with max iterations = X' will run your code for the debugger
//  with guards against your loops exceeding X iterations


for (let i = 0; 1 < i; i++) {
  console.log('A.', i);
}

for (let i = 0; 0 < i; i++) {
  console.log('B', i);
}

for (let i = 0; -1 < i; i++) {
  console.log('C', i);
}

```

[TOP](#debuggercises)

---

## /for-many-lines.js 

> pass 
>
> [review source](../../../exercises/14-for/examples/for-many-lines.js)

```txt
+ PASS: Test 1
```

```js
// 1: declare and assign result
let result = 0;

for (
  // 2: declare and assign i
  let i = 0; // begin

  // 3, 6, 9, 12, 15: check the condition
  i < 4; // condition

  // 5, 8, 11, 14: increment i
  i++ // step
) {

  // 4, 7, 10, 13: run the body
  result += i;
}

// step: 16
console.assert(result === 6, 'Test 1');


/* anatomy of a for loop: https://javascript.info/while-for#the-for-loop

  for (begin; condition; step) {
    // ... loop body ...
  }

*/

```

[TOP](#debuggercises)

---

## /for-one-line.js 

> pass 
>
> [review source](../../../exercises/14-for/examples/for-one-line.js)

```txt
+ PASS: Test 1
```

```js
// 1: declare and assign result
let result = 0;


// 2: declare and assign i
// 3, 6, 9, 12, 15: check the condition
// 5, 8, 11, 14: increment i
for (let i = 0; i < 4; i++) {
  // 4, 7, 10, 13: run the body
  result += i;
}

// step: 16
console.assert(result === 6, 'Test 1');


/* anatomy of a for loop: https://javascript.info/while-for#the-for-loop

  for (begin; condition; step) {
    // ... loop body ...
  }

*/

```

[TOP](#debuggercises)

