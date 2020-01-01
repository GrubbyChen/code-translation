# maxN

Returns the `n` maximum elements from the provided array.
If `n` is greater than or equal to the provided array's length, then return the original array (sorted in descending order).

Use `Array.prototype.sort()` combined with the spread operator (`...`) to create a shallow clone of the array and sort it in descending order.
Use `Array.prototype.slice()` to get the specified number of elements.
Omit the second argument, `n`, to get a one-element array.

## 翻译

从提供的数组中返回最大n个元素。
如果`n`大于或等于提供的数组长度，则返回原始数组(降序排列)。

将Array.prototype.sort()与散布运算符(...)结合使用可创建该数组的浅表副本，并按降序对其进行排序。
使用Array.prototype.slice()获取指定数量的元素。
省略第二个参数n，以获取一个单元素数组。

## 代码

```js
const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);
```

## 例子

```js
maxN([1, 2, 3]); // [3]
maxN([1, 2, 3], 2); // [3,2]
```
