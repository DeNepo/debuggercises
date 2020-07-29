/* A suggested workflow for studying code in your DevTools' debugger

  Getting Ready
  0 - start up the study site
    A - open this repo in your terminal and enter `npm run start`
    B - open `localhost:3000` in your browser
  1 - open and configure your DevTools (this will take some searching and practice)
    - move it to the right or left of your browser
    - open the "sources" tab
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
