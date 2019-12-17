# minBy

使用提供的函数将每个元素映射到一个值后，返回数组的最小值。

使用Array.prototype.map（）将每个元素映射到fn返回的值，Math.min（）返回最小值。

## 代码

```js
const minBy = (arr, fn) => Math.min(...arr.map(typeof fn === 'function' ? fn : val => val[fn]));
```

## 例子

```js
minBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 2
minBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 2
```