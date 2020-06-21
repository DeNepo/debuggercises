# Debuggercises 

> 6/21/2020, 9:05:10 AM 

## [exercises](../../README.md)/[14-increment-and-decrement](../README.md)/exercises 

- [/1.js](#1js) - _incomplete_ 
- [/2.js](#2js) - _incomplete_ 
- [/3.js](#3js) - _incomplete_ 
---

## /1.js 

> incomplete 
>
> [review source](../../../exercises/14-increment-and-decrement/exercises/1.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/14-increment-and-decrement/exercises/1.js:6:22)
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

let x = 0;

let y = ++x;
console.assert(x === _, 'Test 1 x');
console.assert(y === _, 'Test 1 y');

x = y--;
console.assert(x === _, 'Test 2 x');
console.assert(y === _, 'Test 2 y');

let z = x++;
console.assert(x === _, 'Test 3 x');
console.assert(y === _, 'Test 3 y');
console.assert(z === _, 'Test 3 z');

y = --x;
console.assert(x === _, 'Test 4 x');
console.assert(y === _, 'Test 4 y');
console.assert(z === _, 'Test 4 z');

```

[TOP](#debuggercises)

---

## /2.js 

> incomplete 
>
> [review source](../../../exercises/14-increment-and-decrement/exercises/2.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/14-increment-and-decrement/exercises/2.js:6:22)
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

let x = 0;

let y = x--;
console.assert(x === _, 'Test 1 x');
console.assert(y === _, 'Test 1 y');

x = ++y;
console.assert(x === _, 'Test 2 x');
console.assert(y === _, 'Test 2 y');

let z = y++;
console.assert(x === _, 'Test 3 x');
console.assert(y === _, 'Test 3 y');
console.assert(z === _, 'Test 3 z');

x = --z;
console.assert(x === _, 'Test 4 x');
console.assert(y === _, 'Test 4 y');
console.assert(z === _, 'Test 4 z');

```

[TOP](#debuggercises)

---

## /3.js 

> incomplete 
>
> [review source](../../../exercises/14-increment-and-decrement/exercises/3.js)

```txt
+ PASS: Test 1 x
+ PASS: Test 1 y
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/14-increment-and-decrement/exercises/3.js:9:1)
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

let x = 0;

let y = x--;
console.assert(x === -1, 'Test 1 x');
console.assert(y === 0, 'Test 1 y');

x = _;
console.assert(x === 0, 'Test 2 x');
console.assert(y === -1, 'Test 2 y');

let z = _;
console.assert(x === 1, 'Test 3 x');
console.assert(y === -1, 'Test 3 y');
console.assert(z === 0, 'Test 3 z');

_ = --z;
console.assert(x === 1, 'Test 4 x');
console.assert(y === -1, 'Test 4 y');
console.assert(z === -1, 'Test 4 z');

```

[TOP](#debuggercises)

