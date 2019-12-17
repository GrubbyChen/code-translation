# chainAsync

链接异步函数。

遍历包含异步事件的函数数组，并在每个异步事件完成后调用“ next”。

## 代码

```js
const chainAsync = fns => {
  let curr = 0;
  const last = fns[fns.length - 1];
  const next = () => {
    const fn = fns[curr++];
    fn === last ? fn() : fn(next);
  };
  next();
};
```

## 例子

```js
chainAsync([
  next => {
    console.log('0 seconds');
    setTimeout(next, 1000);
  },
  next => {
    console.log('1 second');
    setTimeout(next, 1000);
  },
  () => {
    console.log('2 second');
  }
]);
```
