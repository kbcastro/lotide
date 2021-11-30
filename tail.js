const assertEqual = require('./assertEqual');

const tail = function(arr) {
  let tailItems = arr.slice(1);
  return tailItems;
};

module.exports = tail;