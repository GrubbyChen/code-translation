# uniqueElementsByRight

从提供的比较器函数开始，从右开始返回数组的所有唯一值。

根据比较器函数fn，将Array.prototype.reduceRight（）和Array.prototype.some（）用于仅包含每个值的最后唯一出现的数组。
比较器函数有两个参数：比较的两个元素的值。

## 代码

```js
const uniqueElementsByRight = (arr, fn) =>
  arr.reduceRight((acc, v) => {
    if (!acc.some(x => fn(v, x))) acc.push(v);
    return acc;
  }, []);
```

## 例子

```js
uniqueElementsByRight(
  [
    { id: 0, value: 'a' },
    { id: 1, value: 'b' },
    { id: 2, value: 'c' },
    { id: 1, value: 'd' },
    { id: 0, value: 'e' }
  ],
  (a, b) => a.id == b.id
); // [ { id: 0, value: 'e' }, { id: 1, value: 'd' }, { id: 2, value: 'c' } ]
```
