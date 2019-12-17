# bindKey

创建一个函数，该函数在对象的给定键处调用该方法，可以选择将任何其他提供的参数添加到参数的开头。

返回一个使用Function.prototype.apply（）将functioncontext [fn]绑定到context的function。
使用扩展运算符（`...`）在参数中附加任何其他提供的参数。

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
