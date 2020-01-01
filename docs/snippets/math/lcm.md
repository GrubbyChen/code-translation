# lcm

返回两个或多个数字的[最小公倍数](https://baike.baidu.com/item/%E6%9C%80%E5%B0%8F%E5%85%AC%E5%80%8D%E6%95%B0/6192375?fr=aladdin)。

- 使用最大公因数 `gcd` 公式和 `lcm` 函数来确定最小公倍数。
- `gcd` 公式使用递归。

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
