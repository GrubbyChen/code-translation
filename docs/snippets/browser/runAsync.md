# runAsync

Runs a function in a separate thread by using a [Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers), allowing long running functions to not block the UI.

Create a new `Worker` using a `Blob` object URL, the contents of which should be the stringified version of the supplied function.
Immediately post the return value of calling the function back.
Return a promise, listening for `onmessage` and `onerror` events and resolving the data posted back from the worker, or throwing an error.

## 翻译

通过使用[Web Worker]（https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers）在单独的线程中运行函数，从而允许长时间运行的函数不会阻塞UI。

使用Blob对象URL创建一个新的Worker，其内容应为所提供函数的字符串化版本。
立即发布回调该函数的返回值。
返回承诺，侦听onmessage和onerror事件，并解决从工作人员回传的数据，或者引发错误。

## 代码

```js
const runAsync = fn => {
  const worker = new Worker(
    URL.createObjectURL(new Blob([`postMessage((${fn})());`]), {
      type: 'application/javascript; charset=utf-8'
    })
  );
  return new Promise((res, rej) => {
    worker.onmessage = ({ data }) => {
      res(data), worker.terminate();
    };
    worker.onerror = err => {
      rej(err), worker.terminate();
    };
  });
};
```

## 例子

```js
const longRunningFunction = () => {
  let result = 0;
  for (let i = 0; i < 1000; i++)
    for (let j = 0; j < 700; j++) for (let k = 0; k < 300; k++) result = result + i + j + k;

  return result;
};
/*
  NOTE: Since the function is running in a different context, closures are not supported.
  The function supplied to `runAsync` gets stringified, so everything becomes literal.
  All variables and functions must be defined inside.
*/
runAsync(longRunningFunction).then(console.log); // 209685000000
runAsync(() => 10 ** 3).then(console.log); // 1000
let outsideVariable = 50;
runAsync(() => typeof outsideVariable).then(console.log); // 'undefined'
```
