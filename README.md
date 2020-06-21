# Debuggercises

Welcome to programming!

## Index

- [Learning Objectives](#learning-objectives)
- [Helpful Hints](#helpful-hints)
  - [Read, Modify, Create](#read-modify-create)
- [Study Links](#study-links)
- [How to Study](#how-to-study)
  - [`npm run start`](#npm-run-start)
  - ['localhost:3000`](#localhost3000)
- [How to Review](#how-to-review)
- [`/review`](./review/README.md)

---

## Learning Objectives

### Debugging Skills

- `console.log`
  - Printing values to understand what _did_ happen in your code
  - _Always print the **type** AND the **value**_
- `console.assert`
  - Asserting values to _expect_ what _should_ happen in your code
  - Understand how to use `===` to assert values in memory
- Stepping through code execution
  - Using debugging tools to execute your code one step at a time
  - Predict which line of code will execute next
  - Explain and understand how each line of code changes what is in memory
  - Predict what will change in memory after each step of execution
- The `debugger` statement
- Using professional JS debugging tools
  - Browser Debugger
  - VSCode Debugger
- Using learning-focused debugging tools
  - JS Tutor

### JavaScripting

These exercises cover the basic language features of JavaScript, but is not a tutorial introduction to the JS language. The focus is on how to _interact with_ JavaScript one snippet at a time.  A better way to understand these exercises is to talk about what they're not:

__These exercises are not coding problems__

You won't be asked to solve difficult or complicated problems.  The solutions to all of these exercises are fairly simple, rarely more than one or two operators and often even simpler than that.  Finding the right spot to type the right word or operator is not as easy as it sounds!

What is complex about these exercises is keeping track of the values in memory, learning how different parts of the scripts interact, and using debuggers to step through your code.


[TOP](#debuggercises)

---

## Helpful Hints

- Don't rush, understand!  Programming is hard.
  - The examples and exercises will still be there to study for the rest of the week.
  - It's better to fail slowly and learn from your mistakes than to pass quickly and not understand why.
- Read through [00-how-to-study-javascript](./review/00-how-to-study-javascript/README.md)
- Practice [Pair Programming](https://study.hackyourfuture.be/collaborating/pair-programming): two people, one computer.
- Don't skip the examples!  Understanding and experimenting with working code is a very efficient way to learn programming.
- Take a look through the [Learning From Code](https://study.hackyourfuture.be/learning/learning-from-code) guide for more study tips.

### Read, Modify, Create

Think of these three steps in your learning each time you encounter a new skill or language feature in programming.  Even experienced developers go through these steps when learning new technologies!

1. __Read__: Learn to step through, predict, and understand code that other people wrote.
1. __Modify__: Learn to change the behavior of other people's code with small modifications.
1. __Create__: Learn to write your own code from an empty page.

Don't worry about making to _Create_ as fast as possible.  The more time you spend learning to _Read_ and _Modify_, the better you will master _Create_.

The exercises in this repository focus on _Read_ and _Modify_.

[TOP](#debuggercises)

---

## Study Links

- [javascript.info](https://javascript.info/)
- [Just JavaScript](https://github.com/hackyourfuturebelgium/just-javascript)
- `study.hackyourfuture.be/javascript`
  - [home page](https://study.hackyourfuture.be/javascript)
  - [fundamentals](https://study.hackyourfuture.be/javascript/fundamentas)

[TOP](#debuggercises)

---

## How to Study

All of the exercises & examples in `/exercises` are plain JS files that will run anywhere modern JavaScript will run.  The simplest way to get started is to open this repo in VSCode and the files directly in VSCode using JS the built-in debugger.

To take your studying to the next level, practice stepping through the exercises in your browser's debugger and in JS Tutor.  To do this you will need to ...

### `npm run start`

This repository comes with all the code you need to study these exercises with different web-based debugging tools.  All you need to do is:

1. Open this repository in your terminal
1. Run `npm run start`
1. And navigate to `localhost:3000` in your browser

### `localhost:3000`

When you navigate to `localhost:3000` in your browser a web page will open up that follows the same structure as `/exercises` in this repository.  There will be a drop-down for each folder in `/exercises` and two buttons for each .js file, each button will load the most recent version of that file and prepare it for study in a different debugging environment:

- `debugger`: this button will inject a `debugger` statement at the top of the script and run it in your browser's DevTools. Be sure to open your DevTools or nothing will happen
- `jsTutor`: this button generates a JS Tutor URL with your code and opens the URL in a new tab.

[TOP](#debuggercises)

---

## How to Review

> [./review/README.md](./review/README.md)

It's not enough to pass the tests once and move on!  Be sure to discuss your work with classmates, and to review your exercises over the coming months to keep your JS skills sharp.

This repository comes with a script that will help you review your work, help you and your classmates support each other, and help your coaches give you feedback on your work.


Every time you commit to `master` on GitHub, the your exercises will be evaluated and the results will be written into [/review](./review). Each README in this directory will include:

- The name of the directory
- The date and time of the last evaluation
- Links to all js files & sub-directories in that folder
  - Files that threw `ReferenceError: _ is not defined` will be marked _incomplete_
  - Files that threw any other error will be labeled _error_
  - Files with `console.assert`s (and no errors!) will be labeled as _pass_ or _fail_
  - Files with no errors or `console.assert`s will not be labeled
- A section for each .js file including
  - the name of the file
  - the status of the file (_incomplete_, _pass_, _fail_, _error_, or nothing)
  - a link to the most recent source code
  - any assertions, logs or errors from that file
  - a copy of the code that was evaluated


[TOP](#debuggercises)
