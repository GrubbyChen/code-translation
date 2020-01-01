# gcd

计算两个或多个数字之间的[最大公约数](https://baike.baidu.com/item/%E6%9C%80%E5%A4%A7%E5%85%AC%E7%BA%A6%E6%95%B0/869308?fr=aladdin)。

- 内部的 `_gcd` 函数使用递归。
- 如果 `y` 等于 `0`，返回`x`。
- 否则调用 `gcd` 函数，传入 `y` 和 `x/y` 的余数。

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
