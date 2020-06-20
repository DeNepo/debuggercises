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

