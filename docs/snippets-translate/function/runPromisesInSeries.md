# runPromisesInSeries

连续运行一系列诺言。

使用Array.prototype.reduce（）创建一个承诺链，其中每个承诺在解决后都会返回下一个承诺。

## 代码

```js
const runPromisesInSeries = ps => ps.reduce((p, next) => p.then(next), Promise.resolve());
```

## 例子

```js
const delay = d => new Promise(r => setTimeout(r, d));
runPromisesInSeries([() => delay(1000), () => delay(2000)]); // Executes each promise sequentially, taking a total of 3 seconds to complete
```