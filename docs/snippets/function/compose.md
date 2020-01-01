# compose

从右到左的依次执行多个函数。

- 使用 `Array.prototype.reduce()` 实现从右到左的函数合成。
- 最后一个函数（最先执行）可以接受一个或多个参数，其余函数只能接受一个参数。

## 代码

```js
const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));
```

## 例子

```js
const add5 = x => x + 5;
const multiply = (x, y) => x * y;
const multiplyAndAdd5 = compose(
  add5,
  multiply
);
multiplyAndAdd5(5, 2); // 15
```
