# findLast

Returns the last element for which the provided function returns a truthy value.

Use `Array.prototype.filter()` to remove elements for which `fn` returns falsy values, `Array.prototype.pop()` to get the last one.

## 翻译

返回提供的函数为其返回真值的最后一个元素。

使用Array.prototype.filter（）删除fn返回虚假值的元素，Array.prototype.pop（）获取最后一个元素。

## 代码

```js
const findLast = (arr, fn) => arr.filter(fn).pop();
```

## 例子

```js
findLast([1, 2, 3, 4], n => n % 2 === 1); // 3
```
