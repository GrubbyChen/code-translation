# bindKey

创建一个函数，该函数在对象的给定键处调用该方法，可以选择传入更多的参数进行合并。

- 返回一个使用 `Function.prototype.apply()` 的函数，将给定的上下文应用于 `context[fn]`。
- 使用扩展运算符（`...`）在参数中将传入的其他参数进行合并。

## 代码

```js
const bindKey = (context, fn, ...boundArgs) => (...args) =>
  context[fn].apply(context, [...boundArgs, ...args]);
```

## 例子

```js
const freddy = {
  user: 'fred',
  greet: function(greeting, punctuation) {
    return greeting + ' ' + this.user + punctuation;
  }
};
const freddyBound = bindKey(freddy, 'greet');
console.log(freddyBound('hi', '!')); // 'hi fred!'
```
