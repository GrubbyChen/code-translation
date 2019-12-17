# delay

Invokes the provided function after `wait` milliseconds.

Use `setTimeout()` to delay execution of `fn`.
Use the spread (`...`) operator to supply the function with an arbitrary number of arguments.

## 翻译

在“ wait”毫秒后调用提供的功能。

使用setTimeout（）延迟执行fn。
使用spread（`...`）运算符可以为函数提供任意数量的参数。

## 代码

```js
const delay = (fn, wait, ...args) => setTimeout(fn, wait, ...args);
```

## 例子

```js
delay(
  function(text) {
    console.log(text);
  },
  1000,
  'later'
); // Logs 'later' after one second.
```
