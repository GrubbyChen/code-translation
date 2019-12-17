# collectInto

Changes a function that accepts an array into a variadic function.

Given a function, return a closure that collects all inputs into an array-accepting function.

## 翻译

将接受数组的函数更改为可变函数。

给定一个函数，返回一个将所有输入收集到数组接受函数的闭包。

## 代码

```js
const collectInto = fn => (...args) => fn(args);
```

## 例子

```js
const Pall = collectInto(Promise.all.bind(Promise));
let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
let p3 = new Promise(resolve => setTimeout(resolve, 2000, 3));
Pall(p1, p2, p3).then(console.log); // [1, 2, 3] (after about 2 seconds)
```
