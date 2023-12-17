const assert = require('assert');
const { it, describe } = require('mocha');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
    it('checks if numbers are runded', function() {
        assert.strictEqual(calculateNumber('SUM', 2.2, 3.2), 5);
    });
    
    it('checks if addition works', function() {
        assert.strictEqual(calculateNumber('SUM', 2, 3), 5);
    });

    it('checks if subtraction works', function() {
        assert.strictEqual(calculateNumber('SUBTRACT', 2, 3), -1);
    });

    it('checks if divison works', function() {
        assert.strictEqual(calculateNumber('DIVIDE', 10, 5), 2);
    });

    it('checks if divison by zero returns Error', function() {
        assert.strictEqual(calculateNumber('DIVIDE', 2, 0), 'Error');
    });

    it('checks if numbers are runded for SUBTRACT', function() {
        assert.strictEqual(calculateNumber('SUBTRACT', 2.2, 3.2), -1);
    });

    it('checks if numbers are runded for DIVIDE', function() {
        assert.strictEqual(calculateNumber('DIVIDE', 10.2, 5.2), 2);
    });
});