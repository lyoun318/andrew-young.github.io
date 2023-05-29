/*
* CONTROL FLOW:
*
* 0. Control flow refers to the order in which statements are executed in a program.
*    JavaScript provides control flow statements to control the execution based on conditions.
*
* 1. If Statement:
*    - Executes a block of code if a specified condition is true.
*    - Syntax:
*      if (condition) {
*        // code to be executed if condition is true
*      }
*
* 2. Else-If Statement:
*    - Provides additional conditions to be checked if the previous if statement condition is false.
*    - Syntax:
*      if (condition1) {
*        // code to be executed if condition1 is true
*      } else if (condition2) {
*        // code to be executed if condition2 is true, but only if condition 1 is false
*      if (condition3){
*        // code to be executed if condition3 is true, even if condition1 or condition2 are also true
*      }
*
* 3. Else Statement:
*    - Specifies a block of code to be executed if the condition of the previous if or else-if statement is false.
*    - Syntax:
*      if (condition) {
*        // code to be executed if condition is true
*      } else {
*        // code to be executed if condition is false (i think of this as my default case)
*      }
*
* 4. Switch Statement:
*    - Evaluates an expression and executes a block of code based on a matching case.
*    - Syntax:
*      switch (expression) {
*        case value1:
*          // code to be executed if expression matches value1
*          break;
*        case value2:
*          // code to be executed if expression matches value2
*          break;
*        default:
*          // code to be executed if expression does not match any case
*      }
*
*/

// If Statement
var x = 5;
if (x > 0) {
  console.log('x is positive');
}

// Else-If Statement
var num = 10;
if (num > 0) {
  console.log('Positive');
} else if (num < 0) {
  console.log('Negative');
} else {
  console.log('Zero');
}

// Else Statement
var hour = 13;
if (hour < 12) {
  console.log('Good morning');
} else {
  console.log('Good afternoon');
}

// Switch Statement
var day = 'Monday';
switch (day) {
  case 'Monday':
    console.log('It is Monday');
    break;
  case 'Tuesday':
    console.log('It is Tuesday');
    break;
  default:
    console.log('It is another day');
}