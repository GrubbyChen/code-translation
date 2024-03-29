# unionWith

Returns every element that exists in any of the two arrays once, using a provided comparator function.

Create a `Set` with all values of `a` and values in `b` for which the comparator finds no matches in `a`, using `Array.prototype.findIndex()`.

## 翻译

使用提供的比较器函数一次返回两个数组中任何一个存在的每个元素。

使用Array.prototype.findIndex()创建一个具有所有a值和所有b值的Set，比较器在a中找不到匹配项。

## 代码

```js
const unionWith = (a, b, comp) =>
  Array.from(new Set([...a, ...b.filter(x => a.findIndex(y => comp(x, y)) === -1)]));
```

## 例子

```js
unionWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)); // [1, 1.2, 1.5, 3, 0, 3.9]
```
