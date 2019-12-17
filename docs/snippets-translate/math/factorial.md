# factorial

计算数字的阶乘。

使用递归。
如果n小于或等于1，则返回1。
否则，返回“ n”和阶乘“ n-1”的乘积。
如果n为负数，则抛出异常。

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
