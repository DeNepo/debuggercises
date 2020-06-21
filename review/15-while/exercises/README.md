# Debuggercises 

> 6/21/2020, 9:05:10 AM 

## [exercises](../../README.md)/[15-while](../README.md)/exercises 

- [/1-write-tests.js](#1-write-testsjs) - _incomplete_ 
- [/2-fix-the-bugs.js](#2-fix-the-bugsjs) - _error_ 
- [/3-pass-tests.js](#3-pass-testsjs) - _incomplete_ 
- [/4-pass-tests.js](#4-pass-testsjs) - _incomplete_ 
---

## /1-write-tests.js 

> incomplete 
>
> [review source](../../../exercises/15-while/exercises/1-write-tests.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/15-while/exercises/1-write-tests.js:26:19)
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

/**
 * among the greatest mysteries in the world, no one knows!
 * @param {number} x
 * @returns {number}
 */
const mystery = (x) => {
  if (typeof x !== 'number') { throw new TypeError('x'); }

  let result = 0;
  while (result !== x) {
    if (x > 0) {
      result += 1;
    } else {
      result += -1;
    }
  }

  if (typeof result !== 'number') { throw new TypeError('result'); }
  return result;
};


const _1_actual = mystery(-4);
const _1_expect = _;
console.assert(_1_actual === _1_expect, 'Test  1');

const _2_actual = mystery(_);
const _2_expect = -3;
console.assert(_2_actual === _2_expect, 'Test  2');

const _3_actual = mystery(_);
const _3_expect = -2;
console.assert(_3_actual === _3_expect, 'Test  3');

const _4_actual = mystery(-1);
const _4_expect = _;
console.assert(_4_actual === _4_expect, 'Test  4');

const _5_expect = _;
const _5_actual = mystery(0);
console.assert(_5_actual === _5_expect, 'Test  5');

const _6_expect = 1;
const _6_actual = mystery(_);
console.assert(_6_actual === _6_expect, 'Test  6');

const _7_expect = 2;
const _7_actual = mystery(_);
console.assert(_7_actual === _7_expect, 'Test  7');

const _8_expect = _;
const _8_actual = mystery(3);
console.assert(_8_actual === _8_expect, 'Test  8');

const _9_expect = _;
const _9_actual = mystery(4);
console.assert(_9_actual === _9_expect, 'Test  9');

```

[TOP](#debuggercises)

---

## /2-fix-the-bugs.js 

> error 
>
> [review source](../../../exercises/15-while/exercises/2-fix-the-bugs.js)

```txt
UNCAUGHT: TypeError: result
    at repeatLengthTimes (  ...  /exercises/15-while/exercises/2-fix-the-bugs.js:18:43)
    at Object.<anonymous> (  ...  /exercises/15-while/exercises/2-fix-the-bugs.js:24:19)
    at Module._compile (internal/modules/cjs/loader.js:1200:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1220:10)
    at Module.load (internal/modules/cjs/loader.js:1049:32)
    at Function.Module._load (internal/modules/cjs/loader.js:937:14)
    at Module.require (internal/modules/cjs/loader.js:1089:19)
    at require (internal/modules/cjs/helpers.js:73:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:28:7)
    at Object.<anonymous> (  ...  /scripts/review.js:119:1) 
```

```js
'use strict';

/**
 * repeat a string once for every character in the string
 * @param {string} toRepeat
 * @returns {string}
 */
const repeatLengthTimes = (toRepeat) => {
  if (typeof toRepeat !== 'string') { throw new TypeError('toRepeat'); }

  const finalResultLength = toRepeat.length * toRepeat.length;

  let result;
  while (result < finalResultLength) {
    result + toRepeat;
  }

  if (typeof result !== 'string') { throw new TypeError('result'); }
  return result;
};


const _1_expect = '3232';
const _1_actual = repeatLengthTimes('32');
console.assert(_1_actual === _1_expect, 'Test  1');

const _2_expect = '';
const _2_actual = repeatLengthTimes('');
console.assert(_2_actual === _2_expect, 'Test  2');

const _3_expect = '321321321';
const _3_actual = repeatLengthTimes('321');
console.assert(_3_actual === _3_expect, 'Test  3');

const _4_expect = '-<>--<>--<>--<>-';
const _4_actual = repeatLengthTimes('-<>-');
console.assert(_4_actual === _4_expect, 'Test  4');

const _5_expect = '.';
const _5_actual = repeatLengthTimes('.');
console.assert(_5_actual === _5_expect, 'Test  5');

const _6_expect = '5432154321543215432154321';
const _6_actual = repeatLengthTimes('54321');
console.assert(_6_actual === _6_expect, 'Test  6');


```

[TOP](#debuggercises)

---

## /3-pass-tests.js 

> incomplete 
>
> [review source](../../../exercises/15-while/exercises/3-pass-tests.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at repeater (  ...  /exercises/15-while/exercises/3-pass-tests.js:14:21)
    at Object.<anonymous> (  ...  /exercises/15-while/exercises/3-pass-tests.js:24:19)
    at Module._compile (internal/modules/cjs/loader.js:1200:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1220:10)
    at Module.load (internal/modules/cjs/loader.js:1049:32)
    at Function.Module._load (internal/modules/cjs/loader.js:937:14)
    at Module.require (internal/modules/cjs/loader.js:1089:19)
    at require (internal/modules/cjs/helpers.js:73:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:28:7)
    at Object.<anonymous> (  ...  /scripts/review.js:119:1) 
```

```js
'use strict';

/**
 * repeats a string, separated by spaces
 * each repetition is labeled with it's repetition number
 * @param {string} text - text to repeat
 * @param {number} repeats - number of times to repeat
 * @returns {string}
 */
const repeater = (text, repeats) => {
  if (typeof text !== 'string') { throw new TypeError('text'); }
  if (typeof repeats !== 'number') { throw new TypeError('repeats'); }

  while (_) {

  }

  if (typeof result !== 'string') { throw new TypeError('result'); }
  return result;
};


const _1_expect = '018 118 218 ';
const _1_actual = repeater('18', 3);
console.assert(_1_actual === _1_expect, 'Test  1');

const _2_expect = '0 1 2 ';
const _2_actual = repeater('', 3);
console.assert(_2_actual === _2_expect, 'Test  2');

const _3_expect = '';
const _3_actual = repeater('', 0);
console.assert(_3_actual === _3_expect, 'Test  3');

const _4_expect = '';
const _4_actual = repeater('asdf', 0);
console.assert(_4_actual === _4_expect, 'Test  4');

const _5_expect = '0_ 1_ ';
const _5_actual = repeater('_', 2);
console.assert(_5_actual === _5_expect, 'Test  5');

const _6_expect = '0-<=>- 1-<=>- 2-<=>- 3-<=>- ';
const _6_actual = repeater('-<=>-', 4);
console.assert(_6_actual === _6_expect, 'Test  6');


```

[TOP](#debuggercises)

---

## /4-pass-tests.js 

> incomplete 
>
> [review source](../../../exercises/15-while/exercises/4-pass-tests.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at alternator (  ...  /exercises/15-while/exercises/4-pass-tests.js:15:21)
    at Object.<anonymous> (  ...  /exercises/15-while/exercises/4-pass-tests.js:25:19)
    at Module._compile (internal/modules/cjs/loader.js:1200:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1220:10)
    at Module.load (internal/modules/cjs/loader.js:1049:32)
    at Function.Module._load (internal/modules/cjs/loader.js:937:14)
    at Module.require (internal/modules/cjs/loader.js:1089:19)
    at require (internal/modules/cjs/helpers.js:73:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:28:7)
    at Object.<anonymous> (  ...  /scripts/review.js:119:1) 
```

```js
'use strict';

/**
 * alternately appends str1 and str2 a given number of times
 * @param {number} range - the number of times to repeat
 * @param {string} str1 - the first string to alternate
 * @param {string} str2 - the second string to alternate
 * @returns {string}
 */
const alternator = (range, str1, str2) => {
  if (typeof range !== 'number') { throw new TypeError('range'); }
  if (typeof str1 !== 'string') { throw new TypeError('str1'); }
  if (typeof str2 !== 'string') { throw new TypeError('str2'); }

  while (_) {

  }

  if (typeof result !== 'string') { throw new TypeError('result'); }
  return result;
};


const _1_expect = '_-_';
const _1_actual = alternator(3, '_', '-');
console.assert(_1_actual === _1_expect, 'Test  1');

const _2_expect = '';
const _2_actual = alternator(0, 'x', 'y');
console.assert(_2_actual === _2_expect, 'Test  2');

const _3_expect = 'y';
const _3_actual = alternator(3, '', 'y');
console.assert(_3_actual === _3_expect, 'Test  3');

const _4_expect = 'xx';
const _4_actual = alternator(3, 'x', '');
console.assert(_4_actual === _4_expect, 'Test  4');

const _5_expect = '0:0:';
const _5_actual = alternator(4, '0', ':');
console.assert(_5_actual === _5_expect, 'Test  5');

const _6_expect = '#######';
const _6_actual = alternator(7, '#', '#');
console.assert(_6_actual === _6_expect, 'Test  6');



```

[TOP](#debuggercises)

