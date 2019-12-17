# pipeFunctions

Performs left-to-right function composition.

Use `Array.prototype.reduce()` with the spread operator (`...`) to perform left-to-right function composition.
The first (leftmost) function can accept one or more arguments; the remaining functions must be unary.

## 翻译

执行从左到右的功能合成。

使用带有传播运算符（...）的Array.prototype.reduce（）来执行从左到右的功能合成。
第一个（最左侧）函数可以接受一个或多个参数。其余功能必须是一元的。

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
