# gcd

计算两个或多个数字/数组之间的最大公约数。

内部的_gcd函数使用递归。
基本情况是“ y”等于“ 0”。在这种情况下，返回`x`。
否则，返回GCD的y和除法x / y的余数。

## 代码

```js
const gcd = (...arr) => {
  const _gcd = (x, y) => (!y ? x : gcd(y, x % y));
  return [...arr].reduce((a, b) => _gcd(a, b));
};
```

## 例子

```js
gcd(8, 36); // 4
gcd(...[12, 8, 32]); // 4
```
