# lcm

返回两个或多个数字的最小公倍数。

使用最大公因数（GCD）公式和lcm（x，y）= x * y / gcd（x，y）`的事实来确定最小公倍数。
GCD公式使用递归。

## 代码

```js
const lcm = (...arr) => {
  const gcd = (x, y) => (!y ? x : gcd(y, x % y));
  const _lcm = (x, y) => (x * y) / gcd(x, y);
  return [...arr].reduce((a, b) => _lcm(a, b));
};
```

## 例子

```js
lcm(12, 7); // 84
lcm(...[1, 3, 4, 5]); // 60
```
