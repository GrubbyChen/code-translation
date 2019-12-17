# unzipWith

创建元素数组，将[zip]（＃zip）生成的数组中的元素取消分组，并应用提供的函数。

使用Math.max.apply（）获取数组中最长的子数组，使用Array.prototype.map（）使每个元素成为数组。
使用Array.prototype.reduce（）和Array.prototype.forEach（）将分组值映射到单个数组。
使用Array.prototype.map（）和散布运算符（...）将fn应用于每个单独的元素组。

## 代码

```js
const unzipWith = (arr, fn) =>
  arr
    .reduce(
      (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
      Array.from({
        length: Math.max(...arr.map(x => x.length))
      }).map(x => [])
    )
    .map(val => fn(...val));
```

## 例子

```js
unzipWith([[1, 10, 100], [2, 20, 200]], (...args) => args.reduce((acc, v) => acc + v, 0)); // [3, 30, 300]
```
