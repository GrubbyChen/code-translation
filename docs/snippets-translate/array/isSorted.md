# isSorted

如果数组按升序排序，则返回“ 1”，如果按降序排序，则返回“ -1”，如果未排序则返回“ 0”。

计算前两个元素的排序方向。
使用Object.entries（）遍历数组对象并成对比较它们。
如果方向更改，则返回0；如果到达最后一个元素，则返回方向。

## 代码

```js
const isSorted = arr => {
  let direction = -(arr[0] - arr[1]);
  for (let [i, val] of arr.entries()) {
    direction = !direction ? -(arr[i - 1] - arr[i]) : direction;
    if (i === arr.length - 1) return !direction ? 0 : direction;
    else if ((val - arr[i + 1]) * direction > 0) return 0;
  }
};
```

## 例子

```js
isSorted([0, 1, 2, 2]); // 1
isSorted([4, 3, 2]); // -1
isSorted([4, 3, 5]); // 0
```
