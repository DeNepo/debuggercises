# undefined 

> 6/19/2020, 12:47:28 AM 

## [exercises](../../README.md)/[13-while](../README.md)/examples 

- [/while-infinite.js](#while-infinitejs) - _too much iteration_ 
- [/while.js](#whilejs) - _pass_ 
---

## /while-infinite.js 

> too much iteration 
>
> [review source](../../../exercises/13-while/examples/while-infinite.js)

```txt
LOG: C.  1
LOG: C.  2
LOG: C.  3
LOG: C.  4
LOG: C.  5
LOG: C.  6
LOG: C.  7
LOG: C.  8
LOG: C.  9
LOG: C.  10
LOG: C.  11
LOG: C.  12
LOG: C.  13
LOG: C.  14
LOG: C.  15
LOG: C.  16
LOG: C.  17
LOG: C.  18
LOG: C.  19
LOG: C.  20
LOG: C.  21
LOG: C.  22
LOG: C.  23
LOG: C.  24
LOG: C.  25
LOG: C.  26
LOG: C.  27
LOG: C.  28
LOG: C.  29
LOG: C.  30
LOG: C.  31
LOG: C.  32
LOG: C.  33
LOG: C.  34
LOG: C.  35
LOG: C.  36
LOG: C.  37
LOG: C.  38
LOG: C.  39
LOG: C.  40
LOG: C.  41
LOG: C.  42
LOG: C.  43
LOG: C.  44
LOG: C.  45
LOG: C.  46
LOG: C.  47
LOG: C.  48
LOG: C.  49
LOG: C.  50
UNCAUGHT: Error: Loop exceeded 50 iterations
    at Object.<anonymous> (  ...  /exercises/13-while/examples/while-infinite.js:22:51)
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

let a = 0;
while (1 < a) {
  a++;
  console.log('A.', a);
}

let b = 0;
while (0 < b) {
  b++;
  console.log('B.', b);
}

let c = 0;
while (-1 < c) {
  c++;
  console.log('C.', c);
}

```

[TOP](#debuggercises)

---

## /while.js 

> pass 
>
> [review source](../../../exercises/13-while/examples/while.js)

```txt
+ PASS: Test 1
```

```js
// 1: declare and assign a
let a = 0;
// 2: declare and assign b
const b = 8;

// 3, 5, 7, 9, 11: check the condition
while (a !== b) {
  // 4, 6, 8, 10: increment a
  a += b / 4;
}

// 12: assert a
console.assert(a === 8, 'Test 1');

/* anatomy of a while loop: https://javascript.info/while-for#the-while-loop
  while (condition) {
    // ... loop body ...
  }
*/

```

[TOP](#debuggercises)

