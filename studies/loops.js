/*
* LOOPS:
*
* 0. Loops are used to execute a block of code repeatedly until a certain condition is met.
*    JavaScript provides different types of loops to handle various looping scenarios.
*
* 1. While Loop:
*    - Executes a block of code while a specified condition is true.
*    - Syntax:
*      while (condition) {
*        // code to be executed
*        // condition update
*      }
*
* 2. For Loop:
*    - Repeats a block of code a specified number of times.
*    - Syntax:
*      for (initialization; condition; iteration) {
*        // code to be executed
*      }
*
* 3. For-in Loop:
*    - Iterates over the properties of an object.
*    - Syntax:
*      for (variable in object) {
*        // code to be executed
*      }
*
* 4. Looping any number of times:
*    - To loop any number of times, you can use a counter variable in combination with the while or for loop.
*
* 5. Looping over an Array:
*    - You can use the length property of an Array to loop over its elements.
*    - Syntax:
*      for (var i = 0; i < array.length; i++) {
*        // code to be executed for each element
*      }
*
* 6. Looping over an Object:
*    - You can use the for-in loop to iterate over the properties of an object.
*    - Syntax:
*      for (var key in object) {
*        if (object.hasOwnProperty(key)) {
*          // code to be executed for each property
*        }
*      }
*
*/

// While Loop
var count = 0;
while (count < 5) {
  console.log(count);
  count++;
}

// For Loop
for (var i = 1; i <= 5; i++) {
  console.log(i);
}

// For-in Loop (Array)
var arr = ['apple', 'banana', 'orange'];
for (var index in arr) {
  console.log(arr[index]);
}

// Looping any number of times
var limit = 10;
for (var i = 0; i < limit; i++) {
  console.log(i);
}

// Looping forward over an Array
var fruits = ['apple', 'banana', 'orange'];
for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Looping backward over an Array
for (var i = fruits.length - 1; i >= 0; i--) {
  console.log(fruits[i]);
}

// Looping over an Object
var person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

for (var key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key + ': ' + person[key]);
  }
}