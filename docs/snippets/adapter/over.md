# over

创建一个函数，该函数使用接收到的参数调用每个提供的函数并返回结果。

## 代码

```js
const over = (...fns) => (...args) => fns.map(fn => fn.apply(null, args));
```

## 例子

```js
const minMax = over(Math.min, Math.max);
minMax(1, 2, 3, 4, 5); // [1,5]
```
