# Debuggercises 

> 7/19/2022, 6:25:55 PM 

## [exercises](../../README.md)/[09-block-scope](../README.md)/1-missing-values 

- [/1.js](#1js) - _incomplete_ 
- [/2.js](#2js) - _incomplete_ 
---

## /1.js 

> incomplete 
>
> [review source](../../../exercises/09-block-scope/1-missing-values/1.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/09-block-scope/1-missing-values/1.js:4:22)
    at Module._compile (internal/modules/cjs/loader.js:1085:14)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
    at Module.load (internal/modules/cjs/loader.js:950:32)
    at Function.Module._load (internal/modules/cjs/loader.js:790:12)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:101:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:28:7)
    at Object.<anonymous> (  ...  /scripts/review.js:119:1)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) 
```

```js
'use strict';

const a = 3;
console.assert(a === _, 'Test 1');
{
  const a = 5;
  console.assert(a === _, 'Test 2');
}
console.assert(a === _, 'Test 3');

```

[TOP](#debuggercises)

---

## /2.js 

> incomplete 
>
> [review source](../../../exercises/09-block-scope/1-missing-values/2.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/09-block-scope/1-missing-values/2.js:4:22)
    at Module._compile (internal/modules/cjs/loader.js:1085:14)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
    at Module.load (internal/modules/cjs/loader.js:950:32)
    at Function.Module._load (internal/modules/cjs/loader.js:790:12)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:101:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:28:7)
    at Object.<anonymous> (  ...  /scripts/review.js:119:1)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) 
```

```js
'use strict';

let x = 3;
console.assert(x === _, 'Test 1: x');
{
  x = 10;
  const y = 5;

  console.assert(x === _, 'Test 2: x');
  console.assert(y === _, 'Test 3: y');
}
console.assert(x === _, 'Test 4: x');

```

[TOP](#debuggercises)

