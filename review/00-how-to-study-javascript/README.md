# Debuggercises 

> 6/21/2020, 9:05:10 AM 

## [exercises](../README.md)/00-how-to-study-javascript 

- [/readme.js](#readmejs)  
- [/1-studying-in-js-tutor.js](#1-studying-in-js-tutorjs)  
- [/2-studying-in-devtools.js](#2-studying-in-devtoolsjs)  
- [/3-studying-in-vscode.js](#3-studying-in-vscodejs)  
- [/4-example-variable.js](#4-example-variablejs)  
- [/5-example-conditional.js](#5-example-conditionaljs)  
- [/6-example-function.js](#6-example-functionjs)  
---

## /readme.js 

>  
>
> [review source](../../exercises/00-how-to-study-javascript/readme.js)

```js
/*  HOW TO STUDY JAVASCRIPT

    Studying JavaScript will be challenging
    the debuggercises way of learning is not glamorous
    You will need to change how you study, and very importantly

      you will need to adjust your learning expectations

    Studying JavaScript will be 100% different from learning HTML and CSS.
    HTML & CSS are all about learning and applying rules
    if you apply the rules correctly, your web page looks right
    You don't need to think about what happens between your code and the final web page

    Studying JavaScript is 100% about what happens in between!
    Programming is all about inner processes.
    You should focus 100% on what happens between starting your script and the final result
    You should focus on ...


  PROGRAM STATE

    Program State is a term that refers to the values stored in memory at EACH SPECIFIC moment
    The values can change often, sometimes at every step of your program!
    Learning to program requires you to understand:
    - how does the JS engine represent memory?
    - how is your code interpreted by the JS engine?
    - how does each instruction interact with program state?
    Your first goal is learning to see what is happening inside your program at each step:

    `console.log`: The simplest way to peek into program state, but logging has some huge limitations
      you will only log what you think of logging, there's a lot more going on!
      they don't help understand how your whole program's memory is represented

    debuggers: The best way to peek inside program state, but takes some practice to use effectively
      you can see every value in memory, at every step of your program's execution
      debuggers are designed to help you understand how memory is structured in JS


  GENERAL STUDY TIPS

    Read the rest of the files in this folder to learn a good study workflow

    Spend lots of time studying the examples
    - understand of what each line of code means (technically and humanly)
    - step through them one line at a time, following the workflows in this folder
    - predict!!! Always try guess what will happen before stepping your code
    - draw on paper, read out loud, do what you can to make the code more tangible

    Write lots of comments in the exercises and examples, your future self will thank you
    - what surprised you about each line? what did you learn from that surprise?
    - what should you study deeper next time you review this topic?
    - which other examples/exercises/resources/projects used this concept?
    - what random thoughts did you have while studying this?
    - ... you know you best, write whatever helps!

    A tiny relief: the solutions to many of the _'s in the exercises are written in the debugger
    ... if you know how to look for them

    For more info, check out: https://study.hackyourfuture.be/learning/learning-from-code



  Keep at it and you'll get there, one step at a time ;)

*/

```

[TOP](#debuggercises)

---

## /1-studying-in-js-tutor.js 

>  
>
> [review source](../../exercises/00-how-to-study-javascript/1-studying-in-js-tutor.js)

```js
/* A suggested workflow for studying code in JS Tutor

  Getting Ready
  0 - start up the study site
    A - open this repo in your terminal and enter `npm run start`
    B - open `localhost:3000` in your browser

  Studying
  1 - find the file you want to study and click the "jsTutor" button
    - be sure to click to "<< First" arrow so you start at the beginning!
  2 - find the line of code with the red arrow pointing to it
    - read it out loud to yourself in meaningful human language
    - your personal vocabulary will take a while to appear, Programming with Mosh videos will help
  3 - for each step in the JS Tutor visualization:
    A - before pressing the "Next >>" button ask yourself (out loud if possible)
        - "which line will be executed next?"
        - "will this next line ...
            ... read from memory?"
            ... write to memory?" (careful, it's possible to do both!)
            ... log to the console?"
            ... create a new frame?" (ie. call a function)
            ... create a new block scope?"
            ... decide the flow of my program?" (ie. if, while, for)
        - "what will the diagram on the right look like after this step is finished?"
        - Pro Tip: write and draw your predictions on a piece of paper! (really, do this.  it helps)
    B - press "Next >>" and check if you were right or wrong
    C - repeat
  4 - go back to VSCode and make any changes to your .js file
  5 - repeat

*/

```

[TOP](#debuggercises)

---

## /2-studying-in-devtools.js 

>  
>
> [review source](../../exercises/00-how-to-study-javascript/2-studying-in-devtools.js)

```js
/* A suggested workflow for studying code in your DevTools' debugger

  Getting Ready
  0 - start up the study site
    A - open this repo in your terminal and enter `npm run start`
    B - open `localhost:3000` in your browser
  1 - open and configure your DevTools (this will take some searching and practice)
    - move it to the right or left of your browser
    - open the "sources" tab
    - set your devtools to pause on exceptions
    - hide the navigator (the menu on the left with this page's scripts)
    - in the right panel, collapse the section called "threads" (if it's there)
    - open the console in the drawer (that part down at the bottom)

  Studying
  2 - find the file you want to study and click the "debugger" button
  3 - find the highlighted line of code (this is the first line that will be executed)
  4 - for each step in your script's execution:
    A - before pressing the "Step" button (->*) button ask yourself (out loud if possible)
        - "which line will be executed next?"
        - "will this next line ...
            ... read from memory?"
            ... write to memory?"  (careful, it's possible to do both!)
            ... log to the console?"
            ... create a new level in the callstack?" (ie. call a function)
            ... create a new block scope?"
            ... decide the flow of my program?" (ie. if, while, for)
        - "what will the memory panel on the right look like after this step is finished?"
        - Pro Tip: write and draw your predictions on a piece of paper! (really, do this.  it helps)
    B - press "Step" button (->*) and check if you were right or wrong
    C - repeat
  5 - go back to VSCode and make any changes to your .js file
  6 - repeat

  Note: all the different stepping buttons in the debugger? try them all!

*/

```

[TOP](#debuggercises)

---

## /3-studying-in-vscode.js 

>  
>
> [review source](../../exercises/00-how-to-study-javascript/3-studying-in-vscode.js)

```js
/* A suggested workflow for studying code in VSCode's debugger

  Getting Ready
  0 - open the integrated VSC terminal and select the DEBUG CONSOLE
  1 - place a breakpoint at the beginning of the file
    - do this by clicking on the red dot to the left of the first line


  Studying
  2 - click on the "run" tab in the top menu, then select "Start Debugging"
  2 - find the highlighted line of code
    - read it out loud to yourself in meaningful human language
    - your personal vocabulary will take a while to appear, Programming with Mosh videos will help
  3 - for each step in the program:
    A - before pressing the "Step Into" button ask yourself (out loud if possible)
        - "which line will be executed next?"
        - "will this next line ...
            ... read from memory?"
            ... write to memory?" (careful, it's possible to do both!)
            ... log to the console?"
            ... create a new frame?" (ie. call a function)
            ... create a new block scope?"
            ... decide the flow of my program?" (ie. if, while, for)
        - "what will the panel on the left look like after this step is finished?"
        - Pro Tip: write and draw your predictions on a piece of paper! (really, do this.  it helps)
    B - press "Step Into" and check if you were right or wrong
    C - repeat
  4 - make any changes to your .js file
  5 - repeat

*/

```

[TOP](#debuggercises)

---

## /4-example-variable.js 

>  
>
> [review source](../../exercises/00-how-to-study-javascript/4-example-variable.js)

```txt
LOG: red
```

```js
// 1: this step will not read or write from memory
//  it won't change anything in memory
'use strict';

/* 2: this step will write to memory
  a variable named aColor will be declared
    there will be a new variable listed in memory
  it will be assigned the value false
    "red" will be written next to it
*/
const aColor = 'red';

/* 3: this step will read from memory
  the value of aColor will be logged to the console
  'red' will be printed
  nothing will change in memory
*/
console.log(aColor);

```

[TOP](#debuggercises)

---

## /5-example-conditional.js 

>  
>
> [review source](../../exercises/00-how-to-study-javascript/5-example-conditional.js)

```txt
LOG: path 1
```

```js
// 1: this step will not read or write from memory
//  it won't change anything in memory
'use strict';

/* 2: this step will write to memory
  a variable named condition will be declared
    there will be a new variable listed in memory
  it will be assigned the value false
    false will be written next to it
*/
let condition = false;

/* 3: this step will write to memory
  condition will be reassigned the value true
    the listing for condition will now contain true
*/
condition = true;

/* 4: this step will read from memory
      this step will decide which block of code is executed next
  read the value from the variable condition and check if it's truthy
  use this information to decide which path to execute
    a new block scope will be opened
    in this case with no locally declared variables
*/
if (condition) {
  /* 5: this step will write to memory
    reassign the variable condition
      it's entry in memory will change
    give it the value "path 1"
      that will now be displayed in the memory listing
  */
  condition = 'path 1';
} else {
  condition = 'path 2';
}

/* 6: this step will read from memory
  the value of aColor will be logged to the console
  'red' will be printed
*/
console.log(condition);

```

[TOP](#debuggercises)

---

## /6-example-function.js 

>  
>
> [review source](../../exercises/00-how-to-study-javascript/6-example-function.js)

```js
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

```

[TOP](#debuggercises)

