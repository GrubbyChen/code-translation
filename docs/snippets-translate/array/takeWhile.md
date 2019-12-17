# takeWhile

删除数组中的元素，直到传递的函数返回“ true”为止。返回移除的元素。

通过在Array.prototype.entries（）上使用for循环来遍历数组，直到函数返回的值为true为止。
使用Array.prototype.slice（）返回删除的元素。

## 代码

```js
const takeWhile = (arr, func) => {
  for (const [i, val] of arr.entries()) if (func(val)) return arr.slice(0, i);
  return arr;
};
```

## 例子

```js
takeWhile([1, 2, 3, 4], n => n >= 3); // [1, 2]
```
