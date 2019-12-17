# forEachRight

从数组的最后一个元素开始，对每个数组元素执行一次提供的功能。

使用Array.prototype.slice（0）克隆给定的数组，使用Array.prototype.reverse（）反转它，并使用Array.prototype.forEach（）遍历反转的数组。

## 代码

```js
const forEachRight = (arr, callback) =>
  arr
    .slice(0)
    .reverse()
    .forEach(callback);
```

## 例子

```js
forEachRight([1, 2, 3, 4], val => console.log(val)); // '4', '3', '2', '1'
```
