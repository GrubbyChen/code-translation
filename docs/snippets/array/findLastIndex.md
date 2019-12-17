# findLastIndex

Returns the index of the last element for which the provided function returns a truthy value.

Use `Array.prototype.map()` to map each element to an array with its index and value.
Use `Array.prototype.filter()` to remove elements for which `fn` returns falsy values, `Array.prototype.pop()` to get the last one.
`-1` is the default value when not found.

## 翻译

返回提供的函数为其返回真值的最后一个元素的索引。

使用Array.prototype.map（）将每个元素映射到具有索引和值的数组。
使用Array.prototype.filter（）删除fn返回虚假值的元素，Array.prototype.pop（）获取最后一个元素。
找不到时，“-1”是默认值。

## 代码

```js
const findLastIndex = (arr, fn) =>
  (arr
    .map((val, i) => [i, val])
    .filter(([i, val]) => fn(val, i, arr))
    .pop() || [-1])[0];
```

## 例子

```js
findLastIndex([1, 2, 3, 4], n => n % 2 === 1); // 2 (index of the value 3)
findLastIndex([1, 2, 3, 4], n => n === 5); // -1 (default value when not found)
```
