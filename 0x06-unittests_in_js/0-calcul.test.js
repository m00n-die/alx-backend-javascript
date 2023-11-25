const assert = require('assert');
const { it, describe } = require('mocha');
const calculateNumber = require('./0-calcul');

describe('calculateNumber()', function() {
  it('checking if numbers are rounded', function() {
    const result = calculateNumber(2, 2);
    assert.strictEqual(result, 4);
  });

  it('checking if numbers are rounded', function() {
    const result = calculateNumber(2.2, 2);
    assert.strictEqual(result, 4);
  });

  it('checking if numbers are rounded', function() {
    const result = calculateNumber(2, 2.2);
    assert.strictEqual(result, 4);
  });

  it('checking if numbers are rounded', function() {
    const result = calculateNumber(2.6, 2);
    assert.strictEqual(result, 5);
  });

  it('checking if numbers are rounded', function() {
    const result = calculateNumber(1.5, 3.7);
    assert.strictEqual(result, 6);
  });
});
