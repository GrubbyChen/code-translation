# includesAll

Returns `true` if all the elements ιν `values` are included in `arr`, `false` otherwise.

Use `Array.prototype.every()` and `Array.prototype.includes()` to check if all elements of `values` are included in `arr`.

## 翻译

如果所有元素“值”都包含在“ arr”中，则返回“ true”，否则返回“ false”。

使用“ Array.prototype.every()”和“ Array.prototype.includes()”来检查“值”的所有元素是否都包含在“ arr”中。

## 代码

```js
const includesAll = (arr, values) => values.every(v => arr.includes(v));
```

## 例子

```js
includesAll([1, 2, 3, 4], [1, 4]); // true
includesAll([1, 2, 3, 4], [1, 5]); // false
```
