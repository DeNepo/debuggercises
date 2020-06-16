# Debuggercises 

## /exercises/01-variables/examples 

> 6/16/2020, 11:22:08 AM 

[../README.md](../README.md)

- [/1-declaration-assignment-reassignment.js](#1-declaration-assignment-reassignmentjs)  
- [/2-reusing-variables.js](#2-reusing-variablesjs)  
- [/3-const-vs-let.js](#3-const-vs-letjs) - _error_ 

---

## /1-declaration-assignment-reassignment.js 

>  
>
> [review source](../../../exercises/01-variables/examples/1-declaration-assignment-reassignment.js)

```txt
LOG: undefined
LOG: first value
LOG: second value
LOG: hi!
LOG: bye!
```

```js
'use strict';

// Psst ... "open in JS Tutor" might be helpful

// DECLARING a variable creates a new named entry in memory:
let variable;
// variables store undefined by default if you do not assign a value
console.log(variable);

// after a variable is DECLARED, you can ASSIGN a value to it:
variable = 'first value';
console.log(variable);

// later on you can REASSIGN it a new value:
variable = 'second value';
console.log(variable);

// It is also possible to declare AND assign in one step:
let anotherVariable = 'hi!';
console.log(anotherVariable);

// this variable can also be reassigned:
anotherVariable = 'bye!';
console.log(anotherVariable);

```

[TOP](#debuggercises)

---

## /2-reusing-variables.js 

>  
>
> [review source](../../../exercises/01-variables/examples/2-reusing-variables.js)

```txt
LOG: oak
LOG: oak bed
LOG: oak bed frame
```

```js
'use strict';

// you can use values stored in one variable to assign a value to another

let wood = 'oak';
console.log(wood);

let furniture = wood + ' bed';
console.log(furniture);

// the value of a variable can be used to create a new value for the same variable

furniture = furniture + ' frame';
console.log(furniture);

```

[TOP](#debuggercises)

---

## /3-const-vs-let.js 

> error 
>
> [review source](../../../exercises/01-variables/examples/3-const-vs-let.js)

```txt
UNCAUGHT: TypeError: Assignment to constant variable.
    at Object.<anonymous> (  ...  /exercises/01-variables/examples/3-const-vs-let.js:19:19)
    at Module._compile (internal/modules/cjs/loader.js:1200:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1220:10)
    at Module.load (internal/modules/cjs/loader.js:1049:32)
    at Function.Module._load (internal/modules/cjs/loader.js:937:14)
    at Module.require (internal/modules/cjs/loader.js:1089:19)
    at require (internal/modules/cjs/helpers.js:73:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:12:7)
    at Object.<anonymous> (  ...  /scripts/review.js:106:1)
    at Module._compile (internal/modules/cjs/loader.js:1200:30) 
```

```js
'use strict';

// const is short for "constant".  a variable that never changes


// const variables cannot be declared without assigning a value
// this will throw an error
//  "Missing initializer in const declaration"
//  this is a "creation phase" error, meaning the code will not even execute!
// uncomment the next two lines of code to get the error

// const constantVariable1;
// console.log(constantVariable1);

// const variables also cannot be reassigned
// this will throw an error
//  "Assignment to constant variable"
const constantVariable2 = 'constant value';
constantVariable2 = 'new value';
console.log(constantVariable2);


// all of these things are possible with let

// declare and assign
let letVariable1 = 'value 1';
console.log(letVariable1);

// reassign
letVariable1 = 'value 2';
console.log(letVariable1);

// declare without assigning
let letVariable2;
console.log(letVariable2);

/*
  the exercises in the following slides will use let to reassign values
  this is to help you understand how variables work in memory.

  when writing your own code, it is best to always use const.
  it will take some practice to write code like this, but is worth it.
  programs with only const are easier to understand and debug
*/

```

[TOP](#debuggercises)

