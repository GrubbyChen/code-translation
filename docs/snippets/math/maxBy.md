# maxBy

使用提供的函数获取指定元素，返回数组中指定元素值最大的对象。

## 代码

```js
const maxBy = (arr, fn) => Math.max(...arr.map(typeof fn === 'function' ? fn : val => val[fn]));
```

## 例子

```js
maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 8
maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 8
```
