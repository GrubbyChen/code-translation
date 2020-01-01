# standardDeviation

返回数字数组的标准差。

- 使用 `Array.prototype.reduce()` 计算平均值、方差以及方差之和（值方差），然后确定标准差。
- 第二个参数默认值为 `false` 获取样本标准差，设置为 `true` 以获取总体标准偏差

## 代码

```js
const standardDeviation = (arr, usePopulation = false) => {
  const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;
  return Math.sqrt(
    arr.reduce((acc, val) => acc.concat((val - mean) ** 2), []).reduce((acc, val) => acc + val, 0) /
      (arr.length - (usePopulation ? 0 : 1))
  );
};
```

## 例子

```js
standardDeviation([10, 2, 38, 23, 38, 23, 21]); // 13.284434142114991 (sample)
standardDeviation([10, 2, 38, 23, 38, 23, 21], true); // 12.29899614287479 (population)
```
