# fibonacci

生成一个数组，其中包含[斐波那契序列](https://baike.baidu.com/item/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0%E5%88%97/99145?fr=aladdin)，直到长度为 `n`。

- 创建一个指定长度的空数组，前两个值初始化为 `0` 和 `1`。
- 使用 `Array.prototype.reduce()`，从第三个值开始计算前两个值之和，并将值添加到数组中。

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
