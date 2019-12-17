# sortedLastIndexBy

Returns the highest index at which value should be inserted into array in order to maintain its sort order, based on a provided iterator function.

Check if the array is sorted in descending order (loosely).
Use `Array.prototype.map()` to apply the iterator function to all elements of the array.
Use `Array.prototype.reverse()` and `Array.prototype.findIndex()` to find the appropriate last index where the element should be inserted, based on the provided iterator function.

## 翻译

根据提供的迭代器函数，返回应将值插入数组以保持其排序顺序的最高索引。

检查数组是否以降序排序（松散）。
使用Array.prototype.map（）将迭代器函数应用于数组的所有元素。
根据提供的迭代器函数，使用Array.prototype.reverse（）和Array.prototype.findIndex（）查找适当的最后一个索引，该元素应插入该位置。

## 代码

```js
const sortedLastIndexBy = (arr, n, fn) => {
  const isDescending = fn(arr[0]) > fn(arr[arr.length - 1]);
  const val = fn(n);
  const index = arr
    .map(fn)
    .reverse()
    .findIndex(el => (isDescending ? val <= el : val >= el));
  return index === -1 ? 0 : arr.length - index;
};
```

## 例子

```js
sortedLastIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, o => o.x); // 1
```
