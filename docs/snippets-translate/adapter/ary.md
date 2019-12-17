# ary

创建一个最多接受n个参数的函数，而忽略任何其他参数。

使用Array.prototype.slice（0，n）和散布运算符（...）调用提供的函数fn，最多包含n个参数。

## 代码

```js
const ary = (fn, n) => (...args) => fn(...args.slice(0, n));
```

## 例子

```js
const firstTwoMax = ary(Math.max, 2);
[[2, 6, 'a'], [6, 4, 8], [10]].map(x => firstTwoMax(...x)); // [6, 6, 10]
```
