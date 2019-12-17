# binomialCoefficient

计算两个整数“ n”和“ k”的二项式系数。

使用Number.isNaN（）检查两个值是否为NaN。
检查“ k”是否小于“ 0”，大于或等于“ n”，等于“ 1”或“ n-1”，并返回适当的结果。
检查“ n-k”是否小于“ k”，并相应地切换其值。
从2到k循环并计算二项式系数。
使用`Math.round（）`来解决计算中的舍入误差。

## 代码

```js
const binomialCoefficient = (n, k) => {
  if (Number.isNaN(n) || Number.isNaN(k)) return NaN;
  if (k < 0 || k > n) return 0;
  if (k === 0 || k === n) return 1;
  if (k === 1 || k === n - 1) return n;
  if (n - k < k) k = n - k;
  let res = n;
  for (let j = 2; j <= k; j++) res *= (n - j + 1) / j;
  return Math.round(res);
};
```

## 例子

```js
binomialCoefficient(8, 2); // 28
```
