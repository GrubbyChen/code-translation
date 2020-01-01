# isPrime

检查提供的整数是否为质数。

- 计算给定数字平方根的值，赋予变量 `boundary`。
- 如果给定的数字，不能被从 `2` 到 `boundary` 的值中的任何一个整除，则为质数。
- 小于 `2` 的值不是质数。

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
