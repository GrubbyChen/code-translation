# isPrime

Checks if the provided integer is a prime number.

Check numbers from `2` to the square root of the given number.
Return `false` if any of them divides the given number, else return `true`, unless the number is less than `2`.

## 翻译

检查提供的整数是否为质数。

检查从2到给定数字平方根的数字。
如果它们中的任何一个除以给定的数字，则返回“ false”，否则返回“ true”，除非该数字小于2。

## 代码

```js
const isPrime = num => {
  const boundary = Math.floor(Math.sqrt(num));
  for (var i = 2; i <= boundary; i++) if (num % i === 0) return false;
  return num >= 2;
};
```

## 例子

```js
isPrime(11); // true
```
