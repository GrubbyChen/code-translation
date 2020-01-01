# factorial

计算数字的[阶乘](https://baike.baidu.com/item/%E9%98%B6%E4%B9%98/4437932?fr=aladdin)。

- 使用递归。
- 如果 `n` 为负数，则抛出异常。
- 如果 `n` 小于或等于 `1`，则返回 `1`。
- 否则返回 `n` 和阶乘 `n-1` 的乘积。

## 代码

```js
const factorial = n =>
  n < 0
    ? (() => {
        throw new TypeError('Negative numbers are not allowed!');
      })()
    : n <= 1
    ? 1
    : n * factorial(n - 1);
```

## 例子

```js
factorial(6); // 720
```
