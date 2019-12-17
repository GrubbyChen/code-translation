# mostPerformant

Returns the index of the function in an array of functions which executed the fastest.

Use `Array.prototype.map()` to generate an array where each value is the total time taken to execute the function after `iterations` times. Use the difference in `performance.now()` values before and after to get the total time in milliseconds to a high degree of accuracy.
Use `Math.min()` to find the minimum execution time, and return the index of that shortest time which corresponds to the index of the most performant function.
Omit the second argument, `iterations`, to use a default of 10,000 iterations. The more iterations, the more reliable the result but the longer it will take.

## 翻译

返回执行最快的函数数组中的函数索引。

使用Array.prototype.map（）生成一个数组，其中每个值都是在迭代之后执行该函数所花费的总时间。使用前后的performance.now（）值中的差异来获得以毫秒为单位的总时间，以达到较高的准确性。
使用`Math.min（）`查找最短执行时间，并返回最短时间的索引，该索引对应于性能最高的函数的索引。
省略第二个参数“迭代”，以使用默认的10,000次迭代。迭代次数越多，结果越可靠，但花费的时间也越长。

## 代码

```js
const mostPerformant = (fns, iterations = 10000) => {
  const times = fns.map(fn => {
    const before = performance.now();
    for (let i = 0; i < iterations; i++) fn();
    return performance.now() - before;
  });
  return times.indexOf(Math.min(...times));
};
```

## 例子

```js
mostPerformant([
  () => {
    // Loops through the entire array before returning `false`
    [1, 2, 3, 4, 5, 6, 7, 8, 9, '10'].every(el => typeof el === 'number');
  },
  () => {
    // Only needs to reach index `1` before returning false
    [1, '2', 3, 4, 5, 6, 7, 8, 9, 10].every(el => typeof el === 'number');
  }
]); // 1
```
