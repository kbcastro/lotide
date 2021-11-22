const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} == ${expected} ✅`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected} ❌`);
  }
};

// TEST CODE
console.log(assertEqual(1, 1));
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual('Hello', 'Hello'));
console.log(assertEqual('Monday', 'Tuesday'));
console.log(assertEqual(22, 22));
console.log(assertEqual(16, 61));
