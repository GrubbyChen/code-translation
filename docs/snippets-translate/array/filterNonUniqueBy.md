# filterNonUniqueBy

根据提供的比较器功能，过滤出数组中的非唯一值。

根据比较器函数fn，将Array.prototype.filter（）和Array.prototype.every（）用于仅包含唯一值的数组。
比较器函数有四个参数：要比较的两个元素的值及其索引。

## 代码

```js
const filterNonUniqueBy = (arr, fn) =>
  arr.filter((v, i) => arr.every((x, j) => (i === j) === fn(v, x, i, j)));
```

## 例子

```js
filterNonUniqueBy(
  [
    { id: 0, value: 'a' },
    { id: 1, value: 'b' },
    { id: 2, value: 'c' },
    { id: 1, value: 'd' },
    { id: 0, value: 'e' }
  ],
  (a, b) => a.id == b.id
); // [ { id: 2, value: 'c' } ]
```
