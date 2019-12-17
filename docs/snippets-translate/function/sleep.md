# sleep

延迟异步功能的执行。

通过使其进入睡眠状态并返回一个Promise来延迟执行async函数的一部分。

## 代码

```js
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
```

## 例子

```js
async function sleepyWork() {
  console.log("I'm going to sleep for 1 second.");
  await sleep(1000);
  console.log('I woke up after 1 second.');
}
```
