'use strict';

// console.assert is a good way to test your understanding of code
//  the idea is to write what you expect the value to be
//  then check your guess with console.assert

console.log('-- examples --');

const comparison1 = 4 === 4.0;
const isTrue1 = comparison1 === true;
console.assert(isTrue1, 'Assertion 1');

const comparison2 = 4 === '4';
const isTrue2 = comparison2 === false;
console.assert(isTrue2, 'Assertion 2');

const comparison3 = "xyz" === `xyz`;
const isTrue3 = comparison3 === true;
console.assert(isTrue3, 'Assertion 3');


// exercises at HYF will use comparison and assert
// take a second to figure out how this works:
//  replace _ with a value to pass the assertions
console.log('-- practice exercises --');

const comparison4 = NaN === NaN;
const isTrue4 = comparison4 === _;
console.assert(isTrue4, 'Assertion 4');

const comparison5 = (typeof 4) === (typeof '4');
const isTrue5 = comparison5 === _;
console.assert(isTrue5, 'Assertion 5');
