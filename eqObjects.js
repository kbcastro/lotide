const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅ Assertion Passed: ${actual} == ${expected} ✅`;
  } else {
    return `❌ Assertion Failed: ${actual} !== ${expected} ❌`;
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((num, i) => num === arr2[i]);
};

// Returns true if both objects have identical number of keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

// tests
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true
console.log(assertEqual(eqObjects(ab, ba), true)); // true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false
console.log(assertEqual(eqObjects(ab, abc), false)); // true

const cba = { c: "1", b: "4", a: "6" };
console.log(eqObjects(cba, abc)); // => false
console.log(assertEqual(eqObjects(cba, abc), false)); // true

const cb = { c: "2", b: "4" };
console.log(eqObjects(ab, cb)); // => false
console.log(assertEqual(eqObjects(ab, cb), false)); // true

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true
console.log(assertEqual(eqObjects(cd, dc), true)); true;

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
console.log(assertEqual(eqObjects(cd, cd2), false)); // true
