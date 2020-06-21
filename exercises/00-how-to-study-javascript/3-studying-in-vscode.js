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
