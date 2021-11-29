const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // check if the first element is not included
console.log(assertEqual(words.length, 3)); // original array should still have 3 elements!

const test = ["Hello"];
console.log(tail(test)); // should return empty array
let emptyArr = [];
console.log(tail(emptyArr)); // should return empty array

const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(assertEqual(result.length, 2)); // ensure we get back two elements
console.log(assertEqual(result[1], "Lighthouse")); // ensure first element is "Lighthouse"
console.log(assertEqual(result[1], "Labs")); // ensure second element is "Labs"