# averageBy

Returns the average of an array, after mapping each element to a value using the provided function.

Use `Array.prototype.map()` to map each element to the value returned by `fn`, `Array.prototype.reduce()` to add each value to an accumulator, initialized with a value of `0`, divide by the `length` of the array.

## 翻译

使用提供的函数将每个元素映射到一个值后，返回数组的平均值。

使用Array.prototype.map（）将每个元素映射到fn返回的值，Array.prototype.reduce（）将每个值添加到累加器中，并以值0初始化，除法通过数组的“长度”。

## 代码

```js
const averageBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) /
  arr.length;
```

## 例子

```js
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 5
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 5
```
