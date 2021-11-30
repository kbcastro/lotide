const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  console.log(eqArrays(arr1, arr2) === true ? `✅ Assertion Passed ✅` : `❌ Assertion Failed ❌`);
};

module.exports = assertArraysEqual;