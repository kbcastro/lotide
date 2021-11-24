const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((num, i) => num === arr2[i]);
};

const assertArraysEqual = function(arr1, arr2) {
  console.log(eqArrays(arr1, arr2) === true ? `✅ Assertion Passed ✅` : `❌ Assertion Failed ❌`);
};

const without = function(source, removed) {
  let newArr = [];
  for (let i = 0; i < source.length; i++) {
    if (!removed.includes(source[i])) {
      newArr.push(source[i]);
    }
  }
  return newArr;
};


// test
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without([3, 5, 7], [2, 4, 6])); // => [3, 5, 7]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
