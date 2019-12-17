# pipeAsyncFunctions

Performs left-to-right function composition for asynchronous functions.

Use `Array.prototype.reduce()` with the spread operator (`...`) to perform left-to-right function composition using `Promise.then()`.
The functions can return a combination of: simple values, `Promise`'s, or they can be defined as `async` ones returning through `await`.
All functions must be unary.

## 翻译

对异步功能执行从左到右的功能组合。

使用带有传播运算符（...）的Array.prototype.reduce（）来使用Promise.then（）从左到右执行功能组合。
这些函数可以返回以下组合：简单值，Promise或可以定义为通过await返回的异步值。
所有函数必须是一元的。

## 代码

```js
const pipeAsyncFunctions = (...fns) => arg => fns.reduce((p, f) => p.then(f), Promise.resolve(arg));
```

## 例子

```js
const sum = pipeAsyncFunctions(
  x => x + 1,
  x => new Promise(resolve => setTimeout(() => resolve(x + 2), 1000)),
  x => x + 3,
  async x => (await x) + 4
);
(async () => {
  console.log(await sum(5)); // 15 (after one second)
})();
```
