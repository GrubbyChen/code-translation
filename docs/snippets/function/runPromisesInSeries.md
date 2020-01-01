# runPromisesInSeries

连续运行一系列 `Promise`。

- 使用 `Array.prototype.reduce()` 创建一个 `Promise` 队列，其中每个 `Promise` 在调用 `resolve` 后都会返回下一个 `Promise`。

## 代码

```js
const runPromisesInSeries = ps => ps.reduce((p, next) => p.then(next), Promise.resolve());
```

## 例子

```js
const delay = d => new Promise(r => setTimeout(r, d));
runPromisesInSeries([() => delay(1000), () => delay(2000)]); // Executes each promise sequentially, taking a total of 3 seconds to complete
```
