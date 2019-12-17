# bind

创建一个在给定上下文中调用“ fn”的函数，可以选择将任何其他提供的参数添加到参数的开头。

返回一个使用Function.prototype.apply（）的function将给定的context应用于fn。
使用Array.prototype.concat（）将任何其他提供的参数放在参数之前。

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
