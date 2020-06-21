# Debuggercises 

> 6/21/2020, 9:05:10 AM 

## [exercises](../../README.md)/[20-operator-precedence](../README.md)/extra--syntax-trees 

- [/readme.js](#readmejs)  
- [/1-types-and-comparisons.js](#1-types-and-comparisonsjs)  
- [/2-arithmetic.js](#2-arithmeticjs)  
- [/3-unary-operators.js](#3-unary-operatorsjs)  
- [/4-ternaries.js](#4-ternariesjs)  
- [/5-and.js](#5-andjs)  
- [/6-or.js](#6-orjs)  
- [/7-or-and-or.js](#7-or-and-orjs)  
- [/8-all-together.js](#8-all-togetherjs)  
---

## /readme.js 

>  
>
> [review source](../../../exercises/20-operator-precedence/extra--syntax-trees/readme.js)

```js
/* Syntax Trees

  Like what you see in these exercises?
  Dig deeper into how programming languages are designed by learning about

  the following files aren't exercises with a specific objective
  just code for you to study with https://esprima.org/demo/parse.html
  open this folder in your browser using localhost:3000 to study these files in esprima
  and while you're there, play around a bit!
    what happens if you write a syntax error?
    what does block scope look like?
    what does a conditional statement look like?
    a for loop? a while loop?
    how are functions turned into a tree?

  hint: use the minus signs in the visualization on the right to collapse and explore
    you'll find that the operators with the highest precedent are the deepest nested!

  nice links:
    https://medium.com/@jotadeveloper/abstract-syntax-trees-on-javascript-534e33361fc7
    AST Explorer: https://astexplorer.net/#/gist/eb691ff8c76ea4c90b4e50f4b0316c3c/4e8c8778fcb805b3749ef89ba9fe5e624dd2f7dc
    Esprima Demo: https://esprima.org/demo/parse.html?code=-(b%20%2B%20b)%20%2F%20!a%3B
    how many ways can you rewrite a single expression? https://mothereff.in/operator-precedence

*/

let hello;
hello = "world";

const good = 'bye';

```

[TOP](#debuggercises)

---

## /1-types-and-comparisons.js 

>  
>
> [review source](../../../exercises/20-operator-precedence/extra--syntax-trees/1-types-and-comparisons.js)

```js
const expression = Number(Boolean(null) === true);

```

[TOP](#debuggercises)

---

## /2-arithmetic.js 

>  
>
> [review source](../../../exercises/20-operator-precedence/extra--syntax-trees/2-arithmetic.js)

```js
const expression = 12 * (14 + 1) / 2;

```

[TOP](#debuggercises)

---

## /3-unary-operators.js 

>  
>
> [review source](../../../exercises/20-operator-precedence/extra--syntax-trees/3-unary-operators.js)

```js
const expression = -3 * -(2 + 2) / !1;

```

[TOP](#debuggercises)

---

## /4-ternaries.js 

>  
>
> [review source](../../../exercises/20-operator-precedence/extra--syntax-trees/4-ternaries.js)

```js
const expression = 'a' === 'b' ? 2 * -1 : 2 * true;

```

[TOP](#debuggercises)

---

## /5-and.js 

>  
>
> [review source](../../../exercises/20-operator-precedence/extra--syntax-trees/5-and.js)

```js
const expression = null * -1 && '' + 2;

```

[TOP](#debuggercises)

---

## /6-or.js 

>  
>
> [review source](../../../exercises/20-operator-precedence/extra--syntax-trees/6-or.js)

```js
const expression = '0' * -'1' || true + 2;

```

[TOP](#debuggercises)

---

## /7-or-and-or.js 

>  
>
> [review source](../../../exercises/20-operator-precedence/extra--syntax-trees/7-or-and-or.js)

```js
const expression = typeof undefined === 'string' || typeof 'string' === 'string' && 1000 !== 1e3;

```

[TOP](#debuggercises)

---

## /8-all-together.js 

>  
>
> [review source](../../../exercises/20-operator-precedence/extra--syntax-trees/8-all-together.js)

```js
const expression = typeof 'true' === 'boolean' ? 0 || -1 : !null && !true;

```

[TOP](#debuggercises)

