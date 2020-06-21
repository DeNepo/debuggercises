// 1: this step will not read or write from memory
//  it won't change anything in memory
'use strict';

/* 2: this step will write to memory
  a variable named typeCheck will be declared
  a new function is declared and assigned to typeCheck
*/
const typeCheck = (parameter) => {

  /* 5: this step will write to memory
    the local variable result will be assigned a value
    the typeof argument will be evaluated on the parameter
      parameter: true
      --> "boolean"
    "boolean" will be assigned to the variable result
  */
  const result = typeof parameter;

  /* 6: this step will read from memory
    a return value will be determiend for this function call
    the value will be read from the result variable
    --> "boolean"
  */
  return result;

  /* 7: this step reads & writes memory
    the return value for this frame is read
    and assigned to the outer scope variable returnedValue
    the frame will close
  */
};


/* 3: this step will write to memory
  a variable named argument will be declared
  it will be assigned the value true
*/
const arg = true;


/* 4: this step will read from memory (argument)
      a new frame in memory will be opened
      (on JS Tutor, a new box)
      (in VSCode or DevTools, a new entry on the callstack)

  call the function typeCheck passing
    the value from the variable arg will be passed as arugment
  the new local scope will have two variables
    parameter: ture
    result: undefined (it will get it's value later)
*/
const returnedValue = typeCheck(arg);
