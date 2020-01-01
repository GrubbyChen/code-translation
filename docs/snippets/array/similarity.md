# similarity

Returns an array of elements that appear in both arrays.

Use `Array.prototype.filter()` to remove values that are not part of `values`, determined using `Array.prototype.includes()`.

## 翻译

返回同时出现在两个数组中的元素的数组。

使用Array.prototype.filter()删除不属于value的值，这些值是由Array.prototype.includes()确定的。

## 代码

```js
const similarity = (arr, values) => arr.filter(v => values.includes(v));
```

## 例子

```js
similarity([1, 2, 3], [1, 2, 4]); // [1, 2]
```
