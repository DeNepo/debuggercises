# undefined 

> 6/19/2020, 12:47:28 AM 

## [exercises](../../README.md)/[04-value-swaps](../README.md)/example-swap-in-steps 

- [/0-setup.js](#0-setupjs) - _fail_ 
- [/1-store-y.js](#1-store-yjs) - _fail_ 
- [/2-reassign-a.js](#2-reassign-ajs) - _fail_ 
- [/3-use-stored-y.js](#3-use-stored-yjs) - _pass_ 
---

## /0-setup.js 

> fail 
>
> [review source](../../../exercises/04-value-swaps/example-swap-in-steps/0-setup.js)

```txt
- FAIL: Test 1
- FAIL: Test 2
- FAIL: Test 3
```

```js
'use strict';

// this file shows the initial swap exercise
//  before you have written any code

// declare & assign variables
let a = "y";
let b = "x";
let temp = null;

// swap the values stored by a and b ...


// assert expected values

const isTrue1 = a === "x";
console.assert(isTrue1, "Test 1");

const isTrue2 = b === "y";
console.assert(isTrue2, "Test 2");

const isTrue3 = temp === "y";
console.assert(isTrue3, "Test 3");

```

[TOP](#debuggercises)

---

## /1-store-y.js 

> fail 
>
> [review source](../../../exercises/04-value-swaps/example-swap-in-steps/1-store-y.js)

```txt
- FAIL: Test 1
- FAIL: Test 2
+ PASS: Test 3
```

```js
'use strict';

// this file shows the first line of code to write

// declare & assign variables
let a = "y";
let b = "x";
let temp = null;

// swap the values stored by a and b ...
temp = a;


// assert expected values

const isTrue1 = a === "x";
console.assert(isTrue1, "Test 1");

const isTrue2 = b === "y";
console.assert(isTrue2, "Test 2");

const isTrue3 = temp === "y";
console.assert(isTrue3, "Test 3");

```

[TOP](#debuggercises)

---

## /2-reassign-a.js 

> fail 
>
> [review source](../../../exercises/04-value-swaps/example-swap-in-steps/2-reassign-a.js)

```txt
+ PASS: Test 1
- FAIL: Test 2
+ PASS: Test 3
```

```js
'use strict';

// this file shows the second line of code to write

// declare & assign variables
let a = "y";
let b = "x";
let temp = null;

// swap the values stored by a and b ...
temp = a;
a = b;


// assert expected values

const isTrue1 = a === "x";
console.assert(isTrue1, "Test 1");

const isTrue2 = b === "y";
console.assert(isTrue2, "Test 2");

const isTrue3 = temp === "y";
console.assert(isTrue3, "Test 3");

```

[TOP](#debuggercises)

---

## /3-use-stored-y.js 

> pass 
>
> [review source](../../../exercises/04-value-swaps/example-swap-in-steps/3-use-stored-y.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
```

```js
'use strict';

// this file shows the final line of code, with all tests passing

// declare & assign variables
let a = "y";
let b = "x";
let temp = null;

// swap the values stored by a and b ...
temp = a;
a = b;
b = temp;


// assert expected values

const isTrue1 = a === "x";
console.assert(isTrue1, "Test 1");

const isTrue2 = b === "y";
console.assert(isTrue2, "Test 2");

const isTrue3 = temp === "y";
console.assert(isTrue3, "Test 3");

```

[TOP](#debuggercises)

