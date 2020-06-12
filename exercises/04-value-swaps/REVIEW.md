# Debuggercises 

## /exercises/04-value-swaps 

> 6/12/2020, 10:45:07 PM 

[../REVIEW.md](../REVIEW.md)

- [/1-double-swap.js](#1-double-swapjs) - _error_ 
- [/2-triple-swap.js](#2-triple-swapjs) - _error_ 
- [/3-triple-swap.js](#3-triple-swapjs) - _error_ 
- [/4-quadruple-swap.js](#4-quadruple-swapjs) - _error_ 
- [/5-quadruple-swap.js](#5-quadruple-swapjs) - _error_ 
- [/6-let-and-const.js](#6-let-and-constjs) - _error_ 
- [/7-let-and-const.js](#7-let-and-constjs) - _error_ 
- [/stepped-swap-example](./stepped-swap-example/REVIEW.md)
  - [/0-setup.js](./stepped-swap-example/REVIEW.md#0-setupjs) - _fail_ 
  - [/1-store-y.js](./stepped-swap-example/REVIEW.md#1-store-yjs) - _fail_ 
  - [/2-reassign-a.js](./stepped-swap-example/REVIEW.md#2-reassign-ajs) - _fail_ 
  - [/3-use-stored-y.js](./stepped-swap-example/REVIEW.md#3-use-stored-yjs) - _pass_ 

---

## /1-double-swap.js 

> error 
>
> [review source](./1-double-swap.js)

```txt
- FAIL: Test 1
- FAIL: Test 2
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/04-value-swaps/1-double-swap.js:19:26)
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

let a = 2;
let b = 1;
let temp = null;

// write some code!



// fill in the _ to pass the assertions

const isTrue1 = a === 1;
console.assert(isTrue1, 'Test 1');

const isTrue2 = b === 2;
console.assert(isTrue2, 'Test 2');

const isTrue3 = temp === _;
console.assert(isTrue3, 'Test 3');


```

[TOP](#debuggercises)

---

## /2-triple-swap.js 

> error 
>
> [review source](./2-triple-swap.js)

```txt
- FAIL: Test 1
- FAIL: Test 2
- FAIL: Test 3
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/04-value-swaps/2-triple-swap.js:23:26)
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

let a = 3;
let b = 1;
let c = 2;
let temp = null;

// write some code!



// fill in the _ to pass the assertions

const isTrue1 = a === 1;
console.assert(isTrue1, 'Test 1');

const isTrue2 = b === 2;
console.assert(isTrue2, 'Test 2');

const isTrue3 = c === 3;
console.assert(isTrue3, 'Test 3');

const isTrue4 = temp === _;
console.assert(isTrue4, 'Test 4');


```

[TOP](#debuggercises)

---

## /3-triple-swap.js 

> error 
>
> [review source](./3-triple-swap.js)

```txt
- FAIL: Test 1
- FAIL: Test 2
- FAIL: Test 3
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/04-value-swaps/3-triple-swap.js:23:26)
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

let a = 2;
let b = 3;
let c = 1;
let temp = null;

// write some code!



// fill in the _ to pass the assertions

const isTrue1 = a === 1;
console.assert(isTrue1, 'Test 1');

const isTrue2 = b === 2;
console.assert(isTrue2, 'Test 2');

const isTrue3 = c === 3;
console.assert(isTrue3, 'Test 3');

const isTrue4 = temp === _;
console.assert(isTrue4, 'Test 4');


```

[TOP](#debuggercises)

---

## /4-quadruple-swap.js 

> error 
>
> [review source](./4-quadruple-swap.js)

```txt
- FAIL: Test 1
- FAIL: Test 2
- FAIL: Test 3
- FAIL: Test 4
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/04-value-swaps/4-quadruple-swap.js:28:26)
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

let a = 3;
let b = 4;
let c = 1;
let d = 2;
let temp = null;

// write some code!




// fill in the _ to pass the final assertions

const isTrue1 = a === 1;
console.assert(isTrue1, 'Test 1');

const isTrue2 = b === 2;
console.assert(isTrue2, 'Test 2');

const isTrue3 = c === 3;
console.assert(isTrue3, 'Test 3');

const isTrue4 = d === 4;
console.assert(isTrue4, 'Test 4');

const isTrue5 = temp === _;
console.assert(isTrue5, 'Test 5');


```

[TOP](#debuggercises)

---

## /5-quadruple-swap.js 

> error 
>
> [review source](./5-quadruple-swap.js)

```txt
- FAIL: Test 1
- FAIL: Test 2
- FAIL: Test 3
- FAIL: Test 4
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/04-value-swaps/5-quadruple-swap.js:28:26)
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

let a = 3;
let b = 1;
let c = 4;
let d = 2;
let temp = null;

// write some code




// fill in the final _ to pass the assertions

const isTrue1 = a === 1;
console.assert(isTrue1, 'Test 1');

const isTrue2 = b === 2;
console.assert(isTrue2, 'Test 2');

const isTrue3 = c === 3;
console.assert(isTrue3, 'Test 3');

const isTrue4 = d === 4;
console.assert(isTrue4, 'Test 4');

const isTrue5 = temp === _;
console.assert(isTrue5, 'Test 5');


```

[TOP](#debuggercises)

---

## /6-let-and-const.js 

> error 
>
> [review source](./6-let-and-const.js)

```txt
- FAIL: Test 1
- FAIL: Test 2
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/04-value-swaps/6-let-and-const.js:27:23)
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

// write code to pass asserts a and b
// fill in the blanks for c and temp

// leave this code as it is
let a = 2;
let b = 1;
let temp = null;

temp = a;
const c = temp;

// write your code below here, and above the assertions




// replace the _ with a value to pass the assertions

const isTrue1 = a === 1;
console.assert(isTrue1, "Test 1");

const isTrue2 = b === 2;
console.assert(isTrue2, "Test 2");

const isTrue3 = c === _;
console.assert(isTrue3, "Test 3");

const isTrue4 = temp === _;
console.assert(isTrue4, "Test 4");


```

[TOP](#debuggercises)

---

## /7-let-and-const.js 

> error 
>
> [review source](./7-let-and-const.js)

```txt
- FAIL: Test 1
- FAIL: Test 2
- FAIL: Test 3
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/04-value-swaps/7-let-and-const.js:31:23)
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

// write code to pass asserts a, b, c
// fill in the blanks for d and temp

// leave this code as it is
let a = 2;
let b = 3;
let c = 1;
let temp = null;

temp = a;
a = b;
const d = a;
// write your code below here




// fill in in the _'s to pass the final assertions

const isTrue1 = a === 1;
console.assert(isTrue1, 'Test 1');

const isTrue2 = b === 2;
console.assert(isTrue2, 'Test 2');

const isTrue3 = c === 3;
console.assert(isTrue3, 'Test 3');

const isTrue4 = d === _;
console.assert(isTrue4, 'Test 4');

const isTrue5 = temp === _;
console.assert(isTrue5, 'Test 5');


```

[TOP](#debuggercises)

