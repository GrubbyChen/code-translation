# symmetricDifferenceWith

Returns the symmetric difference between two arrays, using a provided function as a comparator.

Use `Array.prototype.filter()` and `Array.prototype.findIndex()` to find the appropriate values.

## 翻译

使用提供的函数作为比较器，返回两个数组之间的对称差。

使用`Array.prototype.filter()`和`Array.prototype.findIndex()`查找合适的值。

## 代码

```js
const symmetricDifferenceWith = (arr, val, comp) => [
  ...arr.filter(a => val.findIndex(b => comp(a, b)) === -1),
  ...val.filter(a => arr.findIndex(b => comp(a, b)) === -1)
];
```

## 例子

```js
symmetricDifferenceWith(
  [1, 1.2, 1.5, 3, 0],
  [1.9, 3, 0, 3.9],
  (a, b) => Math.round(a) === Math.round(b)
); // [1, 1.2, 3.9]
```
