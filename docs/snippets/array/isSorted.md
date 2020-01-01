# isSorted

Returns `1` if the array is sorted in ascending order, `-1` if it is sorted in descending order or `0` if it is not sorted.

Calculate the ordering `direction` for the first two elements.
Use `Object.entries()` to loop over array objects and compare them in pairs.
Return `0` if the `direction` changes or the `direction` if the last element is reached.

## 翻译

如果数组按升序排序，则返回“ 1”，如果按降序排序，则返回“ -1”，如果未排序则返回“ 0”。

计算前两个元素的排序方向。
使用Object.entries()遍历数组对象并成对比较它们。
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
