# Debuggercises 

## /exercises/08-block-scope/4-declare-and-assign 

> 6/12/2020, 10:45:07 PM 

[../REVIEW.md](../REVIEW.md)

- [/1.js](#1js) - _error_ 
- [/2.js](#2js) - _error_ 
- [/3.js](#3js) - _error_ 

---

## /1.js 

> error 
>
> [review source](./1.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/08-block-scope/4-declare-and-assign/1.js:3:1)
    at Module._compile (internal/modules/cjs/loader.js:1200:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1220:10)
    at Module.load (internal/modules/cjs/loader.js:1049:32)
    at Function.Module._load (internal/modules/cjs/loader.js:937:14)
    at Module.require (internal/modules/cjs/loader.js:1089:19)
    at require (internal/modules/cjs/helpers.js:73:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:12:7)
    at Object.<anonymous> (  ...  /scripts/review.js:72:1)
    at Module._compile (internal/modules/cjs/loader.js:1200:30) 
```

```js
'use strict';

_;
console.assert(a === false, 'Test 1');
{
  _;
  console.assert(a === null, 'Test 2');
}
console.assert(a === false, 'Test 3');

```

[TOP](#debuggercises)

---

## /2.js 

> error 
>
> [review source](./2.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/08-block-scope/4-declare-and-assign/2.js:3:1)
    at Module._compile (internal/modules/cjs/loader.js:1200:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1220:10)
    at Module.load (internal/modules/cjs/loader.js:1049:32)
    at Function.Module._load (internal/modules/cjs/loader.js:937:14)
    at Module.require (internal/modules/cjs/loader.js:1089:19)
    at require (internal/modules/cjs/helpers.js:73:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:12:7)
    at Object.<anonymous> (  ...  /scripts/review.js:72:1)
    at Module._compile (internal/modules/cjs/loader.js:1200:30) 
```

```js
'use strict';

_;
console.assert(x === 'hi!', 'Test 1: x');
{
  _;
  _;

  console.assert(x === 'bye!', 'Test 2: x');
  console.assert(y === 'hi!', 'Test 3: y');
}
console.assert(x === 'bye!', 'Test 4: x');

```

[TOP](#debuggercises)

---

## /3.js 

> error 
>
> [review source](./3.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/08-block-scope/4-declare-and-assign/3.js:3:1)
    at Module._compile (internal/modules/cjs/loader.js:1200:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1220:10)
    at Module.load (internal/modules/cjs/loader.js:1049:32)
    at Function.Module._load (internal/modules/cjs/loader.js:937:14)
    at Module.require (internal/modules/cjs/loader.js:1089:19)
    at require (internal/modules/cjs/helpers.js:73:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:12:7)
    at Object.<anonymous> (  ...  /scripts/review.js:72:1)
    at Module._compile (internal/modules/cjs/loader.js:1200:30) 
```

```js
'use strict';

_;
console.assert(m === 1, 'Test 1: m');
{
  _;
  _;
  console.assert(m === 2, 'Test 2: m');
  console.assert(l === 3, 'Test 3: l');
}
_;
console.assert(m === 4, 'Test 4: m');

```

[TOP](#debuggercises)

