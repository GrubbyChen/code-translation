# isUndefined

Returns `true` if the specified value is `undefined`, `false` otherwise.

Use the strict equality operator to check if the value and of `val` are equal to `undefined`.

## 翻译

如果指定的值是undefined，则返回true，否则返回false。

使用严格相等运算符检查value和val的值是否等于undefined。

## 代码

```js
const isUndefined = val => val === undefined;
```

## 例子

```js
isUndefined(undefined); // true
```
