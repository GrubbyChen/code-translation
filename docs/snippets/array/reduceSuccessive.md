# reduceSuccessive

Applies a function against an accumulator and each element in the array (from left to right), returning an array of successively reduced values.

Use `Array.prototype.reduce()` to apply the given function to the given array, storing each new result.

## 翻译

对一个累加器和该数组中的每个元素（从左到右）应用一个函数，返回一个依次减小值的数组。

使用Array.prototype.reduce（）将给定函数应用于给定数组，存储每个新结果。

## 代码

```js
const reduceSuccessive = (arr, fn, acc) =>
  arr.reduce((res, val, i, arr) => (res.push(fn(res.slice(-1)[0], val, i, arr)), res), [acc]);
```

## 例子

```js
reduceSuccessive([1, 2, 3, 4, 5, 6], (acc, val) => acc + val, 0); // [0, 1, 3, 6, 10, 15, 21]
```
