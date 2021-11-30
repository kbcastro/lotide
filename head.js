const assertEqual = require('./assertEqual');

const head = function(arr) {
  let firstItem = arr.shift();
  return firstItem;
};

module.exports = head;