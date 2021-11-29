const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// Tests
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
console.log(eqArrays([4, 5, 6], [4, 5, 6])); // => true
console.log(eqArrays(["0", 2, "four"], [0, 2, 4])); // => false
console.log(eqArrays(["hi", "hello", "hey"], ["hi", "hello", "hey"])); // => true
console.log(eqArrays(["me", "myself", "I"], ["me", "you", "I"])); // => false

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => true
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false)); // => false