# Debuggercises 

## /exercises/07-logical-operators/exercises 

> 6/16/2020, 11:22:08 AM 

[../README.md](../README.md)

- [/and.js](#andjs) - _fail_ 
- [/not.js](#notjs) - _fail_ 
- [/or.js](#orjs) - _fail_ 
- [/ternary.js](#ternaryjs) - _fail_ 

---

## /and.js 

> fail 
>
> [review source](../../../exercises/07-logical-operators/exercises/and.js)

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

const _1_expect = 0;
const _1_actual = and(0, 0);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 0;
const _2_actual = and(1, 0);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 0;
const _3_actual = and(0, 1);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 1;
const _4_actual = and(1, 1);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = '';
const _5_actual = and('', 'asdf');
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = '';
const _6_actual = and('asdf', '');
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = false;
const _7_actual = and(true, false);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = NaN;
const _8_actual = and(NaN, undefined);
console.assert(Object.is(_8_actual, _8_expect), 'Test 8');

const _9_expect = 'asdf';
const _9_actual = and(Infinity, 'asdf');
console.assert(_9_actual === _9_expect, 'Test 9');

```

[TOP](#debuggercises)

---

## /not.js 

> fail 
>
> [review source](../../../exercises/07-logical-operators/exercises/not.js)

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

const _1_expect = true;
const _1_actual = not(0);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = true;
const _2_actual = not(false);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = true;
const _3_actual = not(undefined);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = true;
const _4_actual = not(null);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = true;
const _5_actual = not('');
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = true;
const _6_actual = not(NaN);
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = false;
const _7_actual = not('fdsa');
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = false;
const _8_actual = not('true');
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = false;
const _9_actual = not(1);
console.assert(_9_actual === _9_expect, 'Test 9');

```

[TOP](#debuggercises)

---

## /or.js 

> fail 
>
> [review source](../../../exercises/07-logical-operators/exercises/or.js)

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

const _1_expect = 0;
const _1_actual = or(0, 0);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 1;
const _2_actual = or(1, 0);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 1;
const _3_actual = or(0, 1);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 1;
const _4_actual = or(1, 1);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = 'asdf';
const _5_actual = or('', 'asdf');
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = 'asdf';
const _6_actual = or('asdf', '');
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = true;
const _7_actual = or(true, false);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = undefined;
const _8_actual = or(NaN, undefined);
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = Infinity;
const _9_actual = or(Infinity, 'asdf');
console.assert(_9_actual === _9_expect, 'Test 9');

```

[TOP](#debuggercises)

---

## /ternary.js 

> fail 
>
> [review source](../../../exercises/07-logical-operators/exercises/ternary.js)

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

