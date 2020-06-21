# Debuggercises 

> 6/21/2020, 9:05:10 AM 

## [exercises](../../README.md)/[20-operator-precedence](../README.md)/2-variables 

- [/1-coercing-and-comparing.js](#1-coercing-and-comparingjs) - _incomplete_ 
- [/2-arithmetic.js](#2-arithmeticjs) - _pass_ 
- [/3-logical-operators.js](#3-logical-operatorsjs) - _pass_ 
- [/4-all-together.js](#4-all-togetherjs) - _pass_ 
- [/5-all-together.js](#5-all-togetherjs) - _pass_ 
---

## /1-coercing-and-comparing.js 

> incomplete 
>
> [review source](../../../exercises/20-operator-precedence/2-variables/1-coercing-and-comparing.js)

```txt
+ PASS: Step 0
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/20-operator-precedence/2-variables/1-coercing-and-comparing.js:17:15)
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

// write lots of comments!  explain your thinking at each step

const a = 'asdf';
const b = '14';

const expected = false;

// the original expression
const step0 = Boolean(a) !== Boolean(b);
console.assert(step0 === expected, 'Step 0');

/*

*/
const step1 = _;
console.assert(step1 === expected, 'Step 1');

/*

*/
const step2 = _;
console.assert(step2 === expected, 'Step 2');

/*

*/
const step3 = _;
console.assert(step3 === expected, 'Step 3');

```

[TOP](#debuggercises)

---

## /2-arithmetic.js 

> pass 
>
> [review source](../../../exercises/20-operator-precedence/2-variables/2-arithmetic.js)

```txt
+ PASS: Step 0
```

```js
'use strict';

// write lots of comments!  explain your thinking at each step

const a = true;
const b = 12;
const c = '12';

const expected = -1;

// the original expression
const step0 = -a / b * +c;
console.assert(step0 === expected, 'Step 0');

// how many steps are there?

```

[TOP](#debuggercises)

---

## /3-logical-operators.js 

> pass 
>
> [review source](../../../exercises/20-operator-precedence/2-variables/3-logical-operators.js)

```txt
+ PASS: Step 0
```

```js
'use strict';

// write lots of comments!  explain your thinking at each step

const a = null;
const b = 'null';

const expected = true;

// the original expression
const step0 = !!a || !!b;
console.assert(step0 === expected, 'Step 0');

// how many steps are there?


```

[TOP](#debuggercises)

---

## /4-all-together.js 

> pass 
>
> [review source](../../../exercises/20-operator-precedence/2-variables/4-all-together.js)

```txt
+ PASS: Step 0
```

```js
'use strict';

// write lots of comments!  explain your thinking at each step

const a = '';

const expected = false;

// the original expression
const step0 = typeof a == 'number' + +a;
console.assert(step0 === expected, 'Step 0');

// how many steps are there?


```

[TOP](#debuggercises)

---

## /5-all-together.js 

> pass 
>
> [review source](../../../exercises/20-operator-precedence/2-variables/5-all-together.js)

```txt
+ PASS: Step 0
```

```js
'use strict';

// write lots of comments!  explain your thinking at each step

const a = false;

const expected = true;

// the original expression
const step0 = !!+a == Boolean(Number(a));
console.assert(step0 === expected, 'Step 0');

// how many steps are there?


```

[TOP](#debuggercises)

