# once

Ensures a function is called only once.

Utilizing a closure, use a flag, `called`, and set it to `true` once the function is called for the first time, preventing it from being called again. In order to allow the function to have its `this` context changed (such as in an event listener), the `function` keyword must be used, and the supplied function must have the context applied.
Allow the function to be supplied with an arbitrary number of arguments using the rest/spread (`...`) operator.

## 翻译

确保一个函数仅被调用一次。

利用闭包，使用一个名为“”的标志，并在第一次调用该函数时将其设置为“ true”，以防止再次调用该函数。为了允许函数改变它的this上下文（例如在事件监听器中），必须使用function关键字，并且所提供的函数必须应用上下文。
允许使用rest / spread（`...`）运算符为函数提供任意数量的参数。

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
