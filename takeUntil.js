// function will return a "slice of the array with elements taken from the beginning"
// it should keep going until the callback/predicate returns a truthy value

const takeUntil = function(array, callback) {
  const results = [];
  for (const elements of array) {
    if (!callback(elements)) {
      results.push(elements);
    } else {
      break;
    }
  }
  return results;
};

const data0 = [6, 4, 10, 16, 3, 8, 1, 0, 5];
const results0 = takeUntil(data0, x => x > 15);
console.log(results0); // results [ 6, 4, 10];

// assertion test
/*
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((num, i) => num === arr2[i]);
};

const assertArraysEqual = function(arr1, arr2) {
  console.log(eqArrays(arr1, arr2) === true ? `✅ Assertion Passed ✅` : `❌ Assertion Failed ❌`);
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1); // results [ 1, 2, 5, 7, 2 ];
assertArraysEqual(results1, [1, 2, 5, 7, 2]); // true

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2); // results [ 'I\'ve', 'been', 'to', 'Hollywood' ];
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]); // true
*/