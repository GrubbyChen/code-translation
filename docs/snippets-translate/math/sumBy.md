# sumBy

使用提供的函数将每个元素映射到一个值后，返回数组的总和。

使用Array.prototype.map（）将每个元素映射到fn返回的值，使用Array.prototype.reduce（）将每个值添加到累加器，并以值0初始化。

## 代码

```js
const sumBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0);
```

## 例子

```js
sumBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 20
sumBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 20
```
