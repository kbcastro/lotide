const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅ Assertion Passed: ${actual} == ${expected} ✅`;
  } else {
    return `❌ Assertion Failed: ${actual} !== ${expected} ❌`;
  }
};

const head = function(arr) {
  let firstItem = arr.shift();
  return firstItem;
};

// TEST CODE
console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
console.log(assertEqual(head(['Apple']), 'Apple'));
console.log(assertEqual(head([9]), 6));
console.log(assertEqual(head([]), 'Goodbye'));
