# randomIntArrayInRange

返回指定范围内 `n` 个随机整数的数组。

## 代码

```js
const randomIntArrayInRange = (min, max, n = 1) =>
  Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
```

## 例子

```js
randomIntArrayInRange(12, 35, 10); // [ 34, 14, 27, 17, 30, 27, 20, 26, 21, 14 ]
```
