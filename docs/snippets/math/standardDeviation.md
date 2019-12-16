# standardDeviation

Returns the standard deviation of an array of numbers.

Use `Array.prototype.reduce()` to calculate the mean, variance and the sum of the variance of the values, the variance of the values, then
determine the standard deviation.
You can omit the second argument to get the sample standard deviation or set it to `true` to get the population standard deviation.

## Translate

返回数字数组的标准偏差。

使用Array.prototype.reduce（）计算平均值，方差和值方差之和，值方差，然后
确定标准偏差。
您可以省略第二个参数以获取样本标准偏差，或者将其设置为“ true”以获取总体标准偏差。

## Code

```js
const standardDeviation = (arr, usePopulation = false) => {
  const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;
  return Math.sqrt(
    arr.reduce((acc, val) => acc.concat((val - mean) ** 2), []).reduce((acc, val) => acc + val, 0) /
      (arr.length - (usePopulation ? 0 : 1))
  );
};
```

## Example

```js
standardDeviation([10, 2, 38, 23, 38, 23, 21]); // 13.284434142114991 (sample)
standardDeviation([10, 2, 38, 23, 38, 23, 21], true); // 12.29899614287479 (population)
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>