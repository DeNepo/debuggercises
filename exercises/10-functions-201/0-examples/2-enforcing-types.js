'use strict';

/* comments are only helpful if they actually describe your code!

  making sure the parameters and return values match the description is important
  at first this will feel like extra work and you will make mistakes
  but soon you will find it helps with understanding your code and with debugging
  catching mistakes before they happen is always the best way to go!

  being careful about types is so important that many languages check them automatically
  JavaScript doesn't, so you'll have to learn discipline and good practices
  eventually you will encounter tools like TypeScript that check types for you
  for now you're on your own :)

  In later modules you won't be asked to write type checks for all of your functions
  this is just for exercises in the Debugging module to help you build good habits
*/


/**
 * returns the type of any JS value
 * @param {any} value - the value to check
 * @returns {string} - the type of the parameter
 */
function findTheType(value) {
  // no need to check value because it can be any type

  const result = typeof value;

  if (typeof result !== 'string') { throw new TypeError(); }
  return result;
}

/**
 * adds two numbers together
 * @param {number} x
 * @param {number} y
 * @returns {number} the sum of x and y
 */
function add(x, y) {
  if (typeof x !== 'number') { throw new TypeError(); }
  if (typeof y !== 'number') { throw new TypeError(); }

  const result = x + y;

  if (typeof result !== 'number') { throw new TypeError(); }
  return result;
}

/**
 * compares the type and value of two parameters
 * @param {any} a
 * @param {any} b
 * @returns {boolean} result of the comparison
 */
function strictEqual(a, b) {
  // no need to check a or b, they can be any type

  const result = a === b;

  if (typeof result !== 'boolean') { throw new TypeError(); }
  return result;
}

/**
 * returns a new string with all of the letters reversed
 * @param {string} str - the string to be reversed
 * @returns {string} a new string, the parameter backwards
 */
function reverseString(str) {
  if (typeof str !== 'string') { throw new TypeError(); }

  const result = str.split('').reverse().join('');

  if (typeof result !== 'string') { throw new TypeError(); }
  return result;
}
