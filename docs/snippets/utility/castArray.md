# castArray

Casts the provided value as an array if it's not one.

Use `Array.prototype.isArray()` to determine if `val` is an array and return it as-is or encapsulated in an array accordingly.

## 翻译

将给定参数强制转换为数组。

## 代码

```js
const castArray = val => (Array.isArray(val) ? val : [val]);
```

## 例子

```js
castArray('foo'); // ['foo']
castArray([1]); // [1]
```
