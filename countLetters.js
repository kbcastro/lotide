const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅ Assertion Passed: ${actual} == ${expected} ✅`;
  } else {
    return `❌ Assertion Failed: ${actual} !== ${expected} ❌`;
  }
};

const countLetters = function(sentence) {
  const results = {};
  sentence = sentence.split(' ').join('');
  for (const letters of sentence) {
    if (results[letters]) {
      results[letters] += 1;
    } else {
      results[letters] = 1;
    }
  }
  return results;
};

// test
console.log(assertEqual(countLetters('LHL').L, 1));
console.log(assertEqual(countLetters('lighthouse in the house').h, 4));
console.log(assertEqual(countLetters('wednesday').e, 3));
console.log(assertEqual(countLetters('compass').s, 2));

console.log(countLetters('LHL'));
console.log(countLetters('lighthouse in the house'));
console.log(countLetters('wednesday'));
console.log(countLetters('compass'));
