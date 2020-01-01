# composeRight

从左到右的依次执行多个函数。

- 使用 `Array.prototype.reduce()` 实现从左到右的函数合成。
- 第一个函数（最先执行）可以接受一个或多个参数，其余函数只能接受一个参数。

## 代码

```js
const composeRight = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)));
```

## 例子

```js
const add = (x, y) => x + y;
const square = x => x * x;
const addAndSquare = composeRight(add, square);
addAndSquare(1, 2); // 9
```
