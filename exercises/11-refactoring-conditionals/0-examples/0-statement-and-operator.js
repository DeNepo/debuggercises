'use strict';

/* Conditional Statement vs Conditional Operator

  the conditional operator (ternary) is similar to the conditional statement (if, else)
  both evaluate the truthiness of an expressions to decide which path to execute
  but they aren't exactly the same!

  completely understanding the difference between statements and expressions is more advanced
  but understanding how to refactor conditionals and ternaries will give you a first intuition
  the differences to understand between if (_) {_} else {_} and _ ? _ : _

  1. if/else statements don't return a value
    writing a variable assignment to the left of an if statement will throw an error
  2. you can only write expressions inside of _ ? _ : _
    declaring a variable inside of a ternary will throw an error

  there is no right answer, neither is better.  they're just different
  here are some general rules of thumb for deciding which to use

  - use a conditional statement if (_) {_} else {_} when:
    there is more complicated multi-step logic to do in either condition
  - use a ternary operator _ ? _ : _ when:
    you could assign both paths directly to a variable with no extra steps

  the following examples and exercises should help to understand this difference
  as you study the examples, pay close attention to how many steps each function takes!

*/


// two things that don't work

const ifCondition = false;
const ifResult = if (value) {
  'truthy';
} else {
  'falsy';
}

const ternaryCondition = false;
ternaryCondition
  ? const ternaryResult = 'truthy'
  : const ternaryResult = 'falsy';
