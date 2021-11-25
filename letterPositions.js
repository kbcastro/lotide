const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((num, i) => num === arr2[i]);
};

const assertArraysEqual = function(arr1, arr2) {
  console.log(eqArrays(arr1, arr2) === true ? `✅ Assertion Passed ✅` : `❌ Assertion Failed ❌`);
};

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};

// test
console.log(letterPositions('hello'));
assertArraysEqual(letterPositions("hello").h, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);