# everyNth

Returns every nth element in an array.

Use `Array.prototype.filter()` to create a new array that contains every nth element of a given array.

## 翻译

返回数组中的每个第n个元素。

使用Array.prototype.filter()创建一个包含给定数组的第n个元素的新数组。

## 代码

```js
const everyNth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);
```

## 例子

```js
everyNth([1, 2, 3, 4, 5, 6], 2); // [ 2, 4, 6 ]
```
