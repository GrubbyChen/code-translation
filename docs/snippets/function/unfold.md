# unfold（-）

Builds an array, using an iterator function and an initial seed value.

Use a `while` loop and `Array.prototype.push()` to call the function repeatedly until it returns `false`.
The iterator function accepts one argument (`seed`) and must always return an array with two elements ([`value`, `nextSeed`]) or `false` to terminate.

## 翻译

使用迭代器函数和初始种子值构建数组。

使用while循环和Array.prototype.push()重复调用该函数，直到返回false为止。
迭代器函数接受一个参数(“ seed”)，并且必须始终返回包含两个元素([[value]，“ nextSeed”])或“ false”的数组以终止。

## 代码

```js
const unfold = (fn, seed) => {
  let result = [],
    val = [null, seed];
  while ((val = fn(val[1]))) result.push(val[0]);
  return result;
};
```

## 例子

```js
var f = n => (n > 50 ? false : [-n, n + 10]);
unfold(f, 10); // [-10, -20, -30, -40, -50]
```
