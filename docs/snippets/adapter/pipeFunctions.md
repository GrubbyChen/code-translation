# pipeFunctions

执行从左到右的功能合成。

- 使用带有扩展运算符 (`...`) 的 `Array.prototype.reduce()` 从左到右执行功能组合。
- 第一个（最左侧）函数可以接受一个或多个参数，其他函数必须是一元的。

## 代码

```js
const pipeFunctions = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)));
```

## 例子

```js
const add5 = x => x + 5;
const multiply = (x, y) => x * y;
const multiplyAndAdd5 = pipeFunctions(multiply, add5);
multiplyAndAdd5(5, 2); // 15
```
