# fibonacci

生成一个数组，其中包含斐波那契序列，直到第n个任期。

创建一个特定长度的空数组，初始化前两个值（“ 0”和“ 1”）。
使用“ Array.prototype.reduce（）”，使用前两个值（前两个值除外）之和将值添加到数组中。

## 代码

```js
const fibonacci = n =>
  Array.from({ length: n }).reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  );
```

## 例子

```js
fibonacci(6); // [0, 1, 1, 2, 3, 5]
```
