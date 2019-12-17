# nthArg

创建一个将参数从索引n处获取的函数。如果n为负，则返回末尾的第n个参数。

使用Array.prototype.slice（）在索引n处获取所需的参数。

## 代码

```js
const nthArg = n => (...args) => args.slice(n)[0];
```

## 例子

```js
const third = nthArg(2);
third(1, 2, 3); // 3
third(1, 2); // undefined
const last = nthArg(-1);
last(1, 2, 3, 4, 5); // 5
```
