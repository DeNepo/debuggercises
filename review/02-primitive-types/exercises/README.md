# Debuggercises 

> 7/19/2022, 6:25:55 PM 

## [exercises](../../README.md)/[02-primitive-types](../README.md)/exercises 

- [/fill-in-the-type.js](#fill-in-the-typejs) - _incomplete_ 
---

## /fill-in-the-type.js 

> incomplete 
>
> [review source](../../../exercises/02-primitive-types/exercises/fill-in-the-type.js)

```txt
LOG: -- example --
LOG: object  null
LOG: object  null
LOG: -- challenge1 --
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/02-primitive-types/exercises/fill-in-the-type.js:14:13)
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

// replace the _'s to complete the challenges
//  you know it's right when your log matches the one below it


console.log('-- example --');
const example = null;
console.log('object', null);
console.log(typeof example, example);

console.log('-- challenge1 --');
const challenge1 = 'undefined';
console.log(_, _);
console.log(typeof challenge1, challenge1);

console.log('-- challenge2 --');
const challenge2 = Infinity;
console.log(_, _);
console.log(typeof challenge2, challenge2);

console.log('-- challenge3 --');
const challenge3 = 4;
console.log(_, _);
console.log(typeof challenge3, challenge3);

console.log('-- challenge4 --');
const challenge4 = '4';
console.log(_, _);
console.log(typeof challenge4, challenge4);

console.log('-- challenge5 --');
const challenge5 = (typeof (typeof false));
console.log(_, _);
console.log(typeof challenge5, challenge5);


```

[TOP](#debuggercises)

