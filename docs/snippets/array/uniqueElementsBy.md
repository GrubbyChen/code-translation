# uniqueElementsBy

Returns all unique values of an array, based on a provided comparator function.

Use `Array.prototype.reduce()` and `Array.prototype.some()` for an array containing only the first unique occurrence of each value, based on the comparator function, `fn`.
The comparator function takes two arguments: the values of the two elements being compared.

## 翻译

根据提供的比较器函数返回数组的所有唯一值。

根据比较器函数fn，将“ Array.prototype.reduce()”和“ Array.prototype.some()”用于仅包含每个值的第一个唯一出现的数组。
比较器函数有两个参数：比较的两个元素的值。

## 代码

```js
const uniqueElementsBy = (arr, fn) =>
  arr.reduce((acc, v) => {
    if (!acc.some(x => fn(v, x))) acc.push(v);
    return acc;
  }, []);
```

## 例子

```js
uniqueElementsBy(
  [
    { id: 0, value: 'a' },
    { id: 1, value: 'b' },
    { id: 2, value: 'c' },
    { id: 1, value: 'd' },
    { id: 0, value: 'e' }
  ],
  (a, b) => a.id == b.id
); // [ { id: 0, value: 'a' }, { id: 1, value: 'b' }, { id: 2, value: 'c' } ]
```
