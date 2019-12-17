# uniqueElements

Returns all unique values of an array.

Use ES6 `Set` and the `...rest` operator to discard all duplicated values.

## 翻译

返回数组的所有唯一值。

使用ES6`Set`和`... rest`运算符丢弃所有重复的值。

## 代码

```js
const uniqueElements = arr => [...new Set(arr)];
```

## 例子

```js
uniqueElements([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]
```
