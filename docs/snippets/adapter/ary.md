# ary

Creates a function that accepts up to `n` arguments, ignoring any additional arguments.

Call the provided function, `fn`, with up to `n` arguments, using `Array.prototype.slice(0, n)` and the spread operator (`...`).

## 翻译

创建一个最多接受前 `n` 个参数的函数，而忽略任何其他参数。

使用 `Array.prototype.slice(0, n)` 和扩展运算符 (`...`) 调用提供的函数 `fn`，最多包含 `n` 个参数。

## 代码

```js
const ary = (fn, n) => (...args) => fn(...args.slice(0, n));
```

## 例子

```js
const firstTwoMax = ary(Math.max, 2); // 取传入的前两个参数的较大值
[[2, 6, 'a'], [6, 4, 8], [10]].map(x => firstTwoMax(...x)); // [6, 6, 10]
```
