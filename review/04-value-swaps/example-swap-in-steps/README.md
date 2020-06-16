# Debuggercises 

## /exercises/04-value-swaps/example-swap-in-steps 

> 6/16/2020, 11:22:08 AM 

[../README.md](../README.md)

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

