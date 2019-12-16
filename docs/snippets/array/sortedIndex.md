# sortedIndex

Returns the lowest index at which value should be inserted into array in order to maintain its sort order.

Check if the array is sorted in descending order (loosely).
Use `Array.prototype.findIndex()` to find the appropriate index where the element should be inserted.

## Translate

返回应将值插入数组以保持其排序顺序的最低索引。

检查数组是否以降序排序（松散）。
使用Array.prototype.findIndex（）查找适当的索引，元素应插入该位置。

## Code

```js
const sortedIndex = (arr, n) => {
  const isDescending = arr[0] > arr[arr.length - 1];
  const index = arr.findIndex(el => (isDescending ? n >= el : n <= el));
  return index === -1 ? arr.length : index;
};
```

## Example

```js
sortedIndex([5, 3, 2, 1], 4); // 1
sortedIndex([30, 50], 40); // 1
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
