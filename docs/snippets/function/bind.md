# bind

创建一个在给定上下文中调用 `fn` 的函数，可以选择传入更多的参数进行合并。

- 返回一个使用 `Function.prototype.apply()` 的函数，将给定的上下文应用于 `fn`。
- 使用扩展运算符（`...`）在参数中将传入的其他参数进行合并。

## 代码

```js
const bind = (fn, context, ...boundArgs) => (...args) => fn.apply(context, [...boundArgs, ...args]);
```

## 例子

```js
function greet(greeting, punctuation) {
  return greeting + ' ' + this.user + punctuation;
}
const freddy = { user: 'fred' };
const freddyBound = bind(greet, freddy);
console.log(freddyBound('hi', '!')); // 'hi fred!'
```
