# dropWhile

Removes elements in an array until the passed function returns `true`. Returns the remaining elements in the array.

Loop through the array, using `Array.prototype.slice()` to drop the first element of the array until the returned value from the function is `true`.
Returns the remaining elements.

## 翻译

删除数组中的元素，直到传递的函数返回“ true”为止。返回数组中剩余的元素。

使用Array.prototype.slice（）遍历数组，删除数组的第一个元素，直到函数返回的值为true。
返回剩余的元素。

## 代码

```js
const dropWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
  return arr;
};
```

## 例子

```js
dropWhile([1, 2, 3, 4], n => n >= 3); // [3,4]
```
