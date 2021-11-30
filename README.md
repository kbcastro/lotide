# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kbcastro/lotide`

**Require it:**

`const _ = require('@kbcastro/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: function that asserts if two arrays are equals
* `assertEqual`: function that asserts if two primitive values are equals
* `assertObjectsEqual`: function that asserts if two objects are equals
* `countLetters`: function that returns the number of occurrences of each letter in a string
* `countOnly`: function that returns the number of occurrences of items in an object 
* `eqArrays`: function that compares two arrays
* `eqObjects`: function that compares two objects
* `findKey`: function that returns the key given an object and callback function; returns a truthy value. Will return undefined if no key is found
* `findKeyByValue`: function that returns the first key containing the value of the inputted object and value, will return undefined if no key with the given value is found
* `head`: function that returns the first element of an array
* `index`: list of all the functions in an object
* `letterPositions`: function that returns all the indices in the string where each character is found
* `map`: function that takes an array and callback that will return a modified array with the callback function applied
* `middle`: function that returns the middle element(s) of an array
* `tail`: function that returns a new array with the first index element removed from the original array
* `takeUntil`: function that returns a slice of the array with elements taken from the beginning
* `without`: function that removes elements from a given array