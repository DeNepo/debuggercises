# Debuggercises 

> 6/21/2020, 9:05:10 AM 

## [exercises](../../README.md)/[18-functions-401](../README.md)/0-examples 

- [/0-implcit-return.js](#0-implcit-returnjs)  
- [/and.js](#andjs) - _pass_ 
- [/complex.js](#complexjs) - _pass_ 
- [/ternary.js](#ternaryjs) - _pass_ 
---

## /0-implcit-return.js 

>  
>
> [review source](../../../exercises/18-functions-401/0-examples/0-implcit-return.js)

```txt
LOG: body and return 1:  string  boolean
LOG: body and return 2:  string  object
LOG: implicit return 1:  string  boolean
LOG: implicit return 2:  string  object
LOG: common mistake 1:  undefined  undefined
LOG: common mistake 1:  undefined  undefined
```

```js
'use strict';

/* Implicit Returns

  if the body of an arrow function is a single expression, there's no need for returns!
  are you not sure whether the body is a statement or expression?
    try writing it as an implicit return, if you get an error then it's a statement

  hint, these things will not work:
    if (_) {_} else {_}
    for (_; _; _) {_}
    while (_) {_}
    const _ = _;
    let _ = _;

*/

/**
 * behaves exactly the same as the typeof operator
 * @param {any} a - the value to type-check
 * @returns {string}
 */

const withBodyAndReturn = (a) => {
  return typeof a;
};

const withBodyAndReturn1 = withBodyAndReturn(true);
console.log('body and return 1:', typeof withBodyAndReturn1, withBodyAndReturn1);

const withBodyAndReturn2 = withBodyAndReturn(null);
console.log('body and return 2:', typeof withBodyAndReturn1, withBodyAndReturn2);



const withImplicitReturn = (a) => typeof a;

const withImplicitReturn1 = withImplicitReturn(true);
console.log('implicit return 1:', typeof withImplicitReturn1, withImplicitReturn1);

const withImplicitReturn2 = withImplicitReturn(null);
console.log('implicit return 2:', typeof withImplicitReturn1, withImplicitReturn2);



const looksLikeImplicitButIsNot = (a) => { typeof a };

// // it's the same as this, just formatted differently
// const looksLikeImplicitButIsNot = (a) => {
//   typeof a
// };

const looksLikeImplicitButIsNot1 = looksLikeImplicitButIsNot(true);
console.log('common mistake 1:', typeof looksLikeImplicitButIsNot1, looksLikeImplicitButIsNot1);

const looksLikeImplicitButIsNot2 = looksLikeImplicitButIsNot(null);
console.log('common mistake 1:', typeof looksLikeImplicitButIsNot1, looksLikeImplicitButIsNot2);


```

[TOP](#debuggercises)

---

## /and.js 

> pass 
>
> [review source](../../../exercises/18-functions-401/0-examples/and.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
```

```js
'use strict';

/**
 * behaves exactly the same as the and operator
 * @param {any} a - the left operand
 * @param {any} b - the right operand
 * @returns {any}
 */

const explicit1 = (a, b) => {
  const result = a && b;
  return result;
};

const explicit2 = (a, b) => {
  return a && b;
};

const implicit = (a, b) => a && b;


const _1_arg1 = 1;
const _1_arg2 = 1;
const _1_explicit1 = explicit1(_1_arg1, _1_arg2);
const _1_explicit2 = explicit2(_1_arg1, _1_arg2);
const _1_implicit = implicit(_1_arg1, _1_arg2);
console.assert(_1_explicit1 === _1_implicit && _1_explicit2 === _1_implicit, 'Test 1');

const _2_arg1 = 1;
const _2_arg2 = 0;
const _2_explicit1 = explicit1(_2_arg1, _2_arg2);
const _2_explicit2 = explicit2(_2_arg1, _2_arg2);
const _2_implicit = implicit(_2_arg1, _2_arg2);
console.assert(_2_explicit1 === _2_implicit && _2_explicit2 === _2_implicit, 'Test 2');

const _3_arg1 = 0;
const _3_arg2 = 1;
const _3_explicit1 = explicit1(_3_arg1, _3_arg2);
const _3_explicit2 = explicit2(_3_arg1, _3_arg2);
const _3_implicit = implicit(_3_arg1, _3_arg2);
console.assert(_3_explicit1 === _3_implicit && _3_explicit2 === _3_implicit, 'Test 3');

const _4_arg1 = 0;
const _4_arg2 = 0;
const _4_explicit1 = explicit1(_4_arg1, _4_arg2);
const _4_explicit2 = explicit2(_4_arg1, _4_arg2);
const _4_implicit = implicit(_4_arg1, _4_arg2);
console.assert(_4_explicit1 === _4_implicit && _4_explicit2 === _4_implicit, 'Test 4');


```

[TOP](#debuggercises)

---

## /complex.js 

> pass 
>
> [review source](../../../exercises/18-functions-401/0-examples/complex.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
```

```js
'use strict';

/**
 * huh, this is a confusing function. probably never useful
 *  but you can still refactor it!
 * @param {any} a
 * @param {any} b
 * @param {any} c
 * @returns {any}
 */

const explicit1 = (a, b, c) => {
  const result = (a || c)
    ? !b && c
    : c !== b;
  return result;
};

const explicit2 = (a, b, c) => {
  return (a || c)
    ? !b && c
    : c !== b;
};

const implicit = (a, b, c) => (a || c)
  ? !b && c
  : c !== b;


const _1_arg1 = 1;
const _1_arg2 = 1;
const _1_arg3 = 0;
const _1_explicit1 = explicit1(_1_arg1, _1_arg2, _1_arg3);
const _1_explicit2 = explicit2(_1_arg1, _1_arg2, _1_arg3);
const _1_implicit = implicit(_1_arg1, _1_arg2, _1_arg3);
console.assert(_1_explicit1 === _1_implicit && _1_explicit2 === _1_implicit, 'Test 1');

const _2_arg1 = 1;
const _2_arg2 = 0;
const _2_arg3 = 1;
const _2_explicit1 = explicit1(_2_arg1, _2_arg2, _2_arg3);
const _2_explicit2 = explicit2(_2_arg1, _2_arg2, _2_arg3);
const _2_implicit = implicit(_2_arg1, _2_arg2, _2_arg3);
console.assert(_2_explicit1 === _2_implicit && _2_explicit2 === _2_implicit, 'Test 2');

const _3_arg1 = 0;
const _3_arg2 = 1;
const _3_arg3 = 0;
const _3_explicit1 = explicit1(_3_arg1, _3_arg2, _3_arg3);
const _3_explicit2 = explicit2(_3_arg1, _3_arg2, _3_arg3);
const _3_implicit = implicit(_3_arg1, _3_arg2, _3_arg3);
console.assert(_3_explicit1 === _3_implicit && _3_explicit2 === _3_implicit, 'Test 3');

const _4_arg1 = 0;
const _4_arg2 = 0;
const _4_arg3 = 1;
const _4_explicit1 = explicit1(_4_arg1, _4_arg2, _4_arg3);
const _4_explicit2 = explicit2(_4_arg1, _4_arg2, _4_arg3);
const _4_implicit = implicit(_4_arg1, _4_arg2, _4_arg3);
console.assert(_4_explicit1 === _4_implicit && _4_explicit2 === _4_implicit, 'Test 4');


```

[TOP](#debuggercises)

---

## /ternary.js 

> pass 
>
> [review source](../../../exercises/18-functions-401/0-examples/ternary.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
```

```js
'use strict';

/**
 * behaves exactly the same as the ternary operator
 * @param {any} a - the condition
 * @param {any} b - the return value if truthy
 * @param {any} c - the return value if falsy
 * @returns {any}
 */

const explicit1 = (a, b, c) => {
  const result = a ? b : c;
  return result;
};

const explicit2 = (a, b, c) => {
  return a ? b : c;
};

const implicit = (a, b, c) => a ? b : c;


const _1_arg1 = 1;
const _1_arg2 = 1;
const _1_arg3 = 0;
const _1_explicit1 = explicit1(_1_arg1, _1_arg2, _1_arg3);
const _1_explicit2 = explicit2(_1_arg1, _1_arg2, _1_arg3);
const _1_implicit = implicit(_1_arg1, _1_arg2, _1_arg3);
console.assert(_1_explicit1 === _1_implicit && _1_explicit2 === _1_implicit, 'Test 1');

const _2_arg1 = 1;
const _2_arg2 = 0;
const _2_arg3 = 0;
const _2_explicit1 = explicit1(_2_arg1, _2_arg2, _2_arg3);
const _2_explicit2 = explicit2(_2_arg1, _2_arg2, _2_arg3);
const _2_implicit = implicit(_2_arg1, _2_arg2, _2_arg3);
console.assert(_2_explicit1 === _2_implicit && _2_explicit2 === _2_implicit, 'Test 2');

const _3_arg1 = 0;
const _3_arg2 = 1;
const _3_arg3 = 0;
const _3_explicit1 = explicit1(_3_arg1, _3_arg2, _3_arg3);
const _3_explicit2 = explicit2(_3_arg1, _3_arg2, _3_arg3);
const _3_implicit = implicit(_3_arg1, _3_arg2, _3_arg3);
console.assert(_3_explicit1 === _3_implicit && _3_explicit2 === _3_implicit, 'Test 3');

const _4_arg1 = 0;
const _4_arg2 = 0;
const _4_arg3 = 0;
const _4_explicit1 = explicit1(_4_arg1, _4_arg2, _4_arg3);
const _4_explicit2 = explicit2(_4_arg1, _4_arg2, _4_arg3);
const _4_implicit = implicit(_4_arg1, _4_arg2, _4_arg3);
console.assert(_4_explicit1 === _4_implicit && _4_explicit2 === _4_implicit, 'Test 4');


```

[TOP](#debuggercises)

