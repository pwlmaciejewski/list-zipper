function ListZipper(arr, focusedIndex) {
  if (!(this instanceof ListZipper)) return new ListZipper(arr, focusedIndex);
  focusedIndex = focusedIndex || 0;
  this.left = arr.slice(0, focusedIndex);
  this.right = arr.slice(focusedIndex);
}

ListZipper.prototype.toArray = function() {
  return this.left.concat(this.right);
};

ListZipper.prototype.value = function() {
  return this.right[0];
};

ListZipper.prototype.val = function() {
  return this.value.apply(this, arguments);
};

ListZipper.prototype.index = function() {
  return this.left.length;
};

ListZipper.prototype.i = function() {
  return this.index.apply(this, arguments);
};

ListZipper.prototype.goRight = function() {
  return this.mutate(function() {
    if (this.right.length === 1) return;
    this.left.push(this.right.shift());
  });
};

ListZipper.prototype.next = function() {
  return this.goRight.apply(this, arguments);
};

ListZipper.prototype.goLeft = function() {
  return this.mutate(function() {
    if (!this.left.length) return;
    this.right.unshift(this.left.pop());
  });
};

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
