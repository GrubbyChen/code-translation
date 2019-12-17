# converge

Accepts a converging function and a list of branching functions and returns a function that applies each branching function to the arguments and the results of the branching functions are passed as arguments to the converging function.

Use `Array.prototype.map()` and `Function.prototype.apply()` to apply each function to the given arguments.
Use the spread operator (`...`) to call `coverger` with the results of all other functions.

## 翻译

接受收敛函数和分支函数列表，然后返回将每个分支函数应用于参数的函数，并将分支函数的结果作为参数传递给收敛函数。

使用Array.prototype.map（）和Function.prototype.apply（）将每个函数应用于给定参数。
使用价差运算符（...）调用带有所有其他函数结果的`coverger`。

## 代码

```js
const converge = (converger, fns) => (...args) => converger(...fns.map(fn => fn.apply(null, args)));
```

## 例子

```js
const average = converge((a, b) => a / b, [
  arr => arr.reduce((a, v) => a + v, 0),
  arr => arr.length
]);
average([1, 2, 3, 4, 5, 6, 7]); // 4
```
