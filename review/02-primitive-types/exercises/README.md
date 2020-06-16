# Debuggercises 

## /exercises/02-primitive-types/exercises 

> 6/16/2020, 11:22:08 AM 

[../README.md](../README.md)

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
    at Module._compile (internal/modules/cjs/loader.js:1200:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1220:10)
    at Module.load (internal/modules/cjs/loader.js:1049:32)
    at Function.Module._load (internal/modules/cjs/loader.js:937:14)
    at Module.require (internal/modules/cjs/loader.js:1089:19)
    at require (internal/modules/cjs/helpers.js:73:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:12:7)
    at Object.<anonymous> (  ...  /scripts/review.js:106:1)
    at Module._compile (internal/modules/cjs/loader.js:1200:30) 
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

