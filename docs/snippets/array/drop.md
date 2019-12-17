# drop

Returns a new array with `n` elements removed from the left.

Use `Array.prototype.slice()` to remove the specified number of elements from the left.

## 翻译

返回一个新数组，其中左侧删除了n个元素。

使用Array.prototype.slice（）从左侧删除指定数量的元素。

## 代码

```js
const drop = (arr, n = 1) => arr.slice(n);
```

## 例子

```js
drop([1, 2, 3]); // [2,3]
drop([1, 2, 3], 2); // [3]
drop([1, 2, 3], 42); // []
```
