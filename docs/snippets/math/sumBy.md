# sumBy

使用提供的函数计算对象中指定元素的总和。

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
