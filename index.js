/**
 * List-Zipper
 * @overview Immutable list zipper, inspired by Haskell Data.List.Zipper
 * @author Paweł Maciejewski <fragphace@gmail.com>
 */

/**
  * Constructor
  * @description Can be used without `new` as well.
  * @constructor
  * @param {Array} arr - Input list
  * @param {Number} focusedIndex - (optional) Initial value
  */
function ListZipper(arr, focusedIndex) {
  if (!(this instanceof ListZipper)) return new ListZipper(arr, focusedIndex);
  focusedIndex = focusedIndex || 0;
  this.left = arr.slice(0, focusedIndex);
  this.right = arr.slice(focusedIndex);
}

/**
  * toArray
  * @description Get original array.
  * @example ListZipper([1, 2, 3]).toArray() // [1, 2, 3]
  */
ListZipper.prototype.toArray = function() {
  return this.left.concat(this.right);
};

/**
  * value
  * @description Get currently focused value.
  * @example ListZipper([1, 2, 3], 1).value() // 2
  */
ListZipper.prototype.value = function() {
  return this.right[0];
};

/**
  * val
  * @description Aliast for .value().
  */
ListZipper.prototype.val = function() {
  return this.value.apply(this, arguments);
};

/**
  * index
  * @description Get currently focused value index in the original array.
  * @param {Number} [optional] Changes currently focused index
  * @example ListZipper([1, 2, 3], 1).index() // 1
  * @example ListZipper([1, 2, 3], 1).index(2).index() // 2
  */
ListZipper.prototype.index = function(i) {
  if (!i) return this.left.length;
  return new ListZipper(this.toArray(), i);
};

/**
  * i
  * @description Aliast for .index().
  */
ListZipper.prototype.i = function() {
  return this.index.apply(this, arguments);
};

/**
  * goRight
  * @description Move current focus to the next element.
  * @example ListZipper([1, 2, 3]).goRight().val() // 2
  */
ListZipper.prototype.goRight = function() {
  return this.mutate(function() {
    if (this.right.length === 1) return;
    this.left.push(this.right.shift());
  });
};

/**
  * next
  * @description Aliast for .goRight().
  */
ListZipper.prototype.next = function() {
  return this.goRight.apply(this, arguments);
};

/**
  * goLeft
  * @description Move current focus to the previous element.
  * @example ListZipper([1, 2, 3], 1).goLeft().val() // 1
  */
ListZipper.prototype.goLeft = function() {
  return this.mutate(function() {
    if (!this.left.length) return;
    this.right.unshift(this.left.pop());
  });
};

/**
  * prev
  * @description Aliast for .goLeft().
  */
ListZipper.prototype.prev = function() {
  return this.goLeft.apply(this, arguments);
};

ListZipper.prototype.mutate = function(fn) {
  var that = new ListZipper(this.toArray(), this.index());
  fn.call(that);
  return that;
};

// Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ListZipper;
}
// AMD / RequireJS
else if (typeof define !== 'undefined' && define.amd) {
  define([], function () {
      return ListZipper;
  });
}
// included directly via <script> tag
else {
  window.ListZipper = ListZipper;
}
