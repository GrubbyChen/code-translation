# pipeAsyncFunctions

对异步功能执行从左到右的功能组合。

- 使用带有扩展运算符 (`...`) 的 `Array.prototype.reduce()`，并使用 `Promise.then()` 从左到右执行功能组合。
- 这些函数可以返回以下组合：简单值或 `Promise` 或可以定义为通过 `await` 返回的异步值。
- 所有函数必须是一元的。

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
