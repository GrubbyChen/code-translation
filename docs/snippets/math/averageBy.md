# averageBy

使用提供的函数计算对象中指定元素的平均值。

- 使用 `Array.prototype.map()` 将每个元素映射到 `fn` 返回的值
- 使用 `Array.prototype.reduce()` 将每个值添加到累加器中（累加器初始值为 `0`），再除以数组的长度。

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
