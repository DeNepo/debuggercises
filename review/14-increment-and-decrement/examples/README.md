# Debuggercises 

> 6/21/2020, 9:05:10 AM 

## [exercises](../../README.md)/[14-increment-and-decrement](../README.md)/examples 

- [/postfix-decrement.js](#postfix-decrementjs)  
- [/postfix-increment.js](#postfix-incrementjs)  
- [/prefix-decrement.js](#prefix-decrementjs)  
- [/prefix-increment.js](#prefix-incrementjs)  
---

## /postfix-decrement.js 

>  
>
> [review source](../../../exercises/14-increment-and-decrement/examples/postfix-decrement.js)

```txt
LOG: postfix decrement: x--
LOG: initial x:  number  0  

LOG: 1. return:  number  0
LOG: 1. new x:  number  -1  

LOG: 2. return:  number  -1
LOG: 2. new x:  number  -2  

LOG: 3. return:  number  -2
LOG: 3. new x:  number  -3  

LOG: 4. return:  number  -3
LOG: 4. new x:  number  -4  

```

```js
'use strict';

console.log('postfix decrement: x--')

/* two things happen when you use x-- (in this order!)
  a. return the value stored by x
  b. reassign x to it's current value minus 1
*/

let x = 0;
console.log('initial x:', typeof x, x, '\n');

const _1_return = x--;
const _1_new_x = x;
console.log('1. return:', typeof _1_return, _1_return);
console.log('1. new x:', typeof _1_new_x, _1_new_x, '\n');

const _2_return = x--;
const _2_new_x = x;
console.log('2. return:', typeof _2_return, _2_return);
console.log('2. new x:', typeof _2_new_x, _2_new_x, '\n');

const _3_return = x--;
const _3_new_x = x;
console.log('3. return:', typeof _3_return, _3_return);
console.log('3. new x:', typeof _3_new_x, _3_new_x, '\n');

const _4_return = x--;
const _4_new_x = x;
console.log('4. return:', typeof _4_return, _4_return);
console.log('4. new x:', typeof _4_new_x, _4_new_x, '\n');


```

[TOP](#debuggercises)

---

## /postfix-increment.js 

>  
>
> [review source](../../../exercises/14-increment-and-decrement/examples/postfix-increment.js)

```txt
LOG: postfix increment: x++
LOG: initial x:  number  0  

LOG: 1. return:  number  0
LOG: 1. new x:  number  1  

LOG: 2. return:  number  1
LOG: 2. new x:  number  2  

LOG: 3. return:  number  2
LOG: 3. new x:  number  3  

LOG: 4. return:  number  3
LOG: 4. new x:  number  4  

```

```js
'use strict';

console.log('postfix increment: x++')

/* two things happen when you use x++ (in this order!)
  a. return the value stored by x
  b. reassign x to it's current value plus 1
*/

let x = 0;
console.log('initial x:', typeof x, x, '\n');

const _1_return = x++;
const _1_new_x = x;
console.log('1. return:', typeof _1_return, _1_return);
console.log('1. new x:', typeof _1_new_x, _1_new_x, '\n');

const _2_return = x++;
const _2_new_x = x;
console.log('2. return:', typeof _2_return, _2_return);
console.log('2. new x:', typeof _2_new_x, _2_new_x, '\n');

const _3_return = x++;
const _3_new_x = x;
console.log('3. return:', typeof _3_return, _3_return);
console.log('3. new x:', typeof _3_new_x, _3_new_x, '\n');

const _4_return = x++;
const _4_new_x = x;
console.log('4. return:', typeof _4_return, _4_return);
console.log('4. new x:', typeof _4_new_x, _4_new_x, '\n');


```

[TOP](#debuggercises)

---

## /prefix-decrement.js 

>  
>
> [review source](../../../exercises/14-increment-and-decrement/examples/prefix-decrement.js)

```txt
LOG: prefix decrement: --x
LOG: initial x:  number  0  

LOG: 1. return:  number  -1
LOG: 1. new x:  number  -1  

LOG: 2. return:  number  -2
LOG: 2. new x:  number  -2  

LOG: 3. return:  number  -3
LOG: 3. new x:  number  -3  

LOG: 4. return:  number  -4
LOG: 4. new x:  number  -4  

```

```js
'use strict';

console.log('prefix decrement: --x')

/* two things happen when you use --x (in this order!)
  a. reassign x to it's current value minus 1
  b. return the value stored by x
*/

let x = 0;
console.log('initial x:', typeof x, x, '\n');

const _1_return = --x;
const _1_new_x = x;
console.log('1. return:', typeof _1_return, _1_return);
console.log('1. new x:', typeof _1_new_x, _1_new_x, '\n');

const _2_return = --x;
const _2_new_x = x;
console.log('2. return:', typeof _2_return, _2_return);
console.log('2. new x:', typeof _2_new_x, _2_new_x, '\n');

const _3_return = --x;
const _3_new_x = x;
console.log('3. return:', typeof _3_return, _3_return);
console.log('3. new x:', typeof _3_new_x, _3_new_x, '\n');

const _4_return = --x;
const _4_new_x = x;
console.log('4. return:', typeof _4_return, _4_return);
console.log('4. new x:', typeof _4_new_x, _4_new_x, '\n');


```

[TOP](#debuggercises)

---

## /prefix-increment.js 

>  
>
> [review source](../../../exercises/14-increment-and-decrement/examples/prefix-increment.js)

```txt
LOG: prefix increment: ++x
LOG: initial x:  number  0  

LOG: 1. return:  number  1
LOG: 1. new x:  number  1  

LOG: 2. return:  number  2
LOG: 2. new x:  number  2  

LOG: 3. return:  number  3
LOG: 3. new x:  number  3  

LOG: 4. return:  number  4
LOG: 4. new x:  number  4  

```

```js
'use strict';

console.log('prefix increment: ++x')

/* two things happen when you use ++x (in this order!)
  a. reassign x to it's current value plus 1
  b. return the value stored by x
*/

let x = 0;
console.log('initial x:', typeof x, x, '\n');

const _1_return = ++x;
const _1_new_x = x;
console.log('1. return:', typeof _1_return, _1_return);
console.log('1. new x:', typeof _1_new_x, _1_new_x, '\n');

const _2_return = ++x;
const _2_new_x = x;
console.log('2. return:', typeof _2_return, _2_return);
console.log('2. new x:', typeof _2_new_x, _2_new_x, '\n');

const _3_return = ++x;
const _3_new_x = x;
console.log('3. return:', typeof _3_return, _3_return);
console.log('3. new x:', typeof _3_new_x, _3_new_x, '\n');

const _4_return = ++x;
const _4_new_x = x;
console.log('4. return:', typeof _4_return, _4_return);
console.log('4. new x:', typeof _4_new_x, _4_new_x, '\n');


```

[TOP](#debuggercises)

