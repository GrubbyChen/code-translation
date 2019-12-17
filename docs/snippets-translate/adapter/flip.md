# flip

Flip将函数用作参数，然后使第一个参数成为最后一个参数。

返回一个采用可变输入的闭包，并在应用其余参数之前将最后一个参数拼接为第一个参数。

## 代码

```js
const flip = fn => (first, ...rest) => fn(...rest, first);
```

## 例子

```js
let a = { name: 'John Smith' };
let b = {};
const mergeFrom = flip(Object.assign);
let mergePerson = mergeFrom.bind(null, a);
mergePerson(b); // == b
b = {};
Object.assign(b, a); // == b
```
