const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['6']), '5'); 
  });
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello'); 
  });
  it("returns 'Apple' for ['Apple']", () => {
    assert.strictEqual(head(['Apple']), 'Apple'); 
  });
  it("returns 9 for [9]", () => {
    assert.strictEqual(head([9]), 9); 
  });
  it("returns 'Goodbye' for ['Goodbye']", () => {
    assert.strictEqual(head([]), 'Goodbye'); 
  });
});