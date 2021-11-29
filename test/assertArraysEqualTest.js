const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

//test
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["0", 2], [0, 2, 4]); // => false
assertArraysEqual(["me", "myself", "I"], ["me", "you", "I"]); // => false