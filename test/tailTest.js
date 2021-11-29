const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("returns 2 for ['Yo Yo', 'Lighthouse', 'Labs'] length", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']).length, 2); 
  });
  it("returns [] for ['Hello']", () => {
    assert.deepEqual(tail(['Hello']), []); 
  });
  it("returns 2 for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']).length, 3); 
  });
});