# primes

Generates primes up to a given number, using the Sieve of Eratosthenes.

Generate an array from `2` to the given number. Use `Array.prototype.filter()` to filter out the values divisible by any number from `2` to the square root of the provided number.

## 翻译

使用Eratosthenes筛子产生最多给定数的质数。

从2到给定数字生成一个数组。使用Array.prototype.filter（）过滤掉从2到所提供数字的平方根的任何数字可整除的值。

## 代码

```js
const primes = num => {
  let arr = Array.from({ length: num - 1 }).map((x, i) => i + 2),
    sqroot = Math.floor(Math.sqrt(num)),
    numsTillSqroot = Array.from({ length: sqroot - 1 }).map((x, i) => i + 2);
  numsTillSqroot.forEach(x => (arr = arr.filter(y => y % x !== 0 || y === x)));
  return arr;
};
```

## 例子

```js
primes(10); // [2,3,5,7]
```
