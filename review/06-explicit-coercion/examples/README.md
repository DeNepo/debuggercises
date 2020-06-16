# Debuggercises 

## /exercises/06-explicit-coercion/examples 

> 6/16/2020, 8:02:11 AM 

[../README.md](../README.md)

- [/1-string.js](#1-stringjs)  
- [/2-boolean.js](#2-booleanjs)  
- [/3-number.js](#3-numberjs)  
- [/4-about-nan.js](#4-about-nanjs) - _fail_ 

---

## /1-string.js 

>  
>
> [review source](../../../exercises/06-explicit-coercion/examples/1-string.js)

```txt
LOG: 1  undefined  undefined  -->  string  undefined
LOG: 2  object  null  -->  string  null
LOG: 3  boolean  true  -->  string  true
LOG: 4  boolean  false  -->  string  false
LOG: 5  number  3  -->  string  3
LOG: 6  number  1  -->  string  1
LOG: 7  number  -2  -->  string  -2
LOG: 8  number  12.3  -->  string  12.3
LOG: 9  number  NaN  -->  string  NaN
```

```js
'use strict';

// casting to string is the simplest coercion
//  it's (almost ;) as simple as putting quotes around the previous value

const _1_toCast = undefined;
const _1_string = String(_1_toCast);
console.log(1, typeof _1_toCast, _1_toCast, '-->', typeof _1_string, _1_string);

const _2_toCast = null;
const _2_string = String(_2_toCast);
console.log(2, typeof _2_toCast, _2_toCast, '-->', typeof _2_string, _2_string);

const _3_toCast = true;
const _3_string = String(_3_toCast);
console.log(3, typeof _3_toCast, _3_toCast, '-->', typeof _3_string, _3_string);

const _4_toCast = false;
const _4_string = String(_4_toCast);
console.log(4, typeof _4_toCast, _4_toCast, '-->', typeof _4_string, _4_string);

const _5_toCast = 3;
const _5_string = String(_5_toCast);
console.log(5, typeof _5_toCast, _5_toCast, '-->', typeof _5_string, _5_string);

const _6_toCast = 1.0;
const _6_string = String(_6_toCast);
console.log(6, typeof _6_toCast, _6_toCast, '-->', typeof _6_string, _6_string);

const _7_toCast = -2;
const _7_string = String(_7_toCast);
console.log(7, typeof _7_toCast, _7_toCast, '-->', typeof _7_string, _7_string);

const _8_toCast = 12.3;
const _8_string = String(_8_toCast);
console.log(8, typeof _8_toCast, _8_toCast, '-->', typeof _8_string, _8_string);

const _9_toCast = NaN;
const _9_string = String(_9_toCast);
console.log(9, typeof _9_toCast, _9_toCast, '-->', typeof _9_string, _9_string);

```

[TOP](#debuggercises)

---

## /2-boolean.js 

>  
>
> [review source](../../../exercises/06-explicit-coercion/examples/2-boolean.js)

```txt
LOG: 1  undefined  undefined  -->  boolean  false
LOG: 2  object  null  -->  boolean  false
LOG: 3  string    -->  boolean  false
LOG: 4  string      -->  boolean  true
LOG: 5  string  any other string  -->  boolean  true
LOG: 6  number  0  -->  boolean  false
LOG: 7  number  -1  -->  boolean  true
LOG: 8  number  0.5  -->  boolean  true
LOG: 9  number  -Infinity  -->  boolean  true
```

```js
'use strict';

// casting to boolean is key to mastering JavaScript
//  it's the heart of TRUTHINESS, a key JS concept

const _1_toCast = undefined;
const _1_boolean = Boolean(_1_toCast);
console.log(1, typeof _1_toCast, _1_toCast, '-->', typeof _1_boolean, _1_boolean);

const _2_toCast = null;
const _2_boolean = Boolean(_2_toCast);
console.log(2, typeof _2_toCast, _2_toCast, '-->', typeof _2_boolean, _2_boolean);

const _3_toCast = '';
const _3_boolean = Boolean(_3_toCast);
console.log(3, typeof _3_toCast, _3_toCast, '-->', typeof _3_boolean, _3_boolean);

const _4_toCast = '  ';
const _4_boolean = Boolean(_4_toCast);
console.log(4, typeof _4_toCast, _4_toCast, '-->', typeof _4_boolean, _4_boolean);

const _5_toCast = 'any other string';
const _5_boolean = Boolean(_5_toCast);
console.log(5, typeof _5_toCast, _5_toCast, '-->', typeof _5_boolean, _5_boolean);

const _6_toCast = 0;
const _6_boolean = Boolean(_6_toCast);
console.log(6, typeof _6_toCast, _6_toCast, '-->', typeof _6_boolean, _6_boolean);

const _7_toCast = -1;
const _7_boolean = Boolean(_7_toCast);
console.log(7, typeof _7_toCast, _7_toCast, '-->', typeof _7_boolean, _7_boolean);

const _8_toCast = 0.5;
const _8_boolean = Boolean(_8_toCast);
console.log(8, typeof _8_toCast, _8_toCast, '-->', typeof _8_boolean, _8_boolean);

const _9_toCast = -Infinity;
const _9_boolean = Boolean(_9_toCast);
console.log(9, typeof _9_toCast, _9_toCast, '-->', typeof _9_boolean, _9_boolean);

```

[TOP](#debuggercises)

---

## /3-number.js 

>  
>
> [review source](../../../exercises/06-explicit-coercion/examples/3-number.js)

```txt
LOG: 1  undefined  undefined  -->  number  NaN
LOG: 2  object  null  -->  number  0
LOG: 3  boolean  true  -->  number  1
LOG: 4  boolean  false  -->  number  0
LOG: 5  string    -->  number  0
LOG: 6  string       -->  number  0
LOG: 7  string  12.3  -->  number  12.3
LOG: 8  string  -0.0  -->  number  0
LOG: 9  string  four  -->  number  NaN
```

```js
'use strict';

// casting to number is the most complicated coercion
//  but it's understandable!  you'll just need to learn a few rules

const _1_toCast = undefined;
const _1_number = Number(_1_toCast);
console.log(1, typeof _1_toCast, _1_toCast, '-->', typeof _1_number, _1_number);

const _2_toCast = null;
const _2_number = Number(_2_toCast);
console.log(2, typeof _2_toCast, _2_toCast, '-->', typeof _2_number, _2_number);

const _3_toCast = true;
const _3_number = Number(_3_toCast);
console.log(3, typeof _3_toCast, _3_toCast, '-->', typeof _3_number, _3_number);

const _4_toCast = false;
const _4_number = Number(_4_toCast);
console.log(4, typeof _4_toCast, _4_toCast, '-->', typeof _4_number, _4_number);

const _5_toCast = '';
const _5_number = Number(_5_toCast);
console.log(5, typeof _5_toCast, _5_toCast, '-->', typeof _5_number, _5_number);

const _6_toCast = '   ';
const _6_number = Number(_6_toCast);
console.log(6, typeof _6_toCast, _6_toCast, '-->', typeof _6_number, _6_number);

const _7_toCast = '12.3';
const _7_number = Number(_7_toCast);
console.log(7, typeof _7_toCast, _7_toCast, '-->', typeof _7_number, _7_number);

const _8_toCast = '-0.0';
const _8_number = Number(_8_toCast);
console.log(8, typeof _8_toCast, _8_toCast, '-->', typeof _8_number, _8_number);

const _9_toCast = 'four';
const _9_number = Number(_9_toCast);
console.log(9, typeof _9_toCast, _9_toCast, '-->', typeof _9_number, _9_number);

```

[TOP](#debuggercises)

---

## /4-about-nan.js 

> fail 
>
> [review source](../../../exercises/06-explicit-coercion/examples/4-about-nan.js)

```txt
LOG: --- NaN does not equal NaN! 
+ PASS: NaN is not equal to NaN
- FAIL: NaN is equal to NaN
LOG: --- Number.isNaN(x) returns true if a value is NaN 
LOG: boolean  true
LOG: boolean  false
LOG: boolean  false
LOG: boolean  false
LOG: --- isNaN(x) returns true if a value casts to NaN 
LOG: boolean  true
LOG: boolean  true
LOG: boolean  true
LOG: boolean  false
LOG: --- isNaN is the same as Number then Number.isNaN
LOG: boolean  true
LOG: boolean  true
LOG: boolean  true
LOG: boolean  false
```

```js
'use strict';

// NaN is a strange thing in JavaScript
//  if you are not careful about types in your programs ...
//  ... NaN will come to get you!

console.log('--- NaN does not equal NaN! ');
// this can make it tricky to check for NaN in your code

const isTrue = NaN !== NaN;
console.assert(isTrue, 'NaN is not equal to NaN');

const isFalse = NaN === NaN;
console.assert(isFalse, 'NaN is equal to NaN');


console.log('--- Number.isNaN(x) returns true if a value is NaN ');
// this is the best practice for checking if a value is NaN

const numIsNan1 = Number.isNaN(NaN);
console.log(typeof numIsNan1, numIsNan1);

const numIsNan2 = Number.isNaN('asdf');
console.log(typeof numIsNan2, numIsNan2);

const numIsNan3 = Number.isNaN(undefined);
console.log(typeof numIsNan3, numIsNan3);

const numIsNan4 = Number.isNaN('4');
console.log(typeof numIsNan4, numIsNan4);


console.log('--- isNaN(x) returns true if a value casts to NaN ');

const isNan1 = isNaN(NaN);
console.log(typeof isNan1, isNan1);

const isNan2 = isNaN('asdf');
console.log(typeof isNan2, isNan2);

const isNan3 = isNaN(undefined);
console.log(typeof isNan3, isNan3);

const isNan4 = isNaN('4');
console.log(typeof isNan4, isNan4);


console.log('--- isNaN is the same as Number then Number.isNaN');

const numA = Number(NaN);
const isNanA = isNaN(numA);
console.log(typeof isNanA, isNanA);

const numB = Number('asdf');
const isNanB = isNaN(numB);
console.log(typeof isNanB, isNanB);

const numC = Number(undefined);
const isNanC = isNaN(numC);
console.log(typeof isNanC, isNanC);

const numD = Number('4');
const isNanD = isNaN(numD);
console.log(typeof isNanD, isNanD);

```

[TOP](#debuggercises)

