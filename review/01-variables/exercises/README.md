# Debuggercises 

## /exercises/01-variables/exercises 

> 6/16/2020, 11:22:08 AM 

[../README.md](../README.md)

- [/1-let.js](#1-letjs) - _incomplete_ 
- [/2-let.js](#2-letjs) - _incomplete_ 
- [/3-let-or-const.js](#3-let-or-constjs) - _incomplete_ 
- [/4-let-or-const.js](#4-let-or-constjs) - _incomplete_ 
- [/5-let-or-const.js](#5-let-or-constjs) - _incomplete_ 

---

## /1-let.js 

> incomplete 
>
> [review source](../../../exercises/01-variables/exercises/1-let.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/01-variables/exercises/1-let.js:8:1)
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

// practice using variables declared with let
//  fill in the blanks to log the commented values
// and don't just write the correct answer directly!
//  you should use firstFiveLetters to fill in one blank for each step

_;
console.log(firstFiveLetters); // should log "c"

firstFiveLetters = _ + _;
console.log(firstFiveLetters); // should log "bc"

firstFiveLetters = _ + _;
console.log(firstFiveLetters); // should log "bcd"

firstFiveLetters = _ + _;
console.log(firstFiveLetters); // should log "abcd"

firstFiveLetters = _ + _;
console.log(firstFiveLetters); // should log "abcde"

```

[TOP](#debuggercises)

---

## /2-let.js 

> incomplete 
>
> [review source](../../../exercises/01-variables/exercises/2-let.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/01-variables/exercises/2-let.js:12:1)
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

// practice using variables declared with let
//  fill in the blanks to log the commented values
// and don't just write the correct answer directly!
//  practice re-using values stored in variables to get the correct value

let fruit = 'banana';
let desert = 'cake';
let topping = 'frosting';

_;
console.log(desert); // should log 'chocolate cake'

_;
console.log(desert); // should log 'chocolate cake with frosting'

_;
console.log(desert); // should log 'chocolate cake with frosting and banana'

```

[TOP](#debuggercises)

---

## /3-let-or-const.js 

> incomplete 
>
> [review source](../../../exercises/01-variables/exercises/3-let-or-const.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/01-variables/exercises/3-let-or-const.js:19:1)
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

/* declare and assign variables as described in the comments

  pay close attention to how each variable is used!
  - is a variable assigned a value when it is declared?
  - is a variable reassigned later in the script?

  your challenge is to decide whether to use let or to use const
  - use let if
    the variable is declared without an assignment
    or the variable is ever reassigned later in the script
  - use const if
    the variable is declared with a value and never reassigned

*/

// declare a variable named aTree, don't assign a value!
_;
console.log(aTree);

// assign the value "birch" to the variable aTree
_;
console.log(aTree);

// declare a variable named turtle and assign it the name "myrtle"
_;
console.log(turtle);

// reassign aTree to "aspen"
_;
console.log(aTree)

// declare a variable named aColor with the value "blue"
_;
console.log(aColor);

// log the value of turtle
_;

// reassign aTree to "oak"
_;
console.log(aTree);

// reassign aColor to "orange"
_;
console.log(aColor);

```

[TOP](#debuggercises)

---

## /4-let-or-const.js 

> incomplete 
>
> [review source](../../../exercises/01-variables/exercises/4-let-or-const.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/01-variables/exercises/4-let-or-const.js:19:1)
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

/* declare and assign variables as described in the comments

  pay close attention to how each variable is used!
  - is a variable assigned a value when it is declared?
  - is a variable reassigned later in the script?

  your challenge is to decide whether to use let or to use const
  - use let if
    the variable is declared without an assignment
    or the variable is ever reassigned later in the script
  - use const if
    the variable is declared with a value and never reassigned

*/


_;
console.log(x); // should print 'a'

_;
console.log(y); // should print 'b'

console.log(x); // should print 'a'

_;
console.log(z); // should print undefined

console.log(y); // should print 'b'

_;
console.log(z); // should print 'c'

_;
console.log(y); // should print 'bd'

console.log(x); // should print 'a'

```

[TOP](#debuggercises)

---

## /5-let-or-const.js 

> incomplete 
>
> [review source](../../../exercises/01-variables/exercises/5-let-or-const.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/01-variables/exercises/5-let-or-const.js:18:1)
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

/* declare and assign variables as described in the comments

  pay close attention to how each variable is used!
  - is a variable assigned a value when it is declared?
  - is a variable reassigned later in the script?

  your challenge is to decide whether to use let or to use const
  - use let if
    the variable is declared without an assignment
    or the variable is ever reassigned later in the script
  - use const if
    the variable is declared with a value and never reassigned

*/

_;
console.log(furniture); // should log 'chair'

_;
console.log(building); // should log 'house'

furniture = 'table';
console.log(_); // should log 'table'

_;
console.log(food); // should log undefined

_;
console.log(food); // should log 'apple'

console.log(_); // should log 'house'

console.log(_); // should log 'table'

_;
console.log(_); // should log 'apple, pear'

```

[TOP](#debuggercises)

