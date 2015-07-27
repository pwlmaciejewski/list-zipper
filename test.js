var assert = require('chai').assert;
var lz = require('./index.js');

describe('List zipper', function() {

  describe('toArray()', function() {
    before(function() {
      this.array = [1, 2, 3];
      this.zipper = lz(this.array);
    });

    it('Is the same as the original array', function() {
      assert.deepEqual(this.zipper.toArray(), this.array);
    });

    it('Is not the original array', function() {
      assert.notEqual(this.zipper.toArray(), this.array);
    });
  });

  describe('Fresh zipper', function() {
    it('value() returns first element', function() {
      assert.equal(lz([1, 2, 3]).value(), 1);
    });

    it('index() retruns 0', function() {
      assert.equal(lz([2, 3]).index(), 0);
    });
  });

  describe('Constructor', function() {
    it('Allows to set initial focus by passing index', function() {
      var zipper = lz([1, 2, 3], 2);
      assert.equal(zipper.val(), 3);
      assert.equal(zipper.i(), 2);
    });
  });

  describe('right()', function() {
    it('Moves focus to the next element', function() {
      assert.equal(lz([1, 2, 3]).goRight().goRight().val(), 3);
    });

    it('Is an immutable change', function() {
      var z1 = lz([1, 2, 3]);
      var z2 = z1.goRight();
      assert.equal(z1.val(), 1);
    });
  });
});
