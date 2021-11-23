const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅ Assertion Passed: ${actual} == ${expected} ✅`;
  } else {
    return `❌ Assertion Failed: ${actual} !== ${expected} ❌`;
  }
};

const tail = function(arr) {
  let tailItems = arr.slice(1);
  return tailItems;
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // check if the first element is not included
console.log(assertEqual(words.length, 2)); // original array should still have 3 elements!

const test = ["Hello"];
console.log(tail(test)); // should return empty array
let emptyArr = [];
console.log(tail(emptyArr)); // should return empty array

const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(assertEqual(result.length, 2)); // ensure we get back two elements
console.log(assertEqual(result[1], "Lighthouse")); // ensure first element is "Lighthouse"
console.log(assertEqual(result[1], "Labs")); // ensure second element is "Labs"