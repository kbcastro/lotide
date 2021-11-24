const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((num, i) => num === arr2[i]);
};

const assertArraysEqual = function(arr1, arr2) {
  console.log(eqArrays(arr1, arr2) === true ? `✅ Assertion Passed ✅` : `❌ Assertion Failed ❌`);
};

//test
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["0", 2], [0, 2, 4]); // => false
assertArraysEqual(["me", "myself", "I"], ["me", "you", "I"]); // => false
