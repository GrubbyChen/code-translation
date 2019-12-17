# dropRight

Returns a new array with `n` elements removed from the right.

Use `Array.prototype.slice()` to remove the specified number of elements from the right.

## 翻译

返回一个新数组，其中右侧删除了“ n”个元素。

使用Array.prototype.slice（）从右侧删除指定数量的元素。

## 代码

```js
const dropRight = (arr, n = 1) => arr.slice(0, -n);
```

## 例子

```js
dropRight([1, 2, 3]); // [1,2]
dropRight([1, 2, 3], 2); // [1]
dropRight([1, 2, 3], 42); // []
```
