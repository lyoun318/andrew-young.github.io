
/*
* OPERATORS:
*
* 0. Operators are symbols or keywords that perform operations (values or variables).
*    JavaScript provides various types of operators, including assignment, arithmetic, comparison,
*    logical, unary, and ternary operators.
*
* 1. Assignment Operators:
*    - Assign a value to a variable.
*    - Example: x = 5; (Assigns the value 5 to the variable x).
*
* 2. Arithmetic Operators:
*    - Perform mathematical calculations.
*    - Example: + (addition), - (subtraction), * (multiplication), / (division).
*
* 3. Comparison Operators:
*    - Compare values and return a Boolean result.
*    - Example: == (equality), === (strict equality), != (inequality), > (greater than), < (less than), >= (greater than or equal to), <= (less than or equal to).
*
* 4. Logical Operators:
*    - Combine or negate Boolean values.
*    - Example: && (logical AND), || (logical OR), ! (logical NOT).
*
* 5. Unary Operators:
*    - Operate on a single operand.
*    - Example: ! (logical NOT), typeof (returns the type of a value), - (negation).
*
* 6. Ternary Operator:
*    - Also known as the conditional operator.
*    - Provides a shorter syntax for conditional statements.
*    - Syntax: condition ? expression1 : expression2
*    - If the condition is true, expression1 is evaluated and returned. Otherwise, expression2 is evaluated and returned.
*
*/

// Assignment Operators
let x = 5;
let y = 10;
x += y; // equals x = x + y;

// Arithmetic Operators
let sum = x + y;
let difference = x - y;
let product = x * y;
let quotient = x / y;
let remainder = x % y;

// Comparison Operators
let isEqual = x == y;
let isNotEqual = x != y;
let isGreater = x > y;
let isLess = x < y;
let isGreaterOrEqual = x >= y;
let isLessOrEqual = x <= y;

// Logical Operators
let logicalAnd = x > 0 && y > 0;
let logicalOr = x > 0 || y > 0;
let logicalNot = !(x > 0);

// Unary Operators
let value = 5;
let negation = -value;
let notOperator = !logicalAnd;
let type = typeof value;

// Ternary Operator
let result = x > y ? 'x is greater' : 'y is greater';

console.log(result); // Output: 'y is greater'