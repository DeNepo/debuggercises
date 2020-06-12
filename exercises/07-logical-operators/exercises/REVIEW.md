# Debuggercises 

## /exercises/07-logical-operators/exercises 

> 6/12/2020, 9:44:15 PM 

[../REVIEW.md](../REVIEW.md)

- [/and.js](#andjs) - _fail_ 
- [/not.js](#notjs) - _fail_ 
- [/or.js](#orjs) - _fail_ 
- [/ternary.js](#ternaryjs) - _fail_ 

---

## /and.js 

> fail 
>
> [review source](./and.js)

```txt
- FAIL: Test 1
- FAIL: Test 2
- FAIL: Test 3
- FAIL: Test 4
- FAIL: Test 5
- FAIL: Test 6
- FAIL: Test 7
- FAIL: Test 8
- FAIL: Test 9
```

```js
'use strict';

// write a function that behaves the same as &&
//  ... without using &&
function and(left, right) {

}

const and1 = and(0, 0);
const isTrue1 = and1 === 0;
console.assert(isTrue1, 'Test 1');

const and2 = and(1, 0);
const isTrue2 = and2 === 0;
console.assert(isTrue2, 'Test 2');

const and3 = and(0, 1);
const isTrue3 = and3 === 0;
console.assert(isTrue3, 'Test 3');

const and4 = and(1, 1);
const isTrue4 = and4 === 1;
console.assert(isTrue4, 'Test 4');

const and5 = and('', 'asdf');
const isTrue5 = and5 === '';
console.assert(isTrue5, 'Test 5');

const and6 = and('asdf', '');
const isTrue6 = and6 === '';
console.assert(isTrue6, 'Test 6');

const and7 = and(true, false);
const isTrue7 = and7 === false;
console.assert(isTrue7, 'Test 7');

const and8 = and(NaN, undefined);
const isTrue8 = Number.isNaN(and8);
console.assert(isTrue8, 'Test 8');

const and9 = and(Infinity, 'asdf');
const isTrue9 = and9 === 'asdf';
console.assert(isTrue9, 'Test 9');

```

[TOP](#debuggercises)

---

## /not.js 

> fail 
>
> [review source](./not.js)

```txt
- FAIL: Test 1
- FAIL: Test 2
- FAIL: Test 3
- FAIL: Test 4
- FAIL: Test 5
- FAIL: Test 6
- FAIL: Test 7
- FAIL: Test 8
- FAIL: Test 9
```

```js
'use strict';

// write a function that behaves the same as !
//  ... but doesn't use !
function not(value) {

}

const not1 = not(0);
const isTrue1 = not1 === true;
console.assert(isTrue1, 'Test 1');

const not2 = not(false);
const isTrue2 = not2 === true;
console.assert(isTrue2, 'Test 2');

const not3 = not(undefined);
const isTrue3 = not3 === true;
console.assert(isTrue3, 'Test 3');

const not4 = not(null);
const isTrue4 = not4 === true;
console.assert(isTrue4, 'Test 4');

const not5 = not('');
const isTrue5 = not5 === true;
console.assert(isTrue5, 'Test 5');

const not6 = not(NaN);
const isTrue6 = not6 === true;
console.assert(isTrue6, 'Test 6');

const not7 = not('fdsa');
const isTrue7 = not7 === false;
console.assert(isTrue7, 'Test 7');

const not8 = not('true');
const isTrue8 = not8 === false;
console.assert(isTrue8, 'Test 8');

const not9 = not(1);
const isTrue9 = not9 === false;
console.assert(isTrue9, 'Test 9');

```

[TOP](#debuggercises)

---

## /or.js 

> fail 
>
> [review source](./or.js)

```txt
- FAIL: Test 1
- FAIL: Test 2
- FAIL: Test 3
- FAIL: Test 4
- FAIL: Test 5
- FAIL: Test 6
- FAIL: Test 7
+ PASS: Test 8
- FAIL: Test 9
```

```js
'use strict';

// write a function that behaves the same as ||
//  ... without using ||
function or(left, right) {

}

const or1 = or(0, 0);
const isTrue1 = or1 === 0;
console.assert(isTrue1, 'Test 1');

const or2 = or(1, 0);
const isTrue2 = or2 === 1;
console.assert(isTrue2, 'Test 2');

const or3 = or(0, 1);
const isTrue3 = or3 === 1;
console.assert(isTrue3, 'Test 3');

const or4 = or(1, 1);
const isTrue4 = or4 === 1;
console.assert(isTrue4, 'Test 4');

const or5 = or('', 'asdf');
const isTrue5 = or5 === 'asdf';
console.assert(isTrue5, 'Test 5');

const or6 = or('asdf', '');
const isTrue6 = or6 === 'asdf';
console.assert(isTrue6, 'Test 6');

const or7 = or(true, false);
const isTrue7 = or7 === true;
console.assert(isTrue7, 'Test 7');

const or8 = or(NaN, undefined);
const isTrue8 = or8 === undefined;
console.assert(isTrue8, 'Test 8');

const or9 = or(Infinity, 'asdf');
const isTrue9 = or9 === Infinity;
console.assert(isTrue9, 'Test 9');

```

[TOP](#debuggercises)

---

## /ternary.js 

> fail 
>
> [review source](./ternary.js)

```txt
- FAIL: Test 1
- FAIL: Test 2
- FAIL: Test 3
- FAIL: Test 4
- FAIL: Test 5
- FAIL: Test 6
- FAIL: Test 7
- FAIL: Test 8
- FAIL: Test 9
```

```js
'use strict';

// write a function that behaves the same as ? :
//  ... without using ? :
function ternary(condition, first, second) {

}

const ternary1 = ternary(1, 'A', 'B');
const isTrue1 = ternary1 === 'A';
console.assert(isTrue1, 'Test 1');

const ternary2 = ternary('non-empty strings', 1, 2);
const isTrue2 = ternary2 === 1;
console.assert(isTrue2, 'Test 2');

const ternary3 = ternary(true, 'x', 'y');
const isTrue3 = ternary3 === 'x';
console.assert(isTrue3, 'Test 3');

const ternary4 = ternary(undefined, 'hi!', 'bye.');
const isTrue4 = ternary4 === 'bye.';
console.assert(isTrue4, 'Test 4');

const ternary5 = ternary(null, false, true);
const isTrue5 = ternary5 === true;
console.assert(isTrue5, 'Test 5');

const ternary6 = ternary(false, 1, 1);
const isTrue6 = ternary6 === 1;
console.assert(isTrue6, 'Test 6');

const ternary7 = ternary(0, Infinity, -Infinity);
const isTrue7 = ternary7 === -Infinity;
console.assert(isTrue7, 'Test 7');

const ternary8 = ternary('', '', null);
const isTrue8 = ternary8 === null;
console.assert(isTrue8, 'Test 8');

const ternary9 = ternary(NaN, 'A', 'B');
const isTrue9 = ternary9 === 'B';
console.assert(isTrue9, 'Test 9');

```

[TOP](#debuggercises)

