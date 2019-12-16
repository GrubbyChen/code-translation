# lcm

Returns the least common multiple of two or more numbers.

Use the greatest common divisor (GCD) formula and the fact that `lcm(x,y) = x * y / gcd(x,y)` to determine the least common multiple.
The GCD formula uses recursion.

## Translate

返回两个或多个数字的最小公倍数。

使用最大公因数（GCD）公式和lcm（x，y）= x * y / gcd（x，y）`的事实来确定最小公倍数。
GCD公式使用递归。

## Code

```js
const lcm = (...arr) => {
  const gcd = (x, y) => (!y ? x : gcd(y, x % y));
  const _lcm = (x, y) => (x * y) / gcd(x, y);
  return [...arr].reduce((a, b) => _lcm(a, b));
};
```

## Example

```js
lcm(12, 7); // 84
lcm(...[1, 3, 4, 5]); // 60
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
