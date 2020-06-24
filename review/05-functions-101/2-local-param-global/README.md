# Debuggercises 

> 6/24/2020, 5:04:07 PM 

## [exercises](../../README.md)/[05-functions-101](../README.md)/2-local-param-global 

- [/0-example.js](#0-examplejs)  
- [/1-parameter-local.js](#1-parameter-localjs) - _incomplete_ 
- [/2-parameter-global.js](#2-parameter-globaljs) - _incomplete_ 
- [/3-parameter-global.js](#3-parameter-globaljs) - _incomplete_ 
- [/4-local-global.js](#4-local-globaljs) - _incomplete_ 
- [/5-local-global.js](#5-local-globaljs) - _incomplete_ 
- [/6-parameter-local-global.js](#6-parameter-local-globaljs) - _incomplete_ 
- [/7-prameter-local-global.js](#7-prameter-local-globaljs) - _incomplete_ 
- [/extra-pure-functions.js](#extra-pure-functionsjs)  
---

## /0-example.js 

>  
>
> [review source](../../../exercises/05-functions-101/2-local-param-global/0-example.js)

```txt
LOG: 
-- Parameters ---
LOG: fromParams1:  hi, bye
LOG: fromParams2:  a, b
LOG: 
-- Local Variables ---
LOG: fromLocals1:  town, ship
LOG: fromLocals2:  town, ship
LOG: 
-- Global Variables ---
LOG: fromGlobals1:  a-, -
LOG: global1:  a-
LOG: global2:  -  

LOG: global1:  |
LOG: global2:  -|  

LOG: fromGlobals2:  |-, -
LOG: global1:  |-
LOG: global2:  -  

LOG: global1:  |-|
LOG: global2:  -|
```

```js
'use strict';

/* to understand function scope, you need to ask one simple question:

  - How did this variable get it's value?

  At this stage in your programming life there are 3 answers to this question

  PARAMETER: the variable got it's value as an argument when the function was called
  LOCAL: the variable was declared and assigned within the function body
  GLOBAL: the variable is not a parameter and was not declared locally
    - it's value comes from a variable declared outside of the function body
    - (avoid ever using global scope after these exercises :)

*/

console.log('\n-- Parameters ---');
//  all variables used inside this function's body are declared as parameters
//  the variables get their value from arguments when the function is called

const usesParameters = (param1, param2) => {
  return `${param1}, ${param2}`;
};

const fromParams1 = usesParameters('hi', 'bye');
console.log('fromParams1:', fromParams1);

const fromParams2 = usesParameters('a', 'b');
console.log('fromParams2:', fromParams2);


console.log('\n-- Local Variables ---');
//  all variables used inside this function's body are declared locally
//  the variables get their value from a local assignmnet

const usesLocals = () => {
  const local1 = 'town';
  const local2 = 'ship';
  return `${local1}, ${local2}`;
};

const fromLocals1 = usesLocals();
console.log('fromLocals1:', fromLocals1);

const fromLocals2 = usesLocals();
console.log('fromLocals2:', fromLocals2);


console.log('\n-- Global Variables ---');
//  all variables used inside this function's body are declared globally
//  the variables get their value from local and global assignments (confusing!)

const usesGlobals = () => {
  global1 = `${global1}-`;
  global2 = '-'
  return `${global1}, ${global2}`;
};

let global1 = 'a';
let global2 = 'b';

const fromGlobals1 = usesGlobals();
console.log('fromGlobals1:', fromGlobals1);
console.log('global1:', global1);
console.log('global2:', global2, '\n');

global1 = '|';
global2 = `${global2}|`;

console.log('global1:', global1);
console.log('global2:', global2, '\n');

const fromGlobals2 = usesGlobals();
console.log('fromGlobals2:', fromGlobals2);
console.log('global1:', global1);
console.log('global2:', global2, '\n');


global1 = `${global1}|`;
global2 = `${global2}|`;

console.log('global1:', global1);
console.log('global2:', global2);

```

[TOP](#debuggercises)

---

## /1-parameter-local.js 

> incomplete 
>
> [review source](../../../exercises/05-functions-101/2-local-param-global/1-parameter-local.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/05-functions-101/2-local-param-global/1-parameter-local.js:9:31)
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

const funk = (parameter) => {
  const local = `funky`;
  return `${local} ${parameter}`;
};

const funkReturn1 = funk('hello');
const funk1 = funkReturn1 === _;
console.assert(funk1, 'Test 1: funk');

const funkReturn2 = funk('boat');
const funk2 = funkReturn2 === _;
console.assert(funk2, 'Test 2: funk');

const funkReturn3 = funk('tree');
const funk3 = funkReturn3 === _;
console.assert(funk3, 'Test 3: funk');



const jazz = (parameter) => {
  const local = `jazzy`;
  return `${local} ${parameter}`;
};

const jazzReturn1 = jazz('hello');
const jazz1 = jazzReturn1 === _;
console.assert(jazz1, 'Test 1: jazz');

const jazzReturn2 = jazz('boat');
const jazz2 = jazzReturn2 === _;
console.assert(jazz2, 'Test 2: jazz');

const jazzReturn3 = jazz('tree');
const jazz3 = jazzReturn3 === _;
console.assert(jazz3, 'Test 3: jazz');

```

[TOP](#debuggercises)

---

## /2-parameter-global.js 

> incomplete 
>
> [review source](../../../exercises/05-functions-101/2-local-param-global/2-parameter-global.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/05-functions-101/2-local-param-global/2-parameter-global.js:20:31)
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

/* using global scope variables in your functions is a VERY BAD IDEA

  these exercises are here to help you understand different scopes
  not as a suggestion for how to write your code

  notice how complicated this exercise is?
  that's why you should only use parameters and local variables in your functions
*/

let global = '';

const funk = (parameter) => {
  global = `${global}funky`;
  return `${global} ${parameter}`;
};

const funkReturn1 = funk('hello');
const funk1 = funkReturn1 === _;
console.assert(funk1, 'Test 1: funk');

global = '#';

const funkReturn2 = funk('boat');
const funk2 = funkReturn2 === _;
console.assert(funk2, 'Test 2: funk');

global = `${global}!`;

const funkReturn3 = funk('tree');
const funk3 = funkReturn3 === _;
console.assert(funk3, 'Test 3: funk');


```

[TOP](#debuggercises)

---

## /3-parameter-global.js 

> incomplete 
>
> [review source](../../../exercises/05-functions-101/2-local-param-global/3-parameter-global.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/05-functions-101/2-local-param-global/3-parameter-global.js:11:31)
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

let global = '<3';

const jazz = (parameter) => {
  global = `${global} jazzy`;
  return `${global} ${parameter}`;
};

const jazzReturn1 = jazz('hello');
const jazz1 = jazzReturn1 === _;
console.assert(jazz1, 'Test 1: jazz');

global = `${global}!`;

const jazzReturn2 = jazz('boat');
const jazz2 = jazzReturn2 === _;
console.assert(jazz2, 'Test 2: jazz');

global = ':(';

const jazzReturn3 = jazz('tree');
const jazz3 = jazzReturn3 === _;
console.assert(jazz3, 'Test 3: jazz');

```

[TOP](#debuggercises)

---

## /4-local-global.js 

> incomplete 
>
> [review source](../../../exercises/05-functions-101/2-local-param-global/4-local-global.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/05-functions-101/2-local-param-global/4-local-global.js:12:35)
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

let global = 'awesome';

const funk = () => {
  const local = 'funky'
  global = `#${global}`;
  return `${local} ${global}`;
};

const funkReturn1 = funk();
const funkTest1 = funkReturn1 === _;
console.assert(funkTest1, 'Test 1: funk');

const globalTest1 = global === _;
console.assert(globalTest1, 'Test 2: global');

global = `${global}!`;

const globalTest2 = global === _;
console.assert(globalTest2, 'Test 3: global');

const funkReturn2 = funk();
const funkTest2 = funkReturn2 === _;
console.assert(funkTest2, 'Test 4: funk');

const globalTest3 = global === _;
console.assert(globalTest3, 'Test 5: global');

global = ':(';

const globalTest4 = global === _;
console.assert(globalTest4, 'Test 6: global');

const funkReturn3 = funk();
const funkTest3 = funkReturn3 === _;
console.assert(funkTest3, 'Test 7: funk');

const globalTest5 = global === _;
console.assert(globalTest5, 'Test 8: global');

global = 'bye!';

const globalTest6 = global === _;
console.assert(globalTest6, 'Test 9: global');

```

[TOP](#debuggercises)

---

## /5-local-global.js 

> incomplete 
>
> [review source](../../../exercises/05-functions-101/2-local-param-global/5-local-global.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/05-functions-101/2-local-param-global/5-local-global.js:12:35)
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

let global = 'turtle';

const jazz = () => {
  const local = 'jazzy'
  global = `${global}!`;
  return `${global} ${local}`;
};

const jazzReturn1 = jazz();
const jazzTest1 = jazzReturn1 === _;
console.assert(jazzTest1, 'Test 1: jazz');

const globalTest1 = global === _;
console.assert(globalTest1, 'Test 2: global');

global = `!`;

const globalTest2 = global === _;
console.assert(globalTest2, 'Test 3: global');

const jazzReturn2 = jazz();
const jazzTest2 = jazzReturn2 === _;
console.assert(jazzTest2, 'Test 4: jazz');

const globalTest3 = global === _;
console.assert(globalTest3, 'Test 5: global');

global = `_${global}_`;

const globalTest4 = global === _;
console.assert(globalTest4, 'Test 6: global');

const jazzReturn3 = jazz();
const jazzTest3 = jazzReturn3 === _;
console.assert(jazzTest3, 'Test 7: jazz');

const globalTest5 = global === _;
console.assert(globalTest5, 'Test 8: global');

global = `${global}. bye!`;

const globalTest6 = global === _;
console.assert(globalTest6, 'Test 9: global');

```

[TOP](#debuggercises)

---

## /6-parameter-local-global.js 

> incomplete 
>
> [review source](../../../exercises/05-functions-101/2-local-param-global/6-parameter-local-global.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/05-functions-101/2-local-param-global/6-parameter-local-global.js:11:32)
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

let global = '.';

const funk = (parameter) => {
  const local = `funky ${global}`;
  global = `${global} ${global}`;
  return `${parameter} ${local} ${global}`;
};

const globalTest1 = global === _;
console.assert(globalTest1, 'Test 1: global');

const funkReturn1 = funk('hello');
const funkTest1 = funkReturn1 === _;
console.assert(funkTest1, 'Test 2: funk');

const globalTest2 = global === _;
console.assert(globalTest2, 'Test 3: global');

global = `${global} hi`;

const globalTest3 = global === _;
console.assert(globalTest3, 'Test 4: global');

const funkReturn2 = funk('boat');
const funkTest2 = funkReturn2 === _;
console.assert(funkTest2, 'Test 5: funk');

const globalTest4 = global === _;
console.assert(globalTest4, 'Test 6: global');

global = `${global} bye.`;

const globalTest5 = global === _;
console.assert(globalTest5, 'Test 7: global');

```

[TOP](#debuggercises)

---

## /7-prameter-local-global.js 

> incomplete 
>
> [review source](../../../exercises/05-functions-101/2-local-param-global/7-prameter-local-global.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/05-functions-101/2-local-param-global/7-prameter-local-global.js:11:32)
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

let global = '.';

const jazz = (parameter) => {
  const local = `jazzy ${global}`;
  global = `#${global}`;
  return `${parameter} ${local} ${global}`;
};

const globalTest1 = global === _;
console.assert(globalTest1, 'Test 1: global');

const jazzReturn1 = jazz('hello');
const jazzTest1 = jazzReturn1 === _;
console.assert(jazzTest1, 'Test 2: jazz');

const globalTest2 = global === _;
console.assert(globalTest2, 'Test 3: global');

global = 'hi';

const globalTest3 = global === _;
console.assert(globalTest3, 'Test 4: global');

const jazzReturn2 = jazz('boat');
const jazzTest2 = jazzReturn2 === _;
console.assert(jazzTest2, 'Test 5: jazz');

const globalTest4 = global === _;
console.assert(globalTest4, 'Test 6: global');

global = 'bye.';

const globalTest5 = global === _;
console.assert(globalTest5, 'Test 7: global');

```

[TOP](#debuggercises)

---

## /extra-pure-functions.js 

>  
>
> [review source](../../../exercises/05-functions-101/2-local-param-global/extra-pure-functions.js)

```js
'use strict';

// PURE FUNCTIONS are a habit, not a language feature:
//  - only use LOCAL VARIABLES and PARAMETERS in your function body

// writing pure functions is easier to understand and debug
//  because their behavior is consistent
//  you'll get the same return value every time you use the same arguments

// you can even check if your function is pure without executing it!
// point at each variable inside the function body and ask
//  1. is this declared as a parameter?
//  2. is this declared in the body with let, const or var?
// if the answer to both functions is "no", it's not a pure function

// which of these are pure functions?

const a = () => {
  return x + y;
};

const b = (y) => {
  result = x + y;
  return result;
};

const c = (y, x) => {
  const m = y - x
  return x + m;
};

const d = (x, y) => {
  const a = 'hi';
  return x + y + z;
};

const e = (x, y) => {
  p += z;
  return z + y;
};

const f = (p) => {
  return p * 2;
};

```

[TOP](#debuggercises)

