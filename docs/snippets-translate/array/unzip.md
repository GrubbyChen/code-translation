# unzip

创建一个数组数组，将[zip]（＃zip）生成的数组中的元素取消分组。

使用Math.max.apply（）获取数组中最长的子数组，使用Array.prototype.map（）使每个元素成为数组。
使用Array.prototype.reduce（）和Array.prototype.forEach（）将分组值映射到单个数组。

## 代码

```js
const unzip = arr =>
  arr.reduce(
    (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
    Array.from({
      length: Math.max(...arr.map(x => x.length))
    }).map(x => [])
  );
```

## 例子

```js
unzip([['a', 1, true], ['b', 2, false]]); // [['a', 'b'], [1, 2], [true, false]]
unzip([['a', 1, true], ['b', 2]]); // [['a', 'b'], [1, 2], [true]]
```
