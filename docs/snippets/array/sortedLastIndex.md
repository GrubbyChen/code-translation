# sortedLastIndex

Returns the highest index at which value should be inserted into array in order to maintain its sort order.

Check if the array is sorted in descending order (loosely).
Use `Array.prototype.reverse()` and `Array.prototype.findIndex()` to find the appropriate last index where the element should be inserted.

## 翻译

返回将值插入数组以保持其排序顺序的最高索引。

检查数组是否以降序排序(松散)。
使用Array.prototype.reverse()和Array.prototype.findIndex()查找适当的最后一个索引，将元素插入该位置。

## 代码

```js
const sortedLastIndex = (arr, n) => {
  const isDescending = arr[0] > arr[arr.length - 1];
  const index = arr.reverse().findIndex(el => (isDescending ? n <= el : n >= el));
  return index === -1 ? 0 : arr.length - index;
};
```

## 例子

```js
sortedLastIndex([10, 20, 30, 30, 40], 30); // 4
```
