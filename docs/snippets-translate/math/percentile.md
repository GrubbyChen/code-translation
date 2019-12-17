# percentile

使用百分比公式来计算给定数组中有多少个数字小于或等于给定值。

使用Array.prototype.reduce（）来计算该值以下有多少个数字，以及相同值中有多少个数字，并应用百分位数公式。

## 代码

```js
const percentile = (arr, val) =>
  (100 * arr.reduce((acc, v) => acc + (v < val ? 1 : 0) + (v === val ? 0.5 : 0), 0)) / arr.length;
```

## 例子

```js
percentile([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6); // 55
```
