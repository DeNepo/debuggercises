# Debuggercises 

> 6/21/2020, 9:05:10 AM 

## [exercises](../../README.md)/[21-refactoring-expressions](../README.md)/0-examples 

- [/0-expanding.js](#0-expandingjs)  
- [/1-types-and-comparisons.js](#1-types-and-comparisonsjs)  
- [/2-arithmetic.js](#2-arithmeticjs)  
- [/3-unary-operators.js](#3-unary-operatorsjs)  
- [/4-ternaries.js](#4-ternariesjs)  
- [/5-and.js](#5-andjs)  
- [/6-or.js](#6-orjs)  
- [/7-or-and-or.js](#7-or-and-orjs)  
- [/8-all-together.js](#8-all-togetherjs)  
---

## /0-expanding.js 

>  
>
> [review source](../../../exercises/21-refactoring-expressions/0-examples/0-expanding.js)

```txt
LOG: 0:  1
LOG: 1:  1
LOG: 2:  1
```

```js
'use strict';

/* Expanding

  expanding is a special refactoring technique (rewriting code without changing it's behavior)
  the goal is to "expand" dense expressions until there is only one operation per line.
  this is a skill designed for learning, it's not a common professional practice

  at first expanding will feel like more work than help, but keep at it!
  learning to expand complex expressions will help you to
  - feel comfortable working with dense and strange code
  - study and understand new code
  - track down bugs (expanded expressions are easier to read in the debugger)
  - interpret code's strategy
  - write your own code

  these exercises are quite challenging and abstract
  if you feel like you aren't making any progress with them, that's understandable
  move on to something else for a while and come back to these another day, or week,   or month :)

*/

/* Learning Objectives

  - not being intimidated by long and dense expressions
  - breaking down dense code into small, understandable pieces
  - gaining confidence when refactoring and working with code
  - working code without completely understanding it ... in order to understand it
  - being able to mentally step through complex expressions
  - refactoring code to be understandable and debuggable
  - statements vs. expressions
    https://dev.to/promhize/javascript-in-depth-all-you-need-to-know-about-expressions-statements-and-expression-statements-5k2
*/

/* Incremental Refactoring

  It's very easy to make little mistakes when you are refactoring code.
  This isn't so bad if you only made one or two changes,
    it's not too hard to revisit the couple lines you changed and find where you messed up.
  That's a whole different story if you're making a bunch of changes.
  It can be nearly impossible to find and fix your mistakes without returning to your original code!

  To avoid this it's good to practice incremental refactoring:
    Making one small change at a time and re-running your tests after each change.

*/


// a basic example with arithmetic

{ // original expression
  const result = 5 / (12 % 7);
  console.log('0:', result);
}

{ // refactor 1st operation
  // 4 + 5 / (12 % 7);
  const step1 = 12 % 7;
  const result = 5 / step1;
  console.log('1:', result);
}

{ // refactor 2nd operation
  // 4 + 5 / (12 % 7);
  const step1 = 12 % 7;
  const step2 = 5 / step1;
  const result = step2;
  console.log('2:', result);
}

```

[TOP](#debuggercises)

---

## /1-types-and-comparisons.js 

>  
>
> [review source](../../../exercises/21-refactoring-expressions/0-examples/1-types-and-comparisons.js)

```js
'use strict';

// 0: original expression
const originalExpression = (a) => Number(Boolean(a) === true);

// 1: explicit return
const explicitReturn = (a) => {
  return Number(Boolean(a) === true);
};

// 2: refactor 1st operation
const refactorOperation1 = (a) => {
  const step1 = Boolean(a);
  return Number(step1 === true);
};

// 3: refactor 2st operation
const refactorOperation2 = (a) => {
  const step1 = Boolean(a);
  const step2 = step1 === true;
  return Number(step2);
};

// 4: refactor 3rd operation
const refactorOperation3 = (a) => {
  const step1 = Boolean(a);
  const step2 = step1 === true;
  const step3 = Number(step2);
  return step3;
};

// done!

```

[TOP](#debuggercises)

---

## /2-arithmetic.js 

>  
>
> [review source](../../../exercises/21-refactoring-expressions/0-examples/2-arithmetic.js)

```js
'use strict';

// 0: original expression
const originalExpression = (a, b) => a * (b + b) / a;

// 1: explicit return
const explicitReturn = (a, b) => {
  return a * (b + b) / a;
};

// 2: refactor 1st operation
const refactorOperation1 = (a, b) => {
  const step1 = b + b;
  return a * (step1) / a;
};

// 3: refactor 2st operation
const refactorOperation2 = (a, b) => {
  const step1 = b + b;
  const step2 = a * step1;
  return step2 / a;
};

// 4: refactor 3rd operation
const refactorOperation3 = (a, b) => {
  const step1 = b + b;
  const step2 = a * step1;
  const step3 = step2 / a;
  return step3;
};

// done!

```

[TOP](#debuggercises)

---

## /3-unary-operators.js 

>  
>
> [review source](../../../exercises/21-refactoring-expressions/0-examples/3-unary-operators.js)

```js
'use strict';

// unary operators (!, +, -, ++, --) are higher precedence than operators with 2 arguments (+, &&, *, )
//  PS. none of these exercises will have ++ or --
//  those operators modify variables in memory and make things sooo much more complex

// 0: original expression
const originalExpression = (a, b) => a * -(b + b) / !a;

// 1: explicit return
const explicitReturn = (a, b) => {
  return a * -(b + b) / !a;
};

// 2: refactor 1st operation
const refactorOperation1 = (a, b) => {
  // a * -(b + b) / !a;
  const step1 = b + b;
  return a * -step1 / !a;
};

// 3: refactor 2st operation
const refactorOperation2 = (a, b) => {
  // a * -(b + b) / !a;
  const step1 = b + b;
  const step2 = !a;
  return a * -step1 / step2;
};

// 4: refactor 3rd operation
const refactorOperation3 = (a, b) => {
  // a * -(b + b) / !a;
  const step1 = b + b;
  const step2 = !a;
  const step3 = -step1;
  return a * step3 / step2;
};

// 5: refactor 4rd operation
const refactorOperation4 = (a, b) => {
  // a * -(b + b) / !a;
  const step1 = b + b;
  const step2 = !a;
  const step3 = -step1;
  const step4 = a * step3;
  const step5 = step4 / step2;
  return step5;
};

```

[TOP](#debuggercises)

---

## /4-ternaries.js 

>  
>
> [review source](../../../exercises/21-refactoring-expressions/0-examples/4-ternaries.js)

```js
'use strict';

// 0: original expression
const originalExpression = (a, b) => a === b + 1 ? a * 2 * -1 : a + 2 * b;

// 1: explicit return
const explicitReturn = (a, b) => {
  return a === b + 1 ? a * 2 * -1 : a + 2 * b;
};

// 2: refactor to if statement
const refactorToIf = (a, b) => {
  // a === b + 1 ? a * 2 * -1 : a + 2 * b;
  if (a === b + 1) {
    return a * 2 * -1;
  } else {
    return a + 2 * b;
  }
};

// 3: expand the expressions, starting with the condition
/* notice: there are two step 4's !!!
  this is because the ternary operator only executes one of the two expressions provided
  it's called "short circuiting" ( remember that from way back in "Logical Operators"? ;)
  this refactor pattern accurately replicates the behavior of short-circuiting
*/
const expandConditionalBodies = (a, b) => {
  // a === b + 1 ? a * 2 * -1 : a + 2 * b;
  const step1 = b + 1;
  const step2 = a === step1;
  if (step2) {
    const step4 = a * 2;
    const step5 = step4 * -1;
    return step5;
  } else {
    const step4 = 2 * b;
    const step5 = a + step4
    return step5;
  }
}

// done!

```

[TOP](#debuggercises)

---

## /5-and.js 

>  
>
> [review source](../../../exercises/21-refactoring-expressions/0-examples/5-and.js)

```js
'use strict';

// 0: original expression
const originalExpression = (a, b) => a * 2 * -1 && a + 2 * b;

// 1: explicit return
const explicitReturn = (a, b) => {
  return a * 2 * -1 && a + 2 * b;
};

// 2: refactor to if statements
const refactorToIf = (a, b) => {
  // a * 2 * -1 && a + 2 * b;
  const leftSide = a * 2 * -1;
  if (leftSide) {
    return a + 2 * b;
  } else {
    return leftSide;
  }
};

// 3: expand the expressions and rename the variable leftSide
//   rename the variable leftSide to a step number, it will be nicer to read in the debugger
/* notice: different conditional bodies have different numbers of steps !!!
  this is because of "short circuiting" ( remember that from way back in "Logical Operators"? ;)
  this refactor pattern accurately replicates the behavior of short-circuiting
*/
const expandTheExpressions = (a, b) => {
  // a * 2 * -1 && a + 2 * b;
  const step1 = a * 2;
  const step2 = step1 * -1;
  if (step2) {
    const step3 = 2 * b;
    const step4 = a + step3;
    return step4;
  } else {
    return step2;
  }
};

// done!

```

[TOP](#debuggercises)

---

## /6-or.js 

>  
>
> [review source](../../../exercises/21-refactoring-expressions/0-examples/6-or.js)

```js
'use strict';

// 0: original expression
const originalExpression = (a, b) => a * 2 * -1 || a + 2 * b;

// 1: explicit return
const explicitReturn = (a, b) => {
  return a * 2 * -1 || a + 2 * b;
};

// 2: refactor to if statements
const refactorToIf = (a, b) => {
  // a * 2 * -1 || a + 2 * b;
  const leftSide = a * 2 * -1;
  if (leftSide) {
    return leftSide;
  } else {
    return a + 2 * b;
  }
};

// 3: expand the expressions
//   rename the variable leftSide to a step number, it will be nicer to read in the debugger
/* notice: different conditional bodies have different numbers of steps !!!
  this is because of "short circuiting" ( remember that from way back in "Logical Operators"? ;)
  this refactor pattern accurately replicates the behavior of short-circuiting
*/
const expandTheExpressions = (a, b) => {
  // a * 2 * -1 || a + 2 * b;
  const step1 = a * 2;
  const step2 = step1 * -1;
  if (step2) {
  } else {
    const step3 = 2 * b;
    const step4 = a + step3;
    return step4;
  }
};

// done!

```

[TOP](#debuggercises)

---

## /7-or-and-or.js 

>  
>
> [review source](../../../exercises/21-refactoring-expressions/0-examples/7-or-and-or.js)

```js
'use strict';

/*
  &&, || execute from left to right.
  expanding logical expressions is like writing nested conditional statements
*/

// 0: original expression
const originalExpression = (a, b) => typeof a === 'string' || typeof b === 'string' && a !== b;

// 1: explicit return
const explicitReturn = (a, b) => {
  return typeof a === 'string' || typeof b === 'string' && a !== b;
};

// 2: refactor first logical operator to a conditional
const refactorFirstLogicalOperator = (a, b) => {
  // typeof a === 'string' || typeof b === 'string' && a !== b;
  const leftSide = typeof a === 'string'
  if (leftSide) {
    return leftSide;
  } else {
    return typeof b === 'string' && a !== b;
  }
};

// 3: refactor second logical operator to a conditional
const refactorSecondLogicalOperator = (a, b) => {
  // typeof a === 'string' || typeof b === 'string' && a !== b;
  const leftSide = typeof a === 'string'
  if (leftSide) {
    return leftSide;
  } else {
    const leftSide = typeof b === 'string';
    if (leftSide) {
      return a !== b;
    } else {
      return leftSide;
    }
  }
};

// 4: expand expressions & rename variables (moving from top to bottom)
const expandExpressionsAndRename = (a, b) => {
  // typeof a === 'string' || typeof b === 'string' && a !== b;
  const step1 = typeof a;
  const step2 = step1 === 'string'
  if (step2) {
    return step2;
  } else {
    const step3 = typeof b;
    const step4 = step3 === 'string';
    if (step4) {
      const step5 = a !== b;
      return step5;
    } else {
      return step4;
    }
  }
};

// done!

```

[TOP](#debuggercises)

---

## /8-all-together.js 

>  
>
> [review source](../../../exercises/21-refactoring-expressions/0-examples/8-all-together.js)

```js
'use strict';

// 0: original expression
const originalExpression = (a, b) => typeof a === 'boolean' ? 1 + a || 1 + b : !a && !b;

// 1: explicit return
const explicitReturn = (a, b) => {
  return typeof a === 'boolean' ? 1 + a || 1 + b : !a && !b;
};

// 2: expand ternary operator
const expandTernaryOperator = (a, b) => {
  // typeof a === 'boolean' ? 1 + a || 1 + b : !a && !b;
  if (typeof a === 'boolean') {
    return 1 + a || 1 + b
  } else {
    return !a && !b;
  }
};

// 3: expand nested logical operators
const expandNestedLogicalOperators = (a, b) => {
  // typeof a === 'boolean' ? 1 + a || 1 + b : !a && !b;
  if (typeof a === 'boolean') {
    const left = 1 + a;
    if (left) {
      return left;
    } else {
      return 1 + b;
    }
  } else {
    const left = !a;
    if (left) {
      return !b;
    } else {
      return left;
    }
  }
};

// 4: expand remaining expressions and rename left variables
const expandRemainingExpressions = (a, b) => {
  // typeof a === 'boolean' ? 1 + a || 1 + b : !a && !b;
  const step1 = typeof a;
  const step2 = step1 === 'boolean';
  if (step2) {
    const step3 = 1 + a;
    if (step3) {
      return step3;
    } else {
      const step4 = 1 + b;
      return step4;
    }
  } else {
    const step3 = !a;
    if (step3) {
      const step4 = !b;
      return step4;
    } else {
      return step3;
    }
  }
};

```

[TOP](#debuggercises)

