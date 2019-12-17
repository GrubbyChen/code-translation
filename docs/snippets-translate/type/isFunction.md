# isFunction

检查给定参数是否为函数。

使用`typeof`来检查一个值是否被归类为函数原语。

## 代码

```js
const isFunction = val => typeof val === 'function';
```

## 例子

```js
isFunction('x'); // false
isFunction(x => x); // true
```
