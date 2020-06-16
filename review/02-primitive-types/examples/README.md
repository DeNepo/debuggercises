# Debuggercises 

## /exercises/02-primitive-types/examples 

> 6/16/2020, 8:02:11 AM 

[../README.md](../README.md)

- [/boolean-undefined-null.js](#boolean-undefined-nulljs)  
- [/number.js](#numberjs)  
- [/string.js](#stringjs)  
- [/typeof.js](#typeofjs)  

---

## /boolean-undefined-null.js 

>  
>
> [review source](../../../exercises/02-primitive-types/examples/boolean-undefined-null.js)

```txt
LOG: boolean  true
LOG: boolean  false
LOG: undefined  undefined
LOG: object  null
```

```js
'use strict';

// the final 3 types are much simpler than Strings and Numbers

// there are only 2 "boolean" values in JavaScript
const booleanTrue = true;
console.log(typeof booleanTrue, booleanTrue);

const booleanFalse = false;
console.log(typeof booleanFalse, booleanFalse);


// there is one value with type 'undefined'
const undefinedUndefined = undefined;
console.log(typeof undefinedUndefined, undefinedUndefined);


// there is one null value: null
//  null's type is unexpectedly 'object'
const objectNull = null;
console.log(typeof objectNull, objectNull);

```

[TOP](#debuggercises)

---

## /number.js 

>  
>
> [review source](../../../exercises/02-primitive-types/examples/number.js)

```txt
LOG: number  1
LOG: number  0
LOG: number  -1
LOG: number  Infinity
LOG: number  NaN
LOG: number  1000
```

```js
'use strict';

// There are many kinds of numbers in JS
// instead of guessing, use typeof!

const numA = 1;
console.log(typeof numA, numA);

const numB = 0.0;
console.log(typeof numB, numB);

const numC = -1;
console.log(typeof numC, numC);

const numD = Infinity;
console.log(typeof numD, numD);

const numE = NaN;
console.log(typeof numE, numE);

const numF = 1e3;
console.log(typeof numF, numF);

```

[TOP](#debuggercises)

---

## /string.js 

>  
>
> [review source](../../../exercises/02-primitive-types/examples/string.js)

```txt
LOG: string  
LOG: string  0
LOG: string  false
LOG: string  undefined
LOG: string  null
LOG: string  boolean
LOG: string  number
LOG: string  abc
LOG: string  cba
LOG: string  , 0, false, undefined, null
```

```js
'use strict';

// strs are anything between quotations

const str1 = '';
console.log(typeof str1, str1);

const str2 = '0';
console.log(typeof str2, str2);

const str3 = 'false';
console.log(typeof str3, str3);

const str4 = 'undefined';
console.log(typeof str4, str4);

const str5 = 'null';
console.log(typeof str5, str5);

const str6 = 'boolean';
console.log(typeof str6, str6);

const str7 = 'number';
console.log(typeof str7, str7);


// you can concatenate strings with +
const abc = 'a' + 'b' + 'c';
console.log(typeof abc, abc);

const cba = "c" + "b" + "a";
console.log(typeof cba, cba);


// if you use ``, strings can be built using ${}
// this is called "template literals"
const allOfThem = `${str1}, ${str2}, ${str3}, ${str4}, ${str5}`;
console.log(typeof allOfThem, allOfThem);


```

[TOP](#debuggercises)

---

## /typeof.js 

>  
>
> [review source](../../../exercises/02-primitive-types/examples/typeof.js)

```txt
LOG: string  
LOG: number  0
LOG: boolean  false
LOG: undefined  undefined
LOG: object  null
```

```js
'use strict';

// there are 5 main primitive types in JavaScript
// the typeof operator will tell you what type a value is

// types are one of the most foundational concepts in programming
//  it's a good practice to log the type and the value
//  this will help you catch your mistakes
//  and help you build a better understanding of JS

const stringValue = '';
console.log(typeof stringValue, stringValue);

const numberValue = 0;
console.log(typeof numberValue, numberValue);

const booleanValue = false;
console.log(typeof booleanValue, booleanValue);

const undefinedValue = undefined;
console.log(typeof undefinedValue, undefinedValue);

const nullValue = null;
console.log(typeof nullValue, nullValue);

```

[TOP](#debuggercises)

