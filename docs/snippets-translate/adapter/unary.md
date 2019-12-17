# unary

创建一个函数，该函数最多接受一个参数，而忽略任何其他参数。

调用提供的函数`fn`，仅给出第一个参数。

## 代码

```js
const unary = fn => val => fn(val);
```

## 例子

```js
['6', '8', '10'].map(unary(parseInt)); // [6, 8, 10]
```
