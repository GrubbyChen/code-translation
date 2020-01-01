# intersectionWith

Returns a list of elements that exist in both arrays, using a provided comparator function.

Use `Array.prototype.filter()` and `Array.prototype.findIndex()` in combination with the provided comparator to determine intersecting values.

## 翻译

使用提供的比较器函数返回两个数组中都存在的元素的列表。

将Array.prototype.filter()和Array.prototype.findIndex()与提供的比较器结合使用，以确定相交值。

## 代码

```js
const intersectionWith = (a, b, comp) => a.filter(x => b.findIndex(y => comp(x, y)) !== -1);
```

## 例子

```js
intersectionWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)); // [1.5, 3, 0]
```
