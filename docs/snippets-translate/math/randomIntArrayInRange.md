# randomIntArrayInRange

返回指定范围内n个随机整数的数组。

使用Array.from（）创建一个特定长度的空数组，使用Math.random（）生成一个随机数并将其映射到所需的范围，使用Math.floor（）使其成为一个整数。

## 代码

```js
const randomIntArrayInRange = (min, max, n = 1) =>
  Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
```

## 例子

```js
randomIntArrayInRange(12, 35, 10); // [ 34, 14, 27, 17, 30, 27, 20, 26, 21, 14 ]
```
