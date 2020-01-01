# sleep

休眠一段时间。

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
