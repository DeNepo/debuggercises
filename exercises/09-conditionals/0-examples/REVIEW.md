# Debuggercises 

## /exercises/09-conditionals/0-examples 

> 6/12/2020, 9:44:15 PM 

[../REVIEW.md](../REVIEW.md)

- [/1-if-else.js](#1-if-elsejs) - _pass_ 
- [/2-if-else-if-else.js](#2-if-else-if-elsejs) - _pass_ 
- [/3-sequential-conditionals.js](#3-sequential-conditionalsjs) - _pass_ 
- [/4-nested-conditionals.js](#4-nested-conditionalsjs) - _pass_ 
- [/5-unreachable-paths.js](#5-unreachable-pathsjs) - _pass_ 

---

## /1-if-else.js 

> pass 
>
> [review source](./1-if-else.js)

```txt
+ PASS: Test 1: path 1
+ PASS: Test 2: path 1
+ PASS: Test 3: path 1
+ PASS: Test 4: path 2
+ PASS: Test 5: path 2
+ PASS: Test 6: path 2
+ PASS: Test 7: path 2
+ PASS: Test 8: path 2
```

```js
'use strict';

// conditionals decide which path to execute based on truthiness

function truthinessDecides(value) {
  let result = '';
  if (value) {
    result = 'path 1: truthy';
  } else {
    result = 'path 2: falsy';
  }
  return result;
}

const result1 = truthinessDecides(1);
const isTrue1 = result1 === 'path 1: truthy';
console.assert(isTrue1, 'Test 1: path 1');

const result2 = truthinessDecides('hi!');
const isTrue2 = result2 === 'path 1: truthy';
console.assert(isTrue2, 'Test 2: path 1');

const result3 = truthinessDecides(true);
const isTrue3 = result3 === 'path 1: truthy';
console.assert(isTrue3, 'Test 3: path 1');

const result4 = truthinessDecides(0);
const isTrue4 = result4 === 'path 2: falsy';
console.assert(isTrue4, 'Test 4: path 2');

const result5 = truthinessDecides('');
const isTrue5 = result5 === 'path 2: falsy';
console.assert(isTrue5, 'Test 5: path 2');

const result6 = truthinessDecides(false);
const isTrue6 = result6 === 'path 2: falsy';
console.assert(isTrue6, 'Test 6: path 2');

const result7 = truthinessDecides(null);
const isTrue7 = result7 === 'path 2: falsy';
console.assert(isTrue7, 'Test 7: path 2');

const result8 = truthinessDecides(undefined);
const isTrue8 = result8 === 'path 2: falsy';
console.assert(isTrue8, 'Test 8: path 2');

```

[TOP](#debuggercises)

---

## /2-if-else-if-else.js 

> pass 
>
> [review source](./2-if-else-if-else.js)

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
```

```js
'use strict';

// if () {} else if () {} else {}
//  create more than 2 possible paths
//  it's impossible to execute more than one of these paths

function sameness(val1, val2) {
  let result = '';
  if (val1 === val2) {
    result = 'strictly equal';
  } else if (typeof val1 === typeof val2) {
    result = 'same type';
  } else {
    result = 'totally different';
  }
  return result;
}

const result1 = sameness(1, 1);
const isTrue1 = result1 === 'strictly equal';
console.assert(isTrue1, 'Test 1');

const result2 = sameness('hello', 'hello');
const isTrue2 = result2 === 'strictly equal';
console.assert(isTrue2, 'Test 2');

const result3 = sameness(null, null);
const isTrue3 = result3 === 'strictly equal';
console.assert(isTrue3, 'Test 3');

const result4 = sameness(12, 21);
const isTrue4 = result4 === 'same type';
console.assert(isTrue4, 'Test 4');

const result5 = sameness(true, false);
const isTrue5 = result5 === 'same type';
console.assert(isTrue5, 'Test 5');

const result6 = sameness('hello', 'goodbye');
const isTrue6 = result6 === 'same type';
console.assert(isTrue6, 'Test 6');

const result7 = sameness(null, true);
const isTrue7 = result7 === 'totally different';
console.assert(isTrue7, 'Test 7');

const result8 = sameness(':(', 0);
const isTrue8 = result8 === 'totally different';
console.assert(isTrue8, 'Test 8');

const result9 = sameness(false, -1);
const isTrue9 = result9 === 'totally different';
console.assert(isTrue9, 'Test 9');

```

[TOP](#debuggercises)

---

## /3-sequential-conditionals.js 

> pass 
>
> [review source](./3-sequential-conditionals.js)

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

// writing one conditional after another will evaluate both conditionals
//  there are four possible paths
//  both conditionals will always execute

function describeIt(value) {
  let result = '';

  if (value) {
    result += 'truthy';
  } else {
    result += 'falsy';
  }

  if (typeof value === 'number') {
    result += ' number';
  } else {
    result += ' not-number';
  }

  return result;
}

const result1 = describeIt(1);
const isTrue1 = result1 === 'truthy number';
console.assert(isTrue1, 'Test 1');

const result2 = describeIt(-1);
const isTrue2 = result2 === 'truthy number';
console.assert(isTrue2, 'Test 2');

const result3 = describeIt(true);
const isTrue3 = result3 === 'truthy not-number';
console.assert(isTrue3, 'Test 3');

const result4 = describeIt('hello');
const isTrue4 = result4 === 'truthy not-number';
console.assert(isTrue4, 'Test 4');

const result5 = describeIt(0);
const isTrue5 = result5 === 'falsy number';
console.assert(isTrue5, 'Test 5');

const result6 = describeIt(NaN);
const isTrue6 = result6 === 'falsy number';
console.assert(isTrue6, 'Test 6');

const result7 = describeIt(null);
const isTrue7 = result7 === 'falsy not-number';
console.assert(isTrue7, 'Test 7');

const result8 = describeIt(false);
const isTrue8 = result8 === 'falsy not-number';
console.assert(isTrue8, 'Test 8');

```

[TOP](#debuggercises)

---

## /4-nested-conditionals.js 

> pass 
>
> [review source](./4-nested-conditionals.js)

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

// nesting conditionals is also possible
//  there are four possible paths
//  and 3 conditional statements, but only 2 will ever execute!

function nestedConditionals(a, b, c) {
  let result = '';

  if (a) {
    if (b) {
      result = 'a: truthy, b: truthy';
    } else {
      result = 'a: truthy, b: falsy';
    }
  } else {
    if (c) {
      result = 'a: falsy, c: truthy';
    } else {
      result = 'a: falsy, c: falsy';
    }
  }

  return result;
}


const result1 = nestedConditionals(true, true, true);
const isTrue1 = result1 === 'a: truthy, b: truthy';
console.assert(isTrue1, 'Test 1');

const result2 = nestedConditionals(true, true, false);
const isTrue2 = result2 === 'a: truthy, b: truthy';
console.assert(isTrue2, 'Test 2');

const result3 = nestedConditionals(true, false, true);
const isTrue3 = result3 === 'a: truthy, b: falsy';
console.assert(isTrue3, 'Test 3');

const result4 = nestedConditionals(true, false, false);
const isTrue4 = result4 === 'a: truthy, b: falsy';
console.assert(isTrue4, 'Test 4');

const result5 = nestedConditionals(false, true, true);
const isTrue5 = result5 === 'a: falsy, c: truthy';
console.assert(isTrue5, 'Test 5');

const result6 = nestedConditionals(false, false, true);
const isTrue6 = result6 === 'a: falsy, c: truthy';
console.assert(isTrue6, 'Test 6');

const result7 = nestedConditionals(false, true, false);
const isTrue7 = result7 === 'a: falsy, c: falsy';
console.assert(isTrue7, 'Test 7');

const result8 = nestedConditionals(false, false, false);
const isTrue8 = result8 === 'a: falsy, c: falsy';
console.assert(isTrue8, 'Test 8');

```

[TOP](#debuggercises)

---

## /5-unreachable-paths.js 

> pass 
>
> [review source](./5-unreachable-paths.js)

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

// it's possible to write conditionals paths that can never happen!
//  keep an eye out for this, it can cause bugs and makes your code hard to understand

function impossibleElse(value) {
  let result = '';
  if (value || !value) {
    result = 'path 1: truthy or falsy';
  } else {
    result = 'path 2: unreachable!';
  }
  return result;
}

const result1 = impossibleElse(1);
const isTrue1 = result1 === 'path 1: truthy or falsy';
console.assert(isTrue1, 'Test 1');

const result2 = impossibleElse('hi!');
const isTrue2 = result2 === 'path 1: truthy or falsy';
console.assert(isTrue2, 'Test 2');

const result3 = impossibleElse(true);
const isTrue3 = result3 === 'path 1: truthy or falsy';
console.assert(isTrue3, 'Test 3');

const result4 = impossibleElse(0);
const isTrue4 = result4 === 'path 1: truthy or falsy';
console.assert(isTrue4, 'Test 4');

const result5 = impossibleElse('');
const isTrue5 = result5 === 'path 1: truthy or falsy';
console.assert(isTrue5, 'Test 5');

const result6 = impossibleElse(false);
const isTrue6 = result6 === 'path 1: truthy or falsy';
console.assert(isTrue6, 'Test 6');

const result7 = impossibleElse(null);
const isTrue7 = result7 === 'path 1: truthy or falsy';
console.assert(isTrue7, 'Test 7');

const result8 = impossibleElse(undefined);
const isTrue8 = result8 === 'path 1: truthy or falsy';
console.assert(isTrue8, 'Test 8');

```

[TOP](#debuggercises)

