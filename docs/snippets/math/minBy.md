# minBy

使用提供的函数获取指定元素，返回数组中指定元素值最小的对象。

## 代码

```js
const minBy = (arr, fn) => Math.min(...arr.map(typeof fn === 'function' ? fn : val => val[fn]));
```

## 例子

```js
minBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 2
minBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 2
```
