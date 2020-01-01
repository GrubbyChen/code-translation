# xProd

Creates a new array out of the two supplied by creating each possible pair from the arrays.

Use `Array.prototype.reduce()`, `Array.prototype.map()` and `Array.prototype.concat()` to produce every possible pair from the elements of the two arrays and save them in an array.

## 翻译

通过从阵列中创建每个可能的对，在提供的两个阵列中创建一个新阵列。

使用Array.prototype.reduce()，Array.prototype.map()和Array.prototype.concat()从两个数组的元素中生成每个可能的对，并将它们保存在一个数组中。

## 代码

```js
const xProd = (a, b) => a.reduce((acc, x) => acc.concat(b.map(y => [x, y])), []);
```

## 例子

```js
xProd([1, 2], ['a', 'b']); // [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
```
