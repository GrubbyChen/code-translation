# luhnCheck

[Luhn 算法](https://baike.baidu.com/item/Luhn%E7%AE%97%E6%B3%95/22799984?fr=aladdin)的实现，用于验证各种标识号，例如信用卡号，IMEI号，国家提供商标识号等。

- 结合使用 `String.prototype.split('')`、`Array.prototype.reverse()`、`Array.prototype.map()` 和 `parseInt()` 来获得数字数组。
- 使用 `Array.prototype.splice(0,1)` 获得最后一位字符。
- 使用 `Array.prototype.reduce()` 实现 `Luhn 算法`。
- 如果 `sum` 被 `10` 整除，则返回 `true`，否则返回 `false`。

## 代码

```js
const luhnCheck = num => {
  let arr = (num + '')
    .split('')
    .reverse()
    .map(x => parseInt(x));
  let lastDigit = arr.splice(0, 1)[0];
  let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
  sum += lastDigit;
  return sum % 10 === 0;
};
```

## 例子

```js
luhnCheck('4485275742308327'); // true
luhnCheck(6011329933655299); //  false
luhnCheck(123456789); // false
```
