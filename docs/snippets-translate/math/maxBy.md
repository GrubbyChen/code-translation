# maxBy

使用提供的函数将每个元素映射到一个值后，返回数组的最大值。

使用Array.prototype.map（）将每个元素映射到fn返回的值，Math.max（）获得最大值。

## 代码

```js
const maxBy = (arr, fn) => Math.max(...arr.map(typeof fn === 'function' ? fn : val => val[fn]));
```

## 例子

```js
maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 8
maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 8
```
