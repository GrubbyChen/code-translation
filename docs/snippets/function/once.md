# once

确保一个函数仅被调用一次。

- 利用闭包，使用一个 `called` 的标志符，并在第一次调用该函数时将其设置为 `true`，以防止再次调用该函数。
- 为了允许函数改变它的 `this` 上下文（例如在事件监听器中），必须使用 `function` 关键字，并且所提供的函数必须应用上下文。
- 允许使用 扩展运算符 `...` 为函数提供任意数量的参数。

## 代码

```js
const once = fn => {
  let called = false;
  return function(...args) {
    if (called) return;
    called = true;
    return fn.apply(this, args);
  };
};
```

## 例子

```js
const startApp = function(event) {
  console.log(this, event); // document.body, MouseEvent
};
document.body.addEventListener('click', once(startApp)); // only runs `startApp` once upon click
```
