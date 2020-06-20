'use strict';

/* Welcome to Implicit Coercion!

  this is among the most explained features of JS
  some developers like it, more developers don't
  sometimes it's helpful, usually it causes problems
  but it's not magic, you can learn it!

  The keys to understanding Implicit Coercion are
  0. pay attention to the type of every value in your program (!!!! always !!!!)
  1. understand the rules of explicit coercion (String(x), Number(x), Boolean(x), ...)
  2. learn the rules for how each JS operator coerces types "behind the scenes"

  Each operator has it's own rules for how it handles implicit coercion
  there are a lot of implicit coercion rules to learn
  but at the bottom of it all, implicit coercion is just that
  - rules you can study
  - rules you can learn

  Thinking of operators simply as built-in functions will help you to understand them

  How do you understand a function's behavior?
  - write test cases!
    the first set of exercises has you write test cases for JS operators

  How do you REALLY understand a function's behavior?
  - re-write it yourself!
    the second set of exercises has you write functions that behave the same as operators

  "What I cannot create, I do not understand." - Richard Feynman
*/

console.log('  +');

const _01_plus = '2' + 3;
console.log(typeof _01_plus, _01_plus);

const _02_plus = '2' + '3';
console.log(typeof _02_plus, _02_plus);

const _03_plus = 2 + 3;
console.log(typeof _03_plus, _03_plus);

const _04_plus = true + 3;
console.log(typeof _04_plus, _04_plus);

const _05_plus = true + '3';
console.log(typeof _05_plus, _05_plus);


console.log('  ==');

const _06_looseEquality = '3' == 3;
console.log(typeof _06_looseEquality, _06_looseEquality);

const _07_looseEquality = true == 1;
console.log(typeof _07_looseEquality, _07_looseEquality);

const _08_looseEquality = '0' == false;
console.log(typeof _08_looseEquality, _08_looseEquality);

const _09_looseEquality = null == undefined;
console.log(typeof _09_looseEquality, _09_looseEquality);

const _10_looseEquality = null == 0;
console.log(typeof _10_looseEquality, _10_looseEquality);
