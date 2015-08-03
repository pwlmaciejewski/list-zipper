# Global





* * *

## Class: ListZipper
Can be used without `new` as well.

### ListZipper.toArray() 

Get original array.


**Example**:
```js
ListZipper([1, 2, 3]).toArray() // [1, 2, 3]
```

### ListZipper.value() 

Get currently focused value.


**Example**:
```js
ListZipper([1, 2, 3], 1).value() // 2
```

### ListZipper.val() 

Aliast for .value().


### ListZipper.index(optional) 

Get currently focused value index in the original array.

**Parameters**

**optional**: `Number`, Changes currently focused index


**Example**:
```js
ListZipper([1, 2, 3], 1).index() // 1,ListZipper([1, 2, 3], 1).index(2).index() // 2
```

**Example**:
```js
ListZipper([1, 2, 3], 1).index() // 1,ListZipper([1, 2, 3], 1).index(2).index() // 2
```

### ListZipper.i() 

Aliast for .index().


### ListZipper.goRight() 

Move current focus to the next element.


**Example**:
```js
ListZipper([1, 2, 3]).goRight().val() // 2
```

### ListZipper.next() 

Aliast for .goRight().


### ListZipper.goLeft() 

Move current focus to the previous element.


**Example**:
```js
ListZipper([1, 2, 3], 1).goLeft().val() // 1
```

### ListZipper.prev() 

Aliast for .goLeft().




* * *



**Author:** Paweł Maciejewski &lt;fragphace@gmail.com&gt;



**Overview:** Immutable list zipper, inspired by Haskell Data.List.Zipper


