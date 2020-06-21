'use strict';

// refactor this function so there's one operation per step
//  re-run the tests every time you make a change (even a tiny change!)
//  practice using tests to pace your development

/**
 * does something (il)logical
 * @param {any} a
 * @param {any} b
 * @returns {any}
 */
const bothAreFalsy = (a, b) => a || (b && (b || a));


const _1_expect = 1;
const _1_actual = bothAreFalsy(null, 1);
console.assert(Object.is(_1_actual, _1_expect), 'Test 1');

const _2_expect = '...';
const _2_actual = bothAreFalsy('...', false);
console.assert(Object.is(_2_actual, _2_expect), 'Test 2');

const _3_expect = '100';
const _3_actual = bothAreFalsy('100', 100);
console.assert(Object.is(_3_actual, _3_expect), 'Test 3');

const _4_expect = true;
const _4_actual = bothAreFalsy(true, false);
console.assert(Object.is(_4_actual, _4_expect), 'Test 4');

const _5_expect = false;
const _5_actual = bothAreFalsy(0, false);
console.assert(Object.is(_5_actual, _5_expect), 'Test 5');

const _6_expect = null;
const _6_actual = bothAreFalsy('', null);
console.assert(Object.is(_6_actual, _6_expect), 'Test 6');
