# attempt

尝试使用提供的参数调用函数，返回函数的执行结果或捕获的错误对象。

使用 `try ... catch` 块返回函数结果或适当的错误。

## 代码

```js
const attempt = (fn, ...args) => {
  try {
    return fn(...args);
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
};
```

## 例子

```js
var elements = attempt(function(selector) {
  return document.querySelectorAll(selector);
}, '>_>');
if (elements instanceof Error) elements = []; // elements = []
```
