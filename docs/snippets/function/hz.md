# hz

返回每秒执行函数的次数。（`hz` 是 `赫兹` 的单位，频率单位是每秒一个周期）

- 使用 `performance.now()` 获取迭代循环前后的毫秒数差，以计算执行迭代功能的时间。
- 通过将毫秒转换为秒并除以经过的时间，返回每秒的执行次数。
- 第二个参数 `iterations` 表示遍历次数，遍历越多结果越精准，但耗时也更久，默认值为 100，表示执行 100 次迭代。

## 代码

```js
const hz = (fn, iterations = 100) => {
  const before = performance.now();
  for (let i = 0; i < iterations; i++) fn();
  return (1000 * iterations) / (performance.now() - before);
};
```

## 例子

```js
// 10,000 element array
const numbers = Array(10000)
  .fill()
  .map((_, i) => i);

// Test functions with the same goal: sum up the elements in the array
const sumReduce = () => numbers.reduce((acc, n) => acc + n, 0);
const sumForLoop = () => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  return sum;
};

// `sumForLoop` is nearly 10 times faster
Math.round(hz(sumReduce)); // 572
Math.round(hz(sumForLoop)); // 4784
```
