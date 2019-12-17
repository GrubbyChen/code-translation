# over

Creates a function that invokes each provided function with the arguments it receives and returns the results.

Use `Array.prototype.map()` and `Function.prototype.apply()` to apply each function to the given arguments.

## 翻译

创建一个函数，该函数使用接收到的参数调用每个提供的函数并返回结果。

使用Array.prototype.map（）和Function.prototype.apply（）将每个函数应用于给定参数。

## 代码

```js
const over = (...fns) => (...args) => fns.map(fn => fn.apply(null, args));
```

## 例子

```js
const minMax = over(Math.min, Math.max);
minMax(1, 2, 3, 4, 5); // [1,5]
```
