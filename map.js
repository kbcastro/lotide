// map function will return a new array based on the results of the callback function

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const firstLetter = map(words, word => word[0]);

// test
console.log(firstLetter);

