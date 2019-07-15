// capitalizeFirstLetter.test.js
const assert = require('assert');
const capitalizeFirstLetter = require('../capitalizeFirstLetter');

describe('capitalizeFirstLetter', () => {
  it('is a function that accepts one argument', () => {
    assert.strictEqual(typeof capitalizeFirstLetter, 'function');
    assert.strictEqual(capitalizeFirstLetter.length, 1);
  });
  it('transforms javaScript correctly', () => {
    assert.strictEqual(capitalizeFirstLetter('javaScript'), 'JavaScript');
  });
  it('works for a 1-character string', () => {
      assert.strictEqual(capitalizeFirstLetter('i'), 'I');
  });
  it('works for a 1-character string', () => {
    assert.strictEqual(capitalizeFirstLetter('i am learning TDD'), 'I Am Learning TDD');
  });
  it('works for an empty string', () => {
    assert.strictEqual(capitalizeFirstLetter(''), '');
  });
});
