# Debuggercises 

> 6/21/2020, 9:05:10 AM 

## [exercises](../../README.md)/[15-while](../README.md)/examples 

- [/1-while.js](#1-whilejs) - _pass_ 
- [/2-while-infinite.js](#2-while-infinitejs) - _too much iteration_ 
---

## /1-while.js 

> pass 
>
> [review source](../../../exercises/15-while/examples/1-while.js)

```txt
+ PASS: Test 1
```

```js
// 1: use strict
'use strict';

// 2: declare and assign a
let a = 0;
// 3: declare and assign b
const b = 8;

// 4, 6, 8, 10, 12: check the condition
while (a !== b) {
  // 5, 7, 9, 11: increment a
  a += b / 4;
}

// 13: assert a
console.assert(a === 8, 'Test 1');

/* anatomy of a while loop: https://javascript.info/while-for#the-while-loop
  while (condition) {
    // ... loop body ...
  }
*/

/* variables analysis:

  a: accumulator, number, strategy
    a also holds the final result
    it accumulates b/4
    declared in global scope
    reassigned in the while loop
    read in the assertion
  b: constant, number, strategy
    it's value is used to create the final result
    it's also read in the loop while condition
    declared in global scope
    read in while body

  this is a simple analysis, what would you want to add?
*/

```

[TOP](#debuggercises)

---

## /2-while-infinite.js 

> too much iteration 
>
> [review source](../../../exercises/15-while/examples/2-while-infinite.js)

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
    at Object.<anonymous> (  ...  /exercises/15-while/examples/2-while-infinite.js:22:51)
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


/* note about this repository

  JavaScript does not have a built-in protection against infinite loops
  this is why if you ever run one in your browser it freezes and you have to close the tab

  however, this repository has some protections against infinite loops
  - when studying in the browser using localhost:3000, the loop exercises have an extra button
    "maxIterations: X" - click this button to see a simple way to avoid infinite loops
    the LiveStudy app uses regular expressions to inject guards into your loops
    if the loop exceeds the allowed iterations it will throw an error: "Loop exceeded X iterations"
    this is a custom error, it's not part of JavaScript so googling it won't help to understand it
  - when `npm run review` is executed, the script will use the same technique to try preventing infinite loops
    the only difference is that it will inject it all on one line like this:
      let loop1 = 0; while (true) { if (maxIterations < ++loop1) { throw new Error('Loop exceeded X iterations); }
    when you read the callstacks in your review files, the line numbers should be correct
    but the character numbers will be too high.  now you know why :)

*/

```

[TOP](#debuggercises)

