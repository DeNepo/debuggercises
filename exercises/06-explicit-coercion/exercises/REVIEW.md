# Debuggercises 

## /exercises/06-explicit-coercion/exercises 

> 6/12/2020, 7:45:38 PM 

[../REVIEW.md](../REVIEW.md)

- [/1.js](#1js) - _error_ 
- [/2.js](#2js) - _error_ 
- [/3.js](#3js) - _fail_ 

---

## /1.js 

> error 
>
> [review source](./1.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/06-explicit-coercion/exercises/1.js:14:31)
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

function mystery(x) {
  if (typeof x === 'boolean') { throw new TypeError('x cannot be a boolean'); }

  const booleaned = Boolean(x);
  const numbered = Number(booleaned);
  return numbered;
}

// write the expected return value

const returned1 = mystery(undefined);
const isTrue1 = returned1 === _;
console.assert(isTrue1, 'Test 1');

const returned2 = mystery(null);
const isTrue2 = returned2 === _;
console.assert(isTrue2, 'Test 2');

const returned3 = mystery('false');
const isTrue3 = returned3 === _;
console.assert(isTrue3, 'Test 3');

const returned4 = mystery('');
const isTrue4 = returned4 === _;
console.assert(isTrue4, 'Test 4');

const returned5 = mystery(0);
const isTrue5 = returned5 === _;
console.assert(isTrue5, 'Test 5');

const returned6 = mystery('  ');
const isTrue6 = returned6 === _;
console.assert(isTrue6, 'Test 6');

const returned7 = mystery(-1);
const isTrue7 = returned7 === _;
console.assert(isTrue7, 'Test 7');

const returned8 = mystery(true);
const isTrue8 = returned8 === _;
console.assert(isTrue8, 'Test 8');

const returned9 = mystery(1);
const isTrue9 = returned9 === _;
console.assert(isTrue9, 'Test 9');


```

[TOP](#debuggercises)

---

## /2.js 

> error 
>
> [review source](./2.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/06-explicit-coercion/exercises/2.js:13:27)
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

function mystery(x) {
  if (typeof x === 'string') { throw new TypeError('x cannot be a string'); }

  const stringed = String(x);
  const numbered = Number(stringed);
  return numbered;
}

// find an argument to get the expected return value

const returned1 = mystery(_);
const isTrue1 = returned1 === -1;
console.assert(isTrue1, 'Test 1');

const returned2 = mystery(_);
const isTrue2 = returned2 === 0;
console.assert(isTrue2, 'Test 2');

const returned3 = mystery(_);
const isTrue3 = returned3 === 1;
console.assert(isTrue3, 'Test 3');

const returned4 = mystery(_);
const isTrue4 = returned4 === 0.5;
console.assert(isTrue4, 'Test 4');

const returned5 = mystery(_);
const isTrue5 = returned5 === 1000;
console.assert(isTrue5, 'Test 5');

const returned6 = mystery(_);
const isTrue6 = Number.isNaN(returned6);
console.assert(isTrue6, 'Test 6');

const returned7 = mystery(_);
const isTrue7 = Number.isNaN(returned7);
console.assert(isTrue7, 'Test 7');

const returned8 = mystery(_);
const isTrue8 = Number.isNaN(returned8);
console.assert(isTrue8, 'Test 8');

const returned9 = mystery(_);
const isTrue9 = Number.isNaN(returned9);
console.assert(isTrue9, 'Test 9');


```

[TOP](#debuggercises)

---

## /3.js 

> fail 
>
> [review source](./3.js)

```txt
- FAIL: Test 1
- FAIL: Test 2
- FAIL: Test 3
- FAIL: Test 4
- FAIL: Test 5
- FAIL: Test 6
- FAIL: Test 7
- FAIL: Test 8
- FAIL: Test 9
```

```js
'use strict';

/* write a function to pass the test cases
  it can be solved using only
   Number
   ===
*/
function mystery(x, y) {

}

// all of the test cases are correct

const returned1 = mystery('', '');
const isTrue1 = returned1 === true;
console.assert(isTrue1, 'Test 1');

const returned2 = mystery(false, null);
const isTrue2 = returned2 === true;
console.assert(isTrue2, 'Test 2');

const returned3 = mystery('asdf', 'asdf');
const isTrue3 = returned3 === false;
console.assert(isTrue3, 'Test 3');

const returned4 = mystery('1.0', '1');
const isTrue4 = returned4 === true;
console.assert(isTrue4, 'Test 4');

const returned5 = mystery(false, true);
const isTrue5 = returned5 === false;
console.assert(isTrue5, 'Test 5');

const returned6 = mystery('1.5', '1');
const isTrue6 = returned6 === false;
console.assert(isTrue6, 'Test 6');

const returned7 = mystery('1e3', '1000');
const isTrue7 = returned7 === true;
console.assert(isTrue7, 'Test 7');

const returned8 = mystery(false, '');
const isTrue8 = returned8 === true;
console.assert(isTrue8, 'Test 8');

const returned9 = mystery(undefined, undefined);
const isTrue9 = returned9 === false;
console.assert(isTrue9, 'Test 9');


```

[TOP](#debuggercises)

