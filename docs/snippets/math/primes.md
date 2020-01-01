# primes

返回从 `2` 到指定数字之间所有的质数。

- 从 `2` 到给定数字生成一个数组。
- 使用 `Array.prototype.filter()` 过滤掉从 `2` 到所提供数字的平方根的任何数字可整除的值。

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
