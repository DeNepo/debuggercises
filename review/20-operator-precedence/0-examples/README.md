# Debuggercises 

> 6/21/2020, 9:05:10 AM 

## [exercises](../../README.md)/[20-operator-precedence](../README.md)/0-examples 

- [/readme.js](#readmejs) - _pass_ 
- [/1-literals.js](#1-literalsjs) - _pass_ 
- [/2-literals.js](#2-literalsjs) - _pass_ 
- [/3-literals.js](#3-literalsjs) - _pass_ 
- [/4-variables.js](#4-variablesjs) - _pass_ 
- [/5-variables.js](#5-variablesjs) - _pass_ 
---

## /readme.js 

> pass 
>
> [review source](../../../exercises/20-operator-precedence/0-examples/readme.js)

```txt
+ PASS: Step 0
+ PASS: Step 1
+ PASS: Step 2
+ PASS: Step 3
+ PASS: Step 4
```

```js
'use strict';

/* Operator Precedence

  if you remember the school days of math, you might recognize this:
  - PEMDAS
  - Please excuse my dear aunt sally.
  - parenthesis, exponent, multiplication, division, addition, subtraction
  this is the order of operations for basic mathematical operations
  in JavaScript, these rules exist too!  and then some ...

  the following examples and exercises will help you internalize JS operator precedence
  looking at a long expression and see it as a series of single steps will change your life

  in these exercises you will study strange and meaningless expressions
  they will use all the primitive types and do all sorts of ugly coercions
  keep in mind that none of this is good habits!
  the goal of these exercises is to understand how JavaScript
  NOT to learn how to write good code

  helpful links
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
    https://www.dummies.com/web-design-development/javascript-operator-precedence/
    http://www.scriptingmaster.com/javascript/operator-precedence.asp
*/


const expected = 13;

// the original expression
const step0 = (3 - 2) + (6 / 2) * 4;
console.assert(step0 === expected, 'Step 0');

// evaluate inside the parenthesis
const step1 = (1) + (6 / 2) * 4;
console.assert(step1 === expected, 'Step 1');

// evaluate inside the parenthesis
const step2 = 1 + (3) * 4;
console.assert(step2 === expected, 'Step 2');

// multiplication
const step3 = 1 + 12;
console.assert(step3 === expected, 'Step 3');

// addition
const step4 = 13;
console.assert(step4 === expected, 'Step 4');

```

[TOP](#debuggercises)

---

## /1-literals.js 

> pass 
>
> [review source](../../../exercises/20-operator-precedence/0-examples/1-literals.js)

```txt
+ PASS: Step 0
+ PASS: Step 1
+ PASS: Step 2
+ PASS: Step 3
+ PASS: Step 4
```

```js
'use strict';

/* Literals

  literals are actual primitive values, not the variables that hold them
  the first set of exercises asks you to evaluate expressions with literals

*/

const expected = true;

// the original expression
const step0 = typeof true === typeof !NaN;
console.assert(step0 === expected, 'Step 0');

// evaluate the left side of the comparison

// evaluate the typeof true
const step1 = 'boolean' === typeof !NaN;
console.assert(step1 === expected, 'Step 1');

// evaluate the right side of the comparison

// cast NaN to boolean and revers the value
const step2 = 'boolean' === typeof true;
console.assert(step2 === expected, 'Step 2');

// evaluate the typeof true
const step3 = 'boolean' === 'boolean';
console.assert(step3 === expected, 'Step 3');

// evaluate the comparison
const step4 = true;
console.assert(step4 === expected, 'Step 4');

```

[TOP](#debuggercises)

---

## /2-literals.js 

> pass 
>
> [review source](../../../exercises/20-operator-precedence/0-examples/2-literals.js)

```txt
+ PASS: Step 0
+ PASS: Step 1
+ PASS: Step 2
+ PASS: Step 3
```

```js
'use strict';

/* Literals

  literals are actual primitive values, not the variables that hold them
  the first set of exercises asks you to evaluate expressions with literals

*/

const expected = false;

// the original expression
const step0 = !!null && !!100;
console.assert(step0 === expected, 'Step 0');

// begin evaluating the left side of ||

// coerce null to Boolean and reverse it's truthiness
const step1 = !true && !!100;
console.assert(step1 === expected, 'Step 1');

// reverse true to false
const step2 = false && !!100;
console.assert(step2 === expected, 'Step 2');

// short-circuit (skip) the right side of &&, no need to evaluate it!
const step3 = false;
console.assert(step3 === expected, 'Step 3');


/* remember short-circuiting, all the way back in "Logical Operators"
  because the left side of && is falsy, the right side will not be executed
  so we can clear out the && without doing any extra steps
*/

```

[TOP](#debuggercises)

---

## /3-literals.js 

> pass 
>
> [review source](../../../exercises/20-operator-precedence/0-examples/3-literals.js)

```txt
+ PASS: Step 0
+ PASS: Step 1
+ PASS: Step 2
+ PASS: Step 3
```

```js
'use strict';

/* Literals

  literals are actual primitive values, not the variables that hold them
  the first set of exercises asks you to evaluate expressions with literals

*/

const expected = '55';

// the original expression
const step0 = +undefined || 5 + '5';
console.assert(step0 === expected, 'Step 0');

// evaluate the left side of ||

// coerce null to Boolean and reverse it's truthiness
const step1 = !true || 5 + '5';
console.assert(step1 === expected, 'Step 1');

// reverse true to false
const step2 = false || 5 + '5';
console.assert(step2 === expected, 'Step 2');

// move on to evaluate the right side of ||

// coerce the number to a string and concatenate
const step3 = '55';
console.assert(step3 === expected, 'Step 3');


/* remember short-circuiting, all the way back in "Logical Operators"
  the || operator will continue to evaluate the right side if the left is falsy
*/

```

[TOP](#debuggercises)

---

## /4-variables.js 

> pass 
>
> [review source](../../../exercises/20-operator-precedence/0-examples/4-variables.js)

```txt
+ PASS: Step 0
+ PASS: Step 1
+ PASS: Step 2
+ PASS: Step 3
```

```js
'use strict';

/* Variables

  the same exercises, but with the expression values read from  variables
  leave the variables in the expressions until you evaluate them!

*/

const x = null;
const y = 100;

const expected = false;

// the original expression
const step0 = !!x && !!y;
console.assert(step0 === expected, 'Step 0');

// begin evaluating the left side of ||

// coerce null to Boolean and reverse it's truthiness
const step1 = !true && !!y;
console.assert(step1 === expected, 'Step 1');

// reverse true to false
const step2 = false && !!y;
console.assert(step2 === expected, 'Step 2');

// short-circuit (skip) the right side of &&, no need to evaluate it!
const step3 = false;
console.assert(step3 === expected, 'Step 3');


/* remember short-circuiting, all the way back in "Logical Operators"
  because the left side of && is falsy, the right side will not be executed
  so we can clear out the && without doing any extra steps
*/

```

[TOP](#debuggercises)

---

## /5-variables.js 

> pass 
>
> [review source](../../../exercises/20-operator-precedence/0-examples/5-variables.js)

```txt
+ PASS: Step 0
+ PASS: Step 1
+ PASS: Step 2
+ PASS: Step 3
```

```js
'use strict';

/* Variables

  the same exercises, but with the expression values read from  variables
  leave the variables in the expressions until you evaluate them!

*/

const x = undefined;
const y = 5;
const z = '5';

const expected = '55';

// the original expression
const step0 = +x || y + z;
console.assert(step0 === expected, 'Step 0');

// evaluate the left side of ||

// coerce null to Boolean and reverse it's truthiness
const step1 = !true || y + z;
console.assert(step1 === expected, 'Step 1');

// reverse true to false
const step2 = false || y + z
console.assert(step2 === expected, 'Step 2');

// move on to evaluate the right side of ||

// coerce the number to a string and concatenate
const step3 = '55';
console.assert(step3 === expected, 'Step 3');


/* remember short-circuiting, all the way back in "Logical Operators"
  the || operator will continue to evaluate the right side if the left is falsy
*/

```

[TOP](#debuggercises)

