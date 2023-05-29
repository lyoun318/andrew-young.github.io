/*
* STRING MANIPULATION:
*
* 0. String manipulation involves performing operations on strings to modify or extract specific parts of the string.
*    JavaScript provides various ways to manipulate strings using operators and string methods.
*
* 1. String Concatenation:
*    - The + operator can be used to concatenate (combine) strings.
*    - Example: let fullName = 'John' + ' Doe'; (fullName will be 'John Doe').
*
* 2. String Length:
*    - The length property of a string returns the number of characters in the string.
*    - Example: let message = 'Hello'; console.log(message.length); // Output: 5
*
* 3. String Access:
*    - Individual characters in a string can be accessed using square brackets [] with the index position.
*    - The index starts from 0 for the first character and goes up to the length of the string - 1.
*    - Example: let name = 'John'; console.log(name[0]); // Output: 'J'
*
* 4. String Methods:
*    - JavaScript provides built-in methods to manipulate strings. Here are some commonly used methods:
*      - toUpperCase(): Converts a string to uppercase.
*      - toLowerCase(): Converts a string to lowercase.
*      - replace(searchValue, newValue): Replaces a specified value with a new value in a string.
*      - split(separator): Splits a string into an array of substrings based on the specified separator.
*
*/

// String Concatenation
var firstName = 'John';
var lastName = 'Doe';
var fullName = firstName + ' ' + lastName;
console.log(fullName); // Output: 'John Doe'

// String Length
var message = 'Hello';
console.log(message.length); // Output: 5

// String Access
var name1 = 'John';
console.log(name1); // Output: 'J'

// String Methods
var str = 'Hello, World!';
var uppercaseStr = str.toUpperCase();
var lowercaseStr = str.toLowerCase();
var replacedStr = str.replace('World', 'Universe');
var splittedStr = str.split(', ');

console.log(uppercaseStr); // Output: 'HELLO, WORLD!'
console.log(lowercaseStr); // Output: 'hello, world!'
console.log(replacedStr); // Output: 'Hello, Universe!'
console.log(splittedStr); // Output: ['Hello', ' World!']