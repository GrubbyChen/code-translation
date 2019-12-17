# luhnCheck

Implementation of the [Luhn Algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm) used to validate a variety of identification numbers, such as credit card numbers, IMEI numbers, National Provider Identifier numbers etc.

Use `String.prototype.split('')`, `Array.prototype.reverse()` and `Array.prototype.map()` in combination with `parseInt()` to obtain an array of digits.
Use `Array.prototype.splice(0,1)` to obtain the last digit.
Use `Array.prototype.reduce()` to implement the Luhn Algorithm.
Return `true` if `sum` is divisible by `10`, `false` otherwise.

## 翻译

[Luhn算法]（https://en.wikipedia.org/wiki/Luhn_algorithm）的实现，用于验证各种标识号，例如信用卡号，IMEI号，国家提供商标识号等。

结合使用String.prototype.split（''），Array.prototype.reverse（）和Array.prototype.map（）和parseInt（）来获得数字数组。
使用Array.prototype.splice（0,1）获得最后一位。
使用Array.prototype.reduce（）实现Luhn算法。
如果sum被10整除，则返回true，否则返回false。

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
