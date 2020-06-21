# Debuggercises 

> 6/21/2020, 9:05:10 AM 

## [exercises](../../README.md)/[11-refactoring-conditionals](../README.md)/0-examples 

- [/0-statement-and-operator.js](#0-statement-and-operatorjs) - _error (syntax)_ 
- [/1-if-else.js](#1-if-elsejs) - _pass_ 
- [/2-if-else-if-else.js](#2-if-else-if-elsejs) - _pass_ 
- [/3-nested.js](#3-nestedjs) - _pass_ 
---

## /0-statement-and-operator.js 

> error (syntax) 
>
> [review source](../../../exercises/11-refactoring-conditionals/0-examples/0-statement-and-operator.js)

```txt
UNCAUGHT:   ...  /exercises/11-refactoring-conditionals/0-examples/0-statement-and-operator.js:35
const ifResult = if (value) {
                 ^^

SyntaxError: Unexpected token 'if'
    at wrapSafe (internal/modules/cjs/loader.js:1116:16)
    at Module._compile (internal/modules/cjs/loader.js:1164:27)
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

/* Conditional Statement vs Conditional Operator

  the conditional operator (ternary) is similar to the conditional statement (if, else)
  both evaluate the truthiness of an expressions to decide which path to execute
  but they aren't exactly the same!

  completely understanding the difference between statements and expressions is more advanced
  but understanding how to refactor conditionals and ternaries will give you a first intuition
  the differences to understand between if (_) {_} else {_} and _ ? _ : _

  1. if/else statements don't return a value
    writing a variable assignment to the left of an if statement will throw an error
  2. you can only write expressions inside of _ ? _ : _
    declaring a variable inside of a ternary will throw an error

  there is no right answer, neither is better.  they're just different
  here are some general rules of thumb for deciding which to use

  - use a conditional statement if (_) {_} else {_} when:
    there is more complicated multi-step logic to do in either condition
  - use a ternary operator _ ? _ : _ when:
    you could assign both paths directly to a variable with no extra steps

  the following examples and exercises should help to understand this difference
  as you study the examples, pay close attention to how many steps each function takes!

*/


// two things that don't work

const ifCondition = false;
const ifResult = if (value) {
  'truthy';
} else {
  'falsy';
}

const ternaryCondition = false;
ternaryCondition
  ? const ternaryResult = 'truthy'
  : const ternaryResult = 'falsy';

```

[TOP](#debuggercises)

---

## /1-if-else.js 

> pass 
>
> [review source](../../../exercises/11-refactoring-conditionals/0-examples/1-if-else.js)

```txt
+ PASS: Test 1: Statement
+ PASS: Test 1: Operator
+ PASS: Test 2: Statement
+ PASS: Test 2: Operator
+ PASS: Test 3: Statement
+ PASS: Test 3: Operator
+ PASS: Test 4: Statement
+ PASS: Test 4: Operator
```

```js
'use strict';

const statement = (a, b) => {
  let result = '';
  if (typeof a === typeof b) {
    result = 'path 1';
  } else {
    result = 'path 2';
  }
  return result;
};

const operator = (a, b) => {
  const result = typeof a === typeof b
    ? 'path 1'
    : 'path 2';
  return result;
};

// path 1

const _1_arg1 = true;
const _1_arg2 = false;
const _1_expect = 'path 1';
const _1_actualStatement = statement(_1_arg1, _1_arg2);
const _1_actualOperator = operator(_1_arg1, _1_arg2);
console.assert(_1_actualStatement === _1_expect, 'Test 1: Statement');
console.assert(_1_actualOperator === _1_expect, 'Test 1: Operator');

const _2_arg1 = 1;
const _2_arg2 = -1;
const _2_expect = 'path 1';
const _2_actualStatement = statement(_2_arg1, _2_arg2);
const _2_actualOperator = operator(_2_arg1, _2_arg2);
console.assert(_2_actualStatement === _2_expect, 'Test 2: Statement');
console.assert(_2_actualOperator === _2_expect, 'Test 2: Operator');

// path 2

const _3_arg1 = 'true';
const _3_arg2 = true;
const _3_expect = 'path 2';
const _3_actualStatement = statement(_3_arg1, _3_arg2);
const _3_actualOperator = operator(_3_arg1, _3_arg2);
console.assert(_3_actualStatement === _3_expect, 'Test 3: Statement');
console.assert(_3_actualOperator === _3_expect, 'Test 3: Operator');

const _4_arg1 = null;
const _4_arg2 = NaN;
const _4_expect = 'path 2';
const _4_actualStatement = statement(_4_arg1, _4_arg2);
const _4_actualOperator = operator(_4_arg1, _4_arg2);
console.assert(_4_actualStatement === _4_expect, 'Test 4: Statement');
console.assert(_4_actualOperator === _4_expect, 'Test 4: Operator');

```

[TOP](#debuggercises)

---

## /2-if-else-if-else.js 

> pass 
>
> [review source](../../../exercises/11-refactoring-conditionals/0-examples/2-if-else-if-else.js)

```txt
+ PASS: Test 1: Statement
+ PASS: Test 1: Operator
+ PASS: Test 2: Statement
+ PASS: Test 2: Operator
+ PASS: Test 3: Statement
+ PASS: Test 3: Operator
+ PASS: Test 4: Statement
+ PASS: Test 4: Operator
+ PASS: Test 5: Statement
+ PASS: Test 5: Operator
+ PASS: Test 6: Statement
+ PASS: Test 6: Operator
```

```js
'use strict';

const statement = (a, b) => {
  let result = '';
  if (a === b) {
    result = 'path 1';
  } else if (typeof a === typeof b) {
    result = 'path 2';
  } else {
    result = 'path 3';
  }
  return result;
};

const operator = (a, b) => {
  const result = a === b
    ? 'path 1'
    : typeof a === typeof b
      ? 'path 2'
      : 'path 3';
  return result;
};

// path 1

const _1_arg1 = null;
const _1_arg2 = null;
const _1_expect = 'path 1';
const _1_actualStatement = statement(_1_arg1, _1_arg2);
const _1_actualOperator = operator(_1_arg1, _1_arg2);
console.assert(_1_actualStatement === _1_expect, 'Test 1: Statement');
console.assert(_1_actualOperator === _1_expect, 'Test 1: Operator');

const _2_arg1 = 'elemeno';
const _2_arg2 = 'elemeno';
const _2_expect = 'path 1';
const _2_actualStatement = statement(_2_arg1, _2_arg2);
const _2_actualOperator = operator(_2_arg1, _2_arg2);
console.assert(_2_actualStatement === _2_expect, 'Test 2: Statement');
console.assert(_2_actualOperator === _2_expect, 'Test 2: Operator');

// path 2

const _3_arg1 = true;
const _3_arg2 = false;
const _3_expect = 'path 2';
const _3_actualStatement = statement(_3_arg1, _3_arg2);
const _3_actualOperator = operator(_3_arg1, _3_arg2);
console.assert(_3_actualStatement === _3_expect, 'Test 3: Statement');
console.assert(_3_actualOperator === _3_expect, 'Test 3: Operator');

const _4_arg1 = -1;
const _4_arg2 = 1;
const _4_expect = 'path 2';
const _4_actualStatement = statement(_4_arg1, _4_arg2);
const _4_actualOperator = operator(_4_arg1, _4_arg2);
console.assert(_4_actualStatement === _4_expect, 'Test 4: Statement');
console.assert(_4_actualOperator === _4_expect, 'Test 4: Operator');

// path 3

const _5_arg1 = 'true';
const _5_arg2 = true;
const _5_expect = 'path 3';
const _5_actualStatement = statement(_5_arg1, _5_arg2);
const _5_actualOperator = operator(_5_arg1, _5_arg2);
console.assert(_5_actualStatement === _5_expect, 'Test 5: Statement');
console.assert(_5_actualOperator === _5_expect, 'Test 5: Operator');

const _6_arg1 = null;
const _6_arg2 = NaN;
const _6_expect = 'path 3';
const _6_actualStatement = statement(_6_arg1, _6_arg2);
const _6_actualOperator = operator(_6_arg1, _6_arg2);
console.assert(_6_actualStatement === _6_expect, 'Test 6: Statement');
console.assert(_6_actualOperator === _6_expect, 'Test 6: Operator');

```

[TOP](#debuggercises)

---

## /3-nested.js 

> pass 
>
> [review source](../../../exercises/11-refactoring-conditionals/0-examples/3-nested.js)

```txt
+ PASS: Test 1: Statement
+ PASS: Test 1: Operator
+ PASS: Test 2: Statement
+ PASS: Test 2: Operator
+ PASS: Test 3: Statement
+ PASS: Test 3: Operator
+ PASS: Test 4: Statement
+ PASS: Test 4: Operator
+ PASS: Test 5: Statement
+ PASS: Test 5: Operator
+ PASS: Test 6: Statement
+ PASS: Test 6: Operator
+ PASS: Test 7: Statement
+ PASS: Test 7: Operator
+ PASS: Test 8: Statement
+ PASS: Test 8: Operator
```

```js
'use strict';

const statement = (a, b) => {
  let result = '';
  if (a) {
    if (b) {
      result = 'path 1';
    } else {
      result = 'path 2';
    }
  } else {
    if (b) {
      result = 'path 3';
    } else {
      result = 'path 4';
    }
  }
  return result;
};

const operator = (a, b) => {
  const result = a
    ? b
      ? 'path 1'
      : 'path 2'
    : b
      ? 'path 3'
      : 'path 4';
  return result;
};

// path 1

const _1_arg1 = true;
const _1_arg2 = 1;
const _1_expect = 'path 1';
const _1_actualStatement = statement(_1_arg1, _1_arg2);
const _1_actualOperator = operator(_1_arg1, _1_arg2);
console.assert(_1_actualStatement === _1_expect, 'Test 1: Statement');
console.assert(_1_actualOperator === _1_expect, 'Test 1: Operator');

const _2_arg1 = 'elemeno';
const _2_arg2 = 'onemele';
const _2_expect = 'path 1';
const _2_actualStatement = statement(_2_arg1, _2_arg2);
const _2_actualOperator = operator(_2_arg1, _2_arg2);
console.assert(_2_actualStatement === _2_expect, 'Test 2: Statement');
console.assert(_2_actualOperator === _2_expect, 'Test 2: Operator');

// path 2

const _3_arg1 = true;
const _3_arg2 = 0;
const _3_expect = 'path 2';
const _3_actualStatement = statement(_3_arg1, _3_arg2);
const _3_actualOperator = operator(_3_arg1, _3_arg2);
console.assert(_3_actualStatement === _3_expect, 'Test 3: Statement');
console.assert(_3_actualOperator === _3_expect, 'Test 3: Operator');

const _4_arg1 = 'hello';
const _4_arg2 = '';
const _4_expect = 'path 2';
const _4_actualStatement = statement(_4_arg1, _4_arg2);
const _4_actualOperator = operator(_4_arg1, _4_arg2);
console.assert(_4_actualStatement === _4_expect, 'Test 4: Statement');
console.assert(_4_actualOperator === _4_expect, 'Test 4: Operator');

// path 3

const _5_arg1 = '';
const _5_arg2 = true;
const _5_expect = 'path 3';
const _5_actualStatement = statement(_5_arg1, _5_arg2);
const _5_actualOperator = operator(_5_arg1, _5_arg2);
console.assert(_5_actualStatement === _5_expect, 'Test 5: Statement');
console.assert(_5_actualOperator === _5_expect, 'Test 5: Operator');

const _6_arg1 = null;
const _6_arg2 = 18;
const _6_expect = 'path 3';
const _6_actualStatement = statement(_6_arg1, _6_arg2);
const _6_actualOperator = operator(_6_arg1, _6_arg2);
console.assert(_6_actualStatement === _6_expect, 'Test 6: Statement');
console.assert(_6_actualOperator === _6_expect, 'Test 6: Operator');

// path 4

const _7_arg1 = '';
const _7_arg2 = null;
const _7_expect = 'path 4';
const _7_actualStatement = statement(_7_arg1, _7_arg2);
const _7_actualOperator = operator(_7_arg1, _7_arg2);
console.assert(_7_actualStatement === _7_expect, 'Test 7: Statement');
console.assert(_7_actualOperator === _7_expect, 'Test 7: Operator');

const _8_arg1 = false;
const _8_arg2 = 0;
const _8_expect = 'path 4';
const _8_actualStatement = statement(_8_arg1, _8_arg2);
const _8_actualOperator = operator(_8_arg1, _8_arg2);
console.assert(_8_actualStatement === _8_expect, 'Test 8: Statement');
console.assert(_8_actualOperator === _8_expect, 'Test 8: Operator');

```

[TOP](#debuggercises)

