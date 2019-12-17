# sortedIndexBy

Returns the lowest index at which value should be inserted into array in order to maintain its sort order, based on a provided iterator function.

Check if the array is sorted in descending order (loosely).
Use `Array.prototype.findIndex()` to find the appropriate index where the element should be inserted, based on the iterator function `fn`.

## 翻译

根据提供的迭代器函数，返回应将值插入数组以保持其排序顺序的最低索引。

检查数组是否以降序排序（松散）。
根据迭代器函数fn，使用Array.prototype.findIndex（）查找要插入元素的适当索引。

## 代码

```js
const sortedIndexBy = (arr, n, fn) => {
  const isDescending = fn(arr[0]) > fn(arr[arr.length - 1]);
  const val = fn(n);
  const index = arr.findIndex(el => (isDescending ? val >= fn(el) : val <= fn(el)));
  return index === -1 ? arr.length : index;
};
```

## 例子

```js
sortedIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, o => o.x); // 0
```
