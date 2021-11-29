const assertEqual = require('../assertEqual');
const head = require('../head');

// TEST CODE
console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
console.log(assertEqual(head(['Apple']), 'Apple'));
console.log(assertEqual(head([9]), 6));
console.log(assertEqual(head([]), 'Goodbye'));