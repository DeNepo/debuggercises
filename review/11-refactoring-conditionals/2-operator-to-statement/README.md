# Debuggercises 

> 6/21/2020, 9:05:10 AM 

## [exercises](../../README.md)/[11-refactoring-conditionals](../README.md)/2-operator-to-statement 

- [/1-if-else.js](#1-if-elsejs) - _pass_ 
- [/2-if-else-if-else.js](#2-if-else-if-elsejs) - _pass_ 
- [/3-nested.js](#3-nestedjs) - _pass_ 
---

## /1-if-else.js 

> pass 
>
> [review source](../../../exercises/11-refactoring-conditionals/2-operator-to-statement/1-if-else.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
```

```js
'use strict';

// refactor this function ot use if/else statements
const conditional = (a, b) => {
  const result = typeof a === 'boolean'
    ? !a
    : b;
  return result;
};

// path 1
const _1_expect = true;
const _1_actual = conditional(false, 'x');
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = false;
const _2_actual = conditional(true, null);
console.assert(_2_actual === _2_expect, 'Test 2');

// path 2
const _5_expect = 12;
const _5_actual = conditional(NaN, 12);
console.assert(_5_actual === _5_expect, 'Test 3');

const _6_expect = 'bye';
const _6_actual = conditional('hi!', 'bye');
console.assert(_6_actual === _6_expect, 'Test 4');

```

[TOP](#debuggercises)

---

## /2-if-else-if-else.js 

> pass 
>
> [review source](../../../exercises/11-refactoring-conditionals/2-operator-to-statement/2-if-else-if-else.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
+ PASS: Test 5
+ PASS: Test 6
```

```js
'use strict';

// refactor this function ot use if/else statements
const conditional = (a, b) => {
  const result = !a && !b
    ? a
    : a && b
      ? b
      : typeof a;
  return result;
};

// path 1
const _1_expect = 0;
const _1_actual = conditional(0, false);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = '';
const _2_actual = conditional('', null);
console.assert(_2_actual === _2_expect, 'Test 2');

// path 2
const _3_expect = 100;
const _3_actual = conditional(true, 100);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 12;
const _4_actual = conditional(-12, 12);
console.assert(_4_actual === _4_expect, 'Test 4');

// path 3
const _5_expect = 'boolean';
const _5_actual = conditional(false, true);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = 'number';
const _6_actual = conditional(100, false);
console.assert(_6_actual === _6_expect, 'Test 6');

```

[TOP](#debuggercises)

---

## /3-nested.js 

> pass 
>
> [review source](../../../exercises/11-refactoring-conditionals/2-operator-to-statement/3-nested.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
+ PASS: Test 5
+ PASS: Test 6
+ PASS: Test 7
+ PASS: Test 8
```

```js
'use strict';

const conditional = (a, b) => {
  const result = typeof a === 'boolean'
    ? a === b
      ? a
      : typeof b
    : typeof b === 'boolean'
      ? b
      : typeof a;
  return result;
};

// path 1
const _1_expect = true;
const _1_actual = conditional(true, true);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = false;
const _2_actual = conditional(false, false);
console.assert(_2_actual === _2_expect, 'Test 2');

// path 2
const _3_expect = 'object';
const _3_actual = conditional(true, null);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 'string';
const _4_actual = conditional(false, 'hello!');
console.assert(_4_actual === _4_expect, 'Test 4');

// path 3
const _5_expect = true;
const _5_actual = conditional('true', true);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = false;
const _6_actual = conditional('false', false);
console.assert(_6_actual === _6_expect, 'Test 6');

// path 4
const _7_expect = 'string';
const _7_actual = conditional('hello', 100);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = 'undefined';
const _8_actual = conditional(undefined, null);
console.assert(_8_actual === _8_expect, 'Test 8');

```

[TOP](#debuggercises)

