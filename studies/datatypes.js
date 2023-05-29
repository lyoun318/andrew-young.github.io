/*
* DATATYPES:
*
* 0. In JavaScript, data types define the nature of values that can be stored and manipulated in variables. 
*    There are a number of built in datatypes.
*    Each data type has its own properties.
*
* 1. Number:
*    - Represents numeric values.
*    - Example: 1, 3.14, -5, NaN (Not a Number).
*
* 2. String:
*    - Represents a sequence of characters enclosed in single ('') or double ("") quotes.
*    - Example: 'Hello', "World", "123".
*
* 3. Boolean:
*    - Represents a logical value indicating true or false.
*    - Example: true, false.
*
* 4. Array:
*    - Represents an ordered collection of values, accessed using numerical indices.
*    - Example: [1, 2, 3], ['apple', 'banana', 'orange'].
*
* 5. Object:
*    - Represents a collection of key-value pairs.
*    - Example: {name: 'John', age: 25}, {x: 10, y: 20}.
*
* 6. Function:
*    - Represents a reusable block of code that performs a specific task.
*    - Example: function add(a, b) { return a + b; }, function sayHello() { console.log('Hello!'); }.
*
* 7. undefined:
*    - Represents a variable that has been declared but has not been assigned a value.
*    - Example: var x; (x is undefined).
*
* 8. null:
*    - Represents the intentional absence of any object value.
*    - Example: var y = null; (y has no value or object assigned to it).
*
* 9. NaN:
*    - Stands for "Not a Number" and represents an invalid or unrepresentable numeric value.
*    - Example: isNaN('Hello'), 0/0.
*
* 10. Infinity and -Infinity:
*     - Infinity represents a value that is greater than any other number.
*     - -Infinity represents a value that is smaller than any other number.
*     - Example: 1/0, -1/0.
*
* 11. Difference between primitive/simple and complex data types:
*     - Primitive or simple data types (Number, String, Boolean, undefined, null, NaN, Infinity, -Infinity) are immutable and passed by value.
*       When a primitive value is assigned to a variable or passed to a function, a copy of the value is created.
*       Changes made to the copy do not affect the original value.
*     - Complex data types (Array, Object, Function) are mutable and passed by reference.
*       When a complex value is assigned to a variable or passed to a function, a reference to the value is created, not a copy.
*       Changes made to the reference will affect the original value since they both point to the same memory location.
*/

// Number
var age = 30;

// String
var name = 'John';

// Boolean
var isStudent = true;

// Array
var numbers = [1, 2, 3];

// Object
var person = { name: 'John', age: 25 };

// Function
function add(a, b) {
  return a + b;
}

// undefined
var x;

// null
var y = null;

// NaN
var result = 'Hello' / 5; // equals NaN

// Infinity and -Infinity
var positiveInfinity = 1 / 0;
var negativeInfinity = -1 / 0;

// Difference between primitive and complex data types
var num1 = 10;
var num2 = num1; // num2 gets a copy of the value in num1
num2 = 20; // Changing num2 does not affect num1

var arr1 = [1, 2, 3];
var arr2 = arr1; // arr2 gets a reference to the same array as arr1
arr2.push(4); // Changes made to arr2 also affect arr1

console.log(num1); // Output: 10
console.log(num2); // Output: 20
console.log(arr1); // Output: [1, 2, 3, 4]
console.log(arr2); // Output: [1, 2, 3, 4]