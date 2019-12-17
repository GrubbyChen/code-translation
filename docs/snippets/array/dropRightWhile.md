# dropRightWhile

Removes elements from the end of an array until the passed function returns `true`. Returns the remaining elements in the array.

Loop through the array, using `Array.prototype.slice()` to drop the last element of the array until the returned value from the function is `true`.
Returns the remaining elements.

## 翻译

从数组末尾删除元素，直到传递的函数返回“ true”为止。返回数组中剩余的元素。

遍历数组，使用Array.prototype.slice（）删除数组的最后一个元素，直到函数返回的值为true。
返回剩余的元素。

## 代码

```js
const dropRightWhile = (arr, func) => {
  let rightIndex = arr.length;
  while (rightIndex-- && !func(arr[rightIndex]));
  return arr.slice(0, rightIndex + 1);
};
```

## 例子

```js
dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]
```
