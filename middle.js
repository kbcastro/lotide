const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = middle;