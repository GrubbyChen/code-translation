# factorial

Calculates the factorial of a number.

Use recursion.
If `n` is less than or equal to `1`, return `1`.
Otherwise, return the product of `n` and the factorial of `n - 1`.
Throws an exception if `n` is a negative number.

## Translate

计算数字的阶乘。

使用递归。
如果n小于或等于1，则返回1。
否则，返回“ n”和阶乘“ n-1”的乘积。
如果n为负数，则抛出异常。

## Code

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

## Example

```js
factorial(6); // 720
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
