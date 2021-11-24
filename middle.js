const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((num, i) => num === arr2[i]);
};

const assertArraysEqual = function(arr1, arr2) {
  console.log(eqArrays(arr1, arr2) === true ? `✅ Assertion Passed ✅` : `❌ Assertion Failed ❌`);
};

const middle = function(array) {
  let middleArr = [];
  if (array.length <= 2) {
    return middleArr;
  }
  if (array.length % 2 === 0) {
    middleArr.push((array[Math.floor((array.length - 1) / 2)]), (array[Math.floor((array.length) / 2)]));
  }
  if (array.length % 2 !== 0) {
    middleArr.push(array[Math.floor((array.length - 1) / 2)]);
  }
  return middleArr;
};

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

assertArraysEqual(middle([1, 2, 3]), ["2"]); // false
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // true
assertArraysEqual(middle([1, 2, 3, 4]), [3]); // false
assertArraysEqual(middle([1, 2]), []); // true
assertArraysEqual(middle([1]), [1]); // false
assertArraysEqual(middle([1, 2, 3]), [2]); // true