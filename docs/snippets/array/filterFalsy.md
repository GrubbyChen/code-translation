# filterFalsy

Filters out the falsy values in an array.

Use `Array.prototype.filter()` to get an array containing only truthy values.

## 翻译

过滤出数组中的伪造值。

使用Array.prototype.filter()获得仅包含真实值的数组。

## 代码

```js
const filterFalsy = arr => arr.filter(Boolean);
```

## 例子

```js
filterFalsy(['', true, {}, false, 'sample', 1, 0]); // [true, {}, 'sample', 1]
```
