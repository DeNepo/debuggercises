# Debuggercises 

## /exercises/08-block-scope/3-assign-values 

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
    at Object.<anonymous> (  ...  /exercises/08-block-scope/3-assign-values/1.js:3:11)
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

const a = _;
console.assert(a === '12', 'Test 1');
{
  const a = _;
  console.assert(a === true, 'Test 2');
}
console.assert(a === '12', 'Test 3');

```

[TOP](#debuggercises)

---

## /2.js 

> error 
>
> [review source](./2.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/08-block-scope/3-assign-values/2.js:3:9)
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

let x = _;
console.assert(x === null, 'Test 1: x');
{
  x = _;
  const y = _;

  console.assert(x === false, 'Test 2: x');
  console.assert(y === null, 'Test 3: y');
}
console.assert(x === false, 'Test 4: x');

```

[TOP](#debuggercises)

---

## /3.js 

> error 
>
> [review source](./3.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/08-block-scope/3-assign-values/3.js:3:9)
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

let m = _;
console.assert(m === 'tall', 'Test 1: m');
{
  let l = _;
  const m = _;
  l = _;
  console.assert(m === 'short', 'Test 2: m');
  console.assert(l === 'mini', 'Test 3: l');
}
m = _;
console.assert(m === 'medium', 'Test 4: m');

```

[TOP](#debuggercises)

