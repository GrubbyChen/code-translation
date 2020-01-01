# includesAny

Returns `true` if at least one element of values is included in arr , `false` otherwise.

Use `Array.prototype.some()` and `Array.prototype.includes()` to check if at least one element of `values` is included in `arr`.

## 翻译

如果arr中至少包含一个值元素，则返回`true`，否则返回'false'。

使用“ Array.prototype.some()”和“ Array.prototype.includes()”来检查“ arr”中是否包含“ values”的至少一个元素。

## 代码

```js
const includesAny = (arr, values) => values.some(v => arr.includes(v));
```

## 例子

```js
includesAny([1, 2, 3, 4], [2, 9]); // true
includesAny([1, 2, 3, 4], [8, 9]); // false
```
