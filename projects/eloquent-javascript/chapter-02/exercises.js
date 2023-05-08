
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(input) {
  // initialize output variable
  let output = "";
  // loop 7 times to increment i
  for (let i = 1; i <= input; i++) {
    // add hashtags to output string each iteration
    output += "#";
    // print to console
    console.log(output);
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  //loop 15 times to increment i
  for (let i = 1; i <= 15; i++) {
    // set fizzbuzz condition for numbers divisible by 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
      //print to console
      console.log("fizzbuzz");
      //set fizz condition for nums divis by 3
    } else if (i % 3 === 0) {
      //print to console
      console.log("fizz");
      //set buzz condition for nums divis by 5
    } else if (i % 5 === 0) {
      //print to console
      console.log("buzz");
      //in any other case log number i
    } else {
      //print to console
      console.log(i);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(input) {
  //sets size of board, will workfor any size, ive tied it to the parameter of the function but you could let size equal a set number or variable and use this same code outside of a function
  let size = input;
  //initialize empty string
  let board = "";
  //loop size number of times to increment row
  for (let row = 0; row < size; row++) {
    //loop size number of times to increment col
    for (let col = 0; col < size; col++) {
      //set spaces for even numbers
      if ((row + col) % 2 === 0) {
        board += " ";
        //set hasthags for odd numbers
      } else {
        board += "#"; 
      }
    }
    board += "\n";
  }
  
  console.log(board);

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
