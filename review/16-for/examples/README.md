# Debuggercises 

> 6/21/2020, 9:05:10 AM 

## [exercises](../../README.md)/[16-for](../README.md)/examples 

- [/1-for-many-lines.js](#1-for-many-linesjs) - _pass_ 
- [/2-for-one-line.js](#2-for-one-linejs) - _pass_ 
- [/3-for-infinite.js](#3-for-infinitejs) - _too much iteration_ 
---

## /1-for-many-lines.js 

> pass 
>
> [review source](../../../exercises/16-for/examples/1-for-many-lines.js)

```txt
+ PASS: Test 1
```

```js
// 1: use strict
'use strict';

// 2: declare and assign result
let result = 0;

for (
  // 3: declare and assign i
  let i = 0; // begin

  // 4, 7, 10, 13, 16: check the condition
  i < 4; // condition

  // 6, 9, 12, 15: increment i
  i++ // step
) {

  // 5, 8, 11, 14: run the body
  result += i;
}

// step: 17
console.assert(result === 6, 'Test 1');


/* anatomy of a for loop: https://javascript.info/while-for#the-for-loop

  for (begin; condition; step) {
    // ... loop body ...
  }

*/

```

[TOP](#debuggercises)

---

## /2-for-one-line.js 

> pass 
>
> [review source](../../../exercises/16-for/examples/2-for-one-line.js)

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

/* variables analysis:

  result: accumulator, number, strategy
    this is the final result of the program
    it accumulates all of i's values using addition
    declared in global scope
    reassigned in the while loop
    read in the assertion
  i: stepper, number, strategy
    it's value is used to create the final result
    it's reassigned incremental values in the for loop declaration
    declared in for loop, not available in global scope
    read in the for loop ...
      to accumulate the result
      to check if the loop has stepped enough times

  this is a simple analysis, what would you want to add?
*/

```

[TOP](#debuggercises)

---

## /3-for-infinite.js 

> too much iteration 
>
> [review source](../../../exercises/16-for/examples/3-for-infinite.js)

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
    at Object.<anonymous> (  ...  /exercises/16-for/examples/3-for-infinite.js:18:65)
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

