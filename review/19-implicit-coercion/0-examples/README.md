# Debuggercises 

> 6/21/2020, 9:05:10 AM 

## [exercises](../../README.md)/[19-implicit-coercion](../README.md)/0-examples 

- [/0-complicated-but-learnable.js](#0-complicated-but-learnablejs)  
- [/1-plus.js](#1-plusjs) - _pass_ 
- [/2-loose-equality.js](#2-loose-equalityjs) - _pass_ 
---

## /0-complicated-but-learnable.js 

>  
>
> [review source](../../../exercises/19-implicit-coercion/0-examples/0-complicated-but-learnable.js)

```txt
LOG:   +
LOG: string  23
LOG: string  23
LOG: number  5
LOG: number  4
LOG: string  true3
LOG:   ==
LOG: boolean  true
LOG: boolean  true
LOG: boolean  true
LOG: boolean  true
LOG: boolean  false
```

```js
'use strict';

/* Welcome to Implicit Coercion!

  this is among the most explained features of JS
  some developers like it, more developers don't
  sometimes it's helpful, usually it causes problems
  but it's not magic, you can learn it!

  The keys to understanding Implicit Coercion are
  0. pay attention to the type of every value in your program (!!!! always !!!!)
  1. understand the rules of explicit coercion (String(x), Number(x), Boolean(x), ...)
  2. learn the rules for how each JS operator coerces types "behind the scenes"

  Each operator has it's own rules for how it handles implicit coercion
  there are a lot of implicit coercion rules to learn
  but at the bottom of it all, implicit coercion is just that
  - rules you can study
  - rules you can learn

  Thinking of operators simply as built-in functions will help you to understand them

  How do you understand a function's behavior?
  - write test cases!
    the first set of exercises has you write test cases for JS operators

  How do you REALLY understand a function's behavior?
  - re-write it yourself!
    the second set of exercises has you write functions that behave the same as operators

  "What I cannot create, I do not understand." - Richard Feynman
*/

console.log('  +');

const _01_plus = '2' + 3;
console.log(typeof _01_plus, _01_plus);

const _02_plus = '2' + '3';
console.log(typeof _02_plus, _02_plus);

const _03_plus = 2 + 3;
console.log(typeof _03_plus, _03_plus);

const _04_plus = true + 3;
console.log(typeof _04_plus, _04_plus);

const _05_plus = true + '3';
console.log(typeof _05_plus, _05_plus);


console.log('  ==');

const _06_looseEquality = '3' == 3;
console.log(typeof _06_looseEquality, _06_looseEquality);

const _07_looseEquality = true == 1;
console.log(typeof _07_looseEquality, _07_looseEquality);

const _08_looseEquality = '0' == false;
console.log(typeof _08_looseEquality, _08_looseEquality);

const _09_looseEquality = null == undefined;
console.log(typeof _09_looseEquality, _09_looseEquality);

const _10_looseEquality = null == 0;
console.log(typeof _10_looseEquality, _10_looseEquality);

```

[TOP](#debuggercises)

---

## /1-plus.js 

> pass 
>
> [review source](../../../exercises/19-implicit-coercion/0-examples/1-plus.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
+ PASS: Test 5
+ PASS: Test 6
+ PASS: Test 7
+ PASS: Test 8
+ PASS: Test 9
+ PASS: Test 10
```

```js
'use strict';

/**
 * reproduces the behavior of (a + b) for primitive types
 * @param {any} a - the left operand
 * @param {any} b - the right operand
 * @returns {(string|number)}
 */
const plus = (a, b) => {
  let result;

  if (typeof a === "string" || typeof b === "string") {
    const aStr = String(a);
    const bStr = String(b);
    result = aStr + bStr;

  } else {
    const aNum = Number(a);
    const bNum = Number(b);
    result = aNum + bNum;

  }

  if (typeof result !== 'string' && typeof result !== 'number') { throw new TypeError(); }
  return result;
};

const _01_a = 1;
const _01_b = 2;
const _01_native = _01_a + _01_b;
const _01_copy = plus(_01_a, _01_b);
console.assert(_01_copy === _01_native, 'Test 1');

const _02_a = '1';
const _02_b = 2;
const _02_native = _02_a + _02_b;
const _02_copy = plus(_02_a, _02_b);
console.assert(_02_copy === _02_native, 'Test 2');

const _03_a = '1';
const _03_b = '2';
const _03_native = _03_a + _03_b;
const _03_copy = plus(_03_a, _03_b);
console.assert(_03_copy === _03_native, 'Test 3');

const _04_a = true;
const _04_b = 1;
const _04_native = _04_a + _04_b;
const _04_copy = plus(_04_a, _04_b);
console.assert(_04_copy === _04_native, 'Test 4');

const _05_a = true;
const _05_b = '1';
const _05_native = _05_a + _05_b;
const _05_copy = plus(_05_a, _05_b);
console.assert(_05_copy === _05_native, 'Test 5');

const _06_a = false;
const _06_b = 1;
const _06_native = _06_a + _06_b;
const _06_copy = plus(_06_a, _06_b);
console.assert(_06_copy === _06_native, 'Test 6');

const _07_a = false;
const _07_b = '1';
const _07_native = _07_a + _07_b;
const _07_copy = plus(_07_a, _07_b);
console.assert(_07_copy === _07_native, 'Test 7');

const _08_a = null;
const _08_b = 1;
const _08_native = _08_a + _08_b;
const _08_copy = plus(_08_a, _08_b);
console.assert(_08_copy === _08_native, 'Test 8');

const _09_a = undefined;
const _09_b = 1;
const _09_native = _09_a + _09_b;
const _09_copy = plus(_09_a, _09_b);
console.assert(Object.is(_09_copy, _09_native), 'Test 9');

const _10_a = null;
const _10_b = undefined;
const _10_native = _10_a + _10_b;
const _10_copy = plus(_10_a, _10_b);
console.assert(Object.is(_10_copy, _10_native), 'Test 10');


/*
  https://janke-learning.github.io/arithmetic-coercion/
*/

```

[TOP](#debuggercises)

---

## /2-loose-equality.js 

> pass 
>
> [review source](../../../exercises/19-implicit-coercion/0-examples/2-loose-equality.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
+ PASS: Test 5
+ PASS: Test 6
+ PASS: Test 7
+ PASS: Test 8
+ PASS: Test 9
+ PASS: Test 10
+ PASS: Test 11
+ PASS: Test 12
+ PASS: Test 13
+ PASS: Test 14
+ PASS: Test 15
```

```js
'use strict';

/**
 * compares primitive values according to the same rules as ==
 * see: https://dorey.github.io/JavaScript-Equality-Table/, https://eqeq.js.org/
 * @param {any} a - the left operand
 * @param {any} b - the right operand
 * @returns {boolean}
 */
const looseEquality = (a, b) => {
  let result;

  const aIsNullOrUnd = a === null || a === undefined;
  const bIsNullOrUnd = b === null || b === undefined;
  if (aIsNullOrUnd || bIsNullOrUnd) {
    result = aIsNullOrUnd && bIsNullOrUnd;

  } else if (typeof a === typeof b) {
    result = a === b;

  } else {
    const aNum = Number(a);
    const bNum = Number(b);
    result = aNum === bNum;
  }

  if (typeof result !== 'boolean') { throw new TypeError(); }
  return result;
};

const _01_a = null;
const _01_b = undefined;
const _01_native = _01_a == _01_b;
const _01_copy = looseEquality(_01_a, _01_b);
console.assert(_01_copy === _01_native, 'Test 1');

const _02_a = null;
const _02_b = null;
const _02_native = _02_a == _02_b;
const _02_copy = looseEquality(_02_a, _02_b);
console.assert(_02_copy === _02_native, 'Test 2');

const _03_a = undefined;
const _03_b = undefined;
const _03_native = _03_a == _03_b;
const _03_copy = looseEquality(_03_a, _03_b);
console.assert(_03_copy === _03_native, 'Test 3');

const _04_a = true;
const _04_b = 1;
const _04_native = _04_a == _04_b;
const _04_copy = looseEquality(_04_a, _04_b);
console.assert(_04_copy === _04_native, 'Test 4');

const _05_a = true;
const _05_b = '1';
const _05_native = _05_a == _05_b;
const _05_copy = looseEquality(_05_a, _05_b);
console.assert(_05_copy === _05_native, 'Test 5');

const _06_a = false;
const _06_b = 0;
const _06_native = _06_a == _06_b;
const _06_copy = looseEquality(_06_a, _06_b);
console.assert(_06_copy === _06_native, 'Test 6');

const _07_a = false;
const _07_b = '0';
const _07_native = _07_a == _07_b;
const _07_copy = looseEquality(_07_a, _07_b);
console.assert(_07_copy === _07_native, 'Test 7');

const _08_a = 1.0;
const _08_b = '1';
const _08_native = _08_a == _08_b;
const _08_copy = looseEquality(_08_a, _08_b);
console.assert(_08_copy === _08_native, 'Test 8');

const _09_a = -18;
const _09_b = '-18.0';
const _09_native = _09_a == _09_b;
const _09_copy = looseEquality(_09_a, _09_b);
console.assert(_09_copy === _09_native, 'Test 9');

const _10_a = 0;
const _10_b = '';
const _10_native = _10_a == _10_b;
const _10_copy = looseEquality(_10_a, _10_b);
console.assert(_10_copy === _10_native, 'Test 10');

const _11_a = false;
const _11_b = '';
const _11_native = _11_a == _11_b;
const _11_copy = looseEquality(_11_a, _11_b);
console.assert(_11_copy === _11_native, 'Test 11');

const _12_a = null;
const _12_b = '';
const _12_native = _12_a == _12_b;
const _12_copy = looseEquality(_12_a, _12_b);
console.assert(_12_copy === _12_native, 'Test 12');

const _13_a = undefined;
const _13_b = false;
const _13_native = _13_a == _13_b;
const _13_copy = looseEquality(_13_a, _13_b);
console.assert(_13_copy === _13_native, 'Test 13');

const _14_a = true;
const _14_b = '-1';
const _14_native = _14_a == _14_b;
const _14_copy = looseEquality(_14_a, _14_b);
console.assert(_14_copy === _14_native, 'Test 14');

const _15_a = NaN;
const _15_b = 'any other value';
const _15_native = _15_a == _15_b;
const _15_copy = looseEquality(_15_a, _15_b);
console.assert(_15_copy === _15_native, 'Test 15');


/*
  https://janke-learning.org/equalities-coercion/
  https://codeburst.io/javascript-double-equals-vs-triple-equals-61d4ce5a121a
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
*/

```

[TOP](#debuggercises)

