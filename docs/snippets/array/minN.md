# minN

Returns the `n` minimum elements from the provided array.
If `n` is greater than or equal to the provided array's length, then return the original array (sorted in ascending order).

Use `Array.prototype.sort()` combined with the spread operator (`...`) to create a shallow clone of the array and sort it in ascending order.
Use `Array.prototype.slice()` to get the specified number of elements.
Omit the second argument, `n`, to get a one-element array.

## 翻译

从提供的数组中返回n个最小元素。
如果`n`大于或等于提供的数组的长度，则返回原始数组(以升序排列)。

使用`Array.prototype.sort()`结合传播运算符(`...`)来创建数组的浅表克隆，并按升序对其进行排序。
使用Array.prototype.slice()获取指定数量的元素。
省略第二个参数n，以获取一个单元素数组。

## 代码

```js
const minN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);
```

## 例子

```js
minN([1, 2, 3]); // [1]
minN([1, 2, 3], 2); // [1,2]
```
