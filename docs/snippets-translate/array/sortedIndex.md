# sortedIndex

返回应将值插入数组以保持其排序顺序的最低索引。

检查数组是否以降序排序（松散）。
使用Array.prototype.findIndex（）查找适当的索引，元素应插入该位置。

## 代码

```js
const sortedIndex = (arr, n) => {
  const isDescending = arr[0] > arr[arr.length - 1];
  const index = arr.findIndex(el => (isDescending ? n >= el : n <= el));
  return index === -1 ? arr.length : index;
};
```

## 例子

```js
sortedIndex([5, 3, 2, 1], 4); // 1
sortedIndex([30, 50], 40); // 1
```
