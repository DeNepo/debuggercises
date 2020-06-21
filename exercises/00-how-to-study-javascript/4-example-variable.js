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
