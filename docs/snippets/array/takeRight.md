# takeRight

Returns an array with n elements removed from the end.

Use `Array.prototype.slice()` to create a slice of the array with `n` elements taken from the end.

## 翻译

返回从末尾删除n个元素的数组。

使用Array.prototype.slice()来创建数组的一个切片，其中数组的末尾取n个元素。

## 代码

```js
const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length);
```

## 例子

```js
takeRight([1, 2, 3], 2); // [ 2, 3 ]
takeRight([1, 2, 3]); // [3]
```
