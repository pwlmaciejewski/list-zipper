
# list-zipper [![Build Status](https://secure.travis-ci.org/pwlmaciejewski/list-zipper.png?branch=master)](http://travis-ci.org/pwlmaciejewski/list-zipper)

Simple list zipper, inspired by Haskell Data.List.Zipper.
If you ever found yourself using something like this:

```javascript
var array = ['foo', 'bar', 'baz'];
var currentIndex = 1;
```

Then you can replace it with:

```javascript
var array = ListZipper(['foo', 'bar', 'baz'], 1);
```

Read the [usage section](#usage) for more details.
You can also find more info about zippers [here](http://learnyouahaskell.com/zippers).

## Installation

### Node.js

```
npm install list-zipper
```

### Bower
```
bower install list-zipper
```


## Usage

```javascript
// Move right
ListZipper([1, 2, 3]).next().next().val(); // 3

// Move left
ListZipper([1, 2, 3], 2); // second argument sets the index of currently focused element
  .prev().prev().val() // 1

// It doesn't change the original array
ListZipper([1, 2, 3]).next().next().toArray(); // [1, 2, 3]

// It is immutable
var lz = ListZipper([1, 2, 3], 1);
lz.val(); // 2
lz.next().val(); // 3
lz.val(); // 2
lz.prev().val(); // 1
```
More info in [API Docs](./docs/index.md).
