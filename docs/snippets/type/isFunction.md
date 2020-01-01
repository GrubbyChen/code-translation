# isFunction

检查传入的参数是否为函数。

## 代码

```js
const isFunction = val => typeof val === 'function';
```

## 例子

```js
isFunction('x'); // false
isFunction(x => x); // true
```
