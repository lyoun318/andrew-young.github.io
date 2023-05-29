/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables. Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object, or another data type. Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable, we use the keyword var followed by a name (id or alias) for our variable.
*    - Declaration and Assignment: Variables can be declared and assigned in separate steps or combined in a single step.
*        - Declaration: When a variable is declared, it is created but does not have a value assigned to it yet. It is initialized with the value undefined.
*        - Assignment: After declaration, we can assign a value to the variable using the assignment operator (=).
*    - Re-assignment: Once a variable is assigned a value, we can change its value by assigning a new value to it.
*
* 2. Variable Types:
*    - var: The var keyword is used to declare variables in JavaScript. It has function scope, meaning it is accessible within the function where it is declared, regardless of block scope.
*    - let: The let keyword is used to declare variables with block scope. Variables declared with let are limited to the block in which they are defined, such as within loops or conditionals.
*    - const: The const keyword is used to declare variables that cannot be reassigned. It also has block scope. Once a value is assigned to a const variable, it cannot be changed.
*
* 3. Hoisting:
*    - Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase.
*    - Variables declared with var are hoisted and can be accessed before their declaration. Only the declaration is hoisted, not the assignment.
*    - Variables declared with let and const are also hoisted to the top of their block scope, but they are not initialized. Accessing them before the declaration results in a ReferenceError.
*/

// Declaration
var myName;

// At the declaration phase, the variable myName is undefined because we have NOT initialized it to anything
console.log(myName); // prints => undefined

// Initialization or Assignment
myName = 'john';
console.log(myName); // prints => john

// Re-assignment
myName = 'bob';
console.log(myName); // prints => bob

// Re-assigning different types of values
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// Variable Types
var x = 5; // var allows redeclaration and has function scope
let y = 10; // let allows reassignment and has block scope
const z = 15; // const does not allow reassignment and has block scope

// Hoisting
console.log(x); // Output: undefined (Variable x is hoisted)
var x = 5;

// Note: let and const declarations are hoisted to the top of the block but are not initialized, resulting in a ReferenceError if accessed before the declaration.