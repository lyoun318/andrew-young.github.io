/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {}; //initialize animal variable
animal.species = 'dog'; // assign species key to value dog in animal
animal['name'] = 'Pacha'; //assign name key to value of Pacha in animal
animal.noises = []; //assign noises key to empty array in animal
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = []; //initialize noises variable
noises[0] = 'bark'; //add bark string to noises array
noises.push('growl'); //add growl to noises array
noises.unshift('grumble'); //add grumble to start of noises array
noises[noises.length] = 'whine'; //add whine to end of array
console.log(noises.length);
console.log(noises.length - 1);
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal.noises = noises; //assign noises key in animal to noises array
noises.push('howl'); // add howl to noises array
console.log(animal)


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * object.key = value, and object[key] = value
 * 2. What are the different ways of accessing elements on arrays?
 * array[index location] = value, and array.length
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = []; //initialize animals array
animals.push(animal); //add animal object to animals array
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] }; //initialize duck object
animals.push(duck);
console.log(animals)
var cat = { //initialize cat object
  species: 'cat',
  name: 'Rasputin',
  noises: [
    'pur', 'meow', 'the sounds of mischief and tomfoolery'
  ]
}
var donkey = { //initialize donkey object
  species: 'donkey',
  name: 'clarence thomas',
  noises: [
    'hee haaaaaaaaaaa', 'farting', 'whatever fascism sounds like'
  ]
}
animals.push(cat, donkey); // add cat and donkey to animals array
console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var friends = []; //initialize friends array because arrays store lists effectively
function getRandom(array) {
  return Math.random() * array.length - 1;
}
friends.push(animals[getRandom(animals)]['name']) //add name value from a random animal to the friends array
dog.friends = friends //add friends key value pair to dog object
console.log(animals)
/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}