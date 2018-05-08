// add by yanyj 20180507 start
// String test
let pocket = require('./string');
let assert = require('assert');

describe('String', function () {
    describe('#padStart()', function() {
        it('should be equal', function() {
           assert.equal(pocket.padStart('1', 2, '1'),'11');
           assert.equal(pocket.padStart('1', 2, '11'),'11');
           assert.equal(pocket.padStart('1', 0, '1'),'1');

        });
    });

});

describe('String', function () {
    describe('#padEnd()', function() {
        it('should be equal', function() {
            assert.equal(pocket.padEnd('1', 2, '1'),'11');
            assert.equal(pocket.padEnd('1', 2, '11'),'11');
            assert.equal(pocket.padEnd('1', 0, '2'),'1');
            assert.equal(pocket.padEnd('1', 1, '2'),'1');
            assert.equal(pocket.padEnd('1', 2, '2'),'12');

        });
    });

});

// replaceAll
describe('String', function () {
    describe('#replaceAll()', function() {
        it('should be equal', function() {
            assert.equal(pocket.replaceAll('1', 1, '2'),'2');
            assert.equal(pocket.replaceAll('1', '2', '2'),'1');

        });
    });

});
// mocha shell :

// add by yanyj 20180507 end