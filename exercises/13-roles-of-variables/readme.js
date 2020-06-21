/* Roles of Variables

    The JavaScript language treats variables like a blank slate:
    - they can hold any type
    - you can reassign them to any other type (if it's not const)
    - and you can combine values from any variables
    But by the time you use a variable you've given it a role whether you meant to or not
    The goal of this chapter is for you start analyzing the roles of every variable you use

    There is official list of variable roles, but there are several common roles
    Learning to identify these roles in code will help understand and debug your code
    Learning to use different roles will help you develope more cleanly and effectively

    Below is an incomplete list of common roles, the most common in these exercises.
    Can you think of or find any other roles whiles studying these exercises?

      - CONSTANT: a variable that never changes after initialization
      - FLAG: a boolean variable which can be turned "on" or "off" to control program flow
      - STEPPER: changes systematically, going through a series of values for control flow
      - ACCUMULATOR: combines a series of values into a new value
      - TEMPORARY: for short-term use, generally to store a value to be used somewhere else

    Besides specific roles, it can be helpful to group variables in two general categories.
    It will take some time and practice, but with eventually you will begin to see:

      - STRATEGIC: these are variables who's values contribute directly to the final result
          these cannot be removed from your program without rethinking how to solve the problem
      - UTILITY: values stored in these variables do not contribute directly the final result
          you can refactor your code to remove the variable without rethinking your strategy


  INVESTIGATING VARIABLES

    So what can you do about this?  Ask lots of questions!
    Below is a list of questions you can ask to understand the roles of variables in your code:

    About the variable:

      1. in which scope is it declared?
      2. in which scope is it assigned?
      3. is it reassigned? if so:
        - in which scope?
        - from which variable or function call?
        - how was the old value used?
        - who will the new value be used?
      4. when, how, and why is it read?
        - is it's value returned?
        - is it's value assigned to another variable?
        - is it's value combined with others?

    A bout the value (re)assigned to the variable:

      1. what type is it?
      2. what value is it?
      3. where did it come from?
      4. how is it used?



  To learn more about variable roles visit:
    http://saja.kapsi.fi/var_roles/stud_vers/stud_Python3_eng.html
    https://en.wikibooks.org/wiki/A-level_Computing/AQA/Problem_Solving,_Programming,_Data_Representation_and_Practical_Exercise/Fundamentals_of_Programming/The_Role_of_Variables
    https://stackoverflow.com/questions/12983063/what-is-the-difference-between-a-counter-and-an-accumulator
*/
