# flatten

将数组展平到指定深度。

使用递归，将每个深度级别的“深度”递减1。
使用`Array.prototype.reduce（）`和`Array.prototype.concat（）`合并元素或数组。
基本情况下，对于“深度”等于“ 1”，将停止递归。
省略第二个参数“ depth”以仅展平至深度“ 1”（单展平）。

## 代码

```js
const flatten = (arr, depth = 1) =>
  arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);
```

## 例子

```js
flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]
```
