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
