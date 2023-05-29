/*
* FUNCTIONS:
*
* 0. Functions in JavaScript are reusable blocks of code that perform a specific task. They allow you to break down
*    your program into smaller pieces.
*
* 1. The two phases to using functions:
*    - First, we must define or declare a function. This involves creating the function and specifying its name,
*      parameters (inputs), and the code block to be executed when the function is called.
*    - Next, we can execute or invoke a function by calling its name followed by parentheses (). This triggers the
*      execution of the function's code block.
*
* 2. The difference between a function's parameters and arguments passed to a function:
*    - Parameters are the placeholders listed in the function declaration. They act as variables that receive the
*      values passed as arguments when the function is called.
*    - Arguments are the actual values passed to a function when it is called. They are assigned to the function's
*      parameters and used within the function's code block.
*
* 3. Syntax for a named function:
*    - Named functions have a specified name that can be used to invoke the function later.
*    - Syntax:
*      function functionName(parameter1, parameter2, ...) {
*        // code to be executed
*      }
*
* 4. Assigning a function to a variable:
*    - functions can be assigned to variables, just like any other value.
*    - Syntax:
*      var functionName = function(parameter1, parameter2, ...) {
*        // code to be executed
*      };
*
* 5. Specifying inputs (parameters) and outputs (return value):
*    - Inputs (parameters) are specified in the function declaration within parentheses ().
*    - Outputs (return value) can be specified using the return statement inside the function. This allows the
*      function to send a value back to the code that called it.
*
* 6. Scope:
*    - Functions have access to variables defined in their parent or global scopes. They can see and modify these
*      variables.
*    - However, variables defined inside a function are not accessible outside the function. The inverse is not true.
*
* 7. Closures:
*    - Functions in JavaScript form closures around the data they house. A closure is the combination of a function
*      and its surrounding state.
*    - If an object returned from a function is held in memory somewhere (referenced), the closure stays alive, and
*      the data within the closure can continue to exist.
*/

// Define a named function
function greet(name) {
    console.log('Hello, ' + name + '!');
  }
  
  // Invoke the function
  greet('John'); // Output: 'Hello, John!'
  
  // Assign a function to a variable
  var add = function(a, b) {
    return a + b;
  };
  
  var result = add(5, 3);
  console.log(result); // Output: 8
  
  // Function with inputs and output
  function multiply(num1, num2) {
    return num1 * num2;
  }
  
  var product = multiply(2, 4);
  console.log(product); // Output: 8
  
  // Scope and closure example
  function outer() {
    var x = 10;
  
    function inner() {
      console.log(x); // Accessing variable from the outer scope
    }
  
    return inner;
  }
  
  var closureFunc = outer(); // Closure is formed
  closureFunc(); // Output: 10