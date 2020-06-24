# Debuggercises 

> 6/24/2020, 5:04:07 PM 

## [exercises](../../README.md)/[07-logical-operators](../README.md)/examples 

- [/0-truthiness.js](#0-truthinessjs)  
- [/1-or.js](#1-orjs)  
- [/2-and.js](#2-andjs)  
- [/3-ternary.js](#3-ternaryjs)  
- [/4-not.js](#4-notjs)  
- [/5-short-circuiting.js](#5-short-circuitingjs)  
---

## /0-truthiness.js 

>  
>
> [review source](../../../exercises/07-logical-operators/examples/0-truthiness.js)

```txt
LOG: --- there are fewer falsy values than truthy values
LOG: falsy  boolean  false
LOG: falsy  string  
LOG: falsy  number  NaN
LOG: falsy  number  0
LOG: falsy  object  null
LOG: falsy  undefined  undefined
LOG: --- any other value is truthy
LOG: truthy  string   
LOG: truthy  string  any other string
LOG: truthy  number  -1
```

```js
'use strict';

/* truthiness is simple to test
  Does a value cast to true or to false?
*/

const classify = (x) => {
  const castToBoolean = Boolean(x);
  const isTrue = castToBoolean === true;
  return isTrue ? 'truthy' : 'falsy';
}

console.log('--- there are fewer falsy values than truthy values');
// all falsy values: https://developer.mozilla.org/en-US/docs/Glossary/Falsy

const value1 = false;
const truthiness1 = classify(value1);
console.log(truthiness1, typeof value1, value1);

const value2 = '';
const truthiness2 = classify(value2);
console.log(truthiness2, typeof value2, value2);

const value3 = NaN;
const truthiness3 = classify(value3);
console.log(truthiness3, typeof value3, value3);

const value4 = 0;
const truthiness4 = classify(value4);
console.log(truthiness4, typeof value4, value4);

const value5 = null;
const truthiness5 = classify(value5);
console.log(truthiness5, typeof value5, value5);

const value6 = undefined;
const truthiness6 = classify(value6);
console.log(truthiness6, typeof value6, value6);

console.log('--- any other value is truthy');

const value7 = ' ';
const truthiness7 = classify(value7);
console.log(truthiness7, typeof value7, value7);

const value8 = 'any other string';
const truthiness8 = classify(value8);
console.log(truthiness8, typeof value8, value8);

const value9 = -1; // any other number
const truthiness9 = classify(value9);
console.log(truthiness9, typeof value9, value9);



```

[TOP](#debuggercises)

---

## /1-or.js 

>  
>
> [review source](../../../exercises/07-logical-operators/examples/1-or.js)

```txt
LOG: 1  number  0
LOG: 2  number  1
LOG: 3  number  1
LOG: 4  number  1
LOG: 5  string  asdf
LOG: 6  string  asdf
LOG: 7  boolean  true
LOG: 8  undefined  undefined
LOG: 9  string  poiu
```

```js
'use strict';

/* ||
  the or operator does not evaluate to true or false!
  it returns the left value or the right value
  - if the left is truthy, it returns the left value
  - if the left is falsy, it returns the right value
*/

const or1 = 0 || 0;
console.log(1, typeof or1, or1);

const or2 = 1 || 0;
console.log(2, typeof or2, or2);

const or3 = 0 || 1;
console.log(3, typeof or3, or3);

const or4 = 1 || 1;
console.log(4, typeof or4, or4);

const or5 = '' || 'asdf';
console.log(5, typeof or5, or5);

const or6 = 'asdf' || '';
console.log(6, typeof or6, or6);

const or7 = true || false;
console.log(7, typeof or7, or7);

const or8 = NaN || undefined;
console.log(8, typeof or8, or8);

const or9 = 'poiu' || 'asdf';
console.log(9, typeof or9, or9);

```

[TOP](#debuggercises)

---

## /2-and.js 

>  
>
> [review source](../../../exercises/07-logical-operators/examples/2-and.js)

```txt
LOG: 1  number  0
LOG: 2  number  0
LOG: 3  number  0
LOG: 4  number  1
LOG: 5  string  
LOG: 6  string  
LOG: 7  boolean  false
LOG: 8  number  NaN
LOG: 9  string  asdf
```

```js
'use strict';

/* &&
  the and operator does not evaluate to true or false!
  it returns the left value or the right value
  - if the left is falsy, it returns the left value
  - if the left is truthy, it returns the right value
  https://javascript.info/logical-operators
*/

const and1 = 0 && 0;
console.log(1, typeof and1, and1);

const and2 = 1 && 0;
console.log(2, typeof and2, and2);

const and3 = 0 && 1;
console.log(3, typeof and3, and3);

const and4 = 1 && 1;
console.log(4, typeof and4, and4);

const and5 = '' && 'asdf';
console.log(5, typeof and5, and5);

const and6 = 'asdf' && '';
console.log(6, typeof and6, and6);

const and7 = true && false;
console.log(7, typeof and7, and7);

const and8 = NaN && undefined;
console.log(8, typeof and8, and8);

const and9 = 'poiu' && 'asdf';
console.log(9, typeof and9, and9);

```

[TOP](#debuggercises)

---

## /3-ternary.js 

>  
>
> [review source](../../../exercises/07-logical-operators/examples/3-ternary.js)

```txt
LOG: 1  A
LOG: 2  A
LOG: 3  A
LOG: 4  B
LOG: 5  B
LOG: 6  B
LOG: 7  B
LOG: 8  B
LOG: 9  B
```

```js
'use strict';

/* the Ternary Operator (or Conditional Operator)

it checks the truthiness of the condition
  - returns the first value if the condition is truthy
  - returns the second value if the condition is falsy
*/


const ternary1 = 1 ? 'A' : 'B';
console.log(1, ternary1);

const ternary2 = 'non-empty strings' ? 'A' : 'B';
console.log(2, ternary2);

const ternary3 = true ? 'A' : 'B';
console.log(3, ternary3);

const ternary4 = undefined ? 'A' : 'B';
console.log(4, ternary4);

const ternary5 = null ? 'A' : 'B';
console.log(5, ternary5);

const ternary6 = false ? 'A' : 'B';
console.log(6, ternary6);

const ternary7 = 0 ? 'A' : 'B';
console.log(7, ternary7);

const ternary8 = '' ? 'A' : 'B';
console.log(8, ternary8);

const ternary9 = NaN ? 'A' : 'B';
console.log(9, ternary9);

```

[TOP](#debuggercises)

---

## /4-not.js 

>  
>
> [review source](../../../exercises/07-logical-operators/examples/4-not.js)

```txt
LOG: 1  boolean  true
LOG: 2  boolean  true
LOG: 3  boolean  true
LOG: 4  boolean  true
LOG: 5  boolean  true
LOG: 6  boolean  true
LOG: 7  boolean  false
LOG: 8  boolean  false
LOG: 9  boolean  false
```

```js
'use strict';

/* !
  the not operator does evaluate to true or false
  - if the value is truthy, it returns false
  - if the value is falsy, it returns true
*/

const not1 = !0;
console.log(1, typeof not1, not1);

const not2 = !false;
console.log(2, typeof not2, not2);

const not3 = !undefined;
console.log(3, typeof not3, not3);

const not4 = !null;
console.log(4, typeof not4, not4);

const not5 = !'';
console.log(5, typeof not5, not5);

const not6 = !NaN;
console.log(6, typeof not6, not6);

const not7 = !'fdsa';
console.log(7, typeof not7, not7);

const not8 = !'true';
console.log(8, typeof not8, not8);

const not9 = !1;
console.log(9, typeof not9, not9);

```

[TOP](#debuggercises)

---

## /5-short-circuiting.js 

>  
>
> [review source](../../../exercises/07-logical-operators/examples/5-short-circuiting.js)

```txt
LOG: --- a || b ---
LOG: true
LOG: or1:  boolean  true
LOG: false
LOG: true
LOG: or2:  boolean  true
LOG: true
LOG: or3:  boolean  true
LOG: false
LOG: false
LOG: or4:  boolean  false
LOG: --- a && b ---
LOG: true
LOG: true
LOG: and1:  boolean  true
LOG: false
LOG: and2:  boolean  false
LOG: true
LOG: false
LOG: and3:  boolean  false
LOG: false
LOG: and4:  boolean  false
LOG: --- a ? b : c ---
LOG: true
LOG: b
LOG: ternary1:  string  b
LOG: false
LOG: c
LOG: ternary2:  string  c
```

```js
/* Short-Circuiting

  This is a fun and tricky thing about &&, ||, ? :
    have fun!

  Beau teaches JavaScript: https://www.youtube.com/watch?v=r7v6EIiHfVA
  Steve Griffith: https://www.youtube.com/watch?v=MR0ohAODlOI
  https://javascript.info/logical-operators
    search (ctr-f) for "Short-circuit"
*/


const logReturn = (arg) => {
  console.log(arg);
  return arg;
};

console.log('--- a || b ---');

const or1 = logReturn(true) || logReturn(true);
console.log('or1:', typeof or1, or1);

const or2 = logReturn(false) || logReturn(true);
console.log('or2:', typeof or2, or2);

const or3 = logReturn(true) || logReturn(false);
console.log('or3:', typeof or3, or3);

const or4 = logReturn(false) || logReturn(false);
console.log('or4:', typeof or4, or4);


console.log('--- a && b ---');

const and1 = logReturn(true) && logReturn(true);
console.log('and1:', typeof and1, and1);

const and2 = logReturn(false) && logReturn(true);
console.log('and2:', typeof and2, and2);

const and3 = logReturn(true) && logReturn(false);
console.log('and3:', typeof and3, and3);

const and4 = logReturn(false) && logReturn(false);
console.log('and4:', typeof and4, and4);


console.log('--- a ? b : c ---');

const ternary1 = logReturn(true) ? logReturn('b') : logReturn('c');
console.log('ternary1:', typeof ternary1, ternary1);

const ternary2 = logReturn(false) ? logReturn('b') : logReturn('c');
console.log('ternary2:', typeof ternary2, ternary2);


```

[TOP](#debuggercises)

