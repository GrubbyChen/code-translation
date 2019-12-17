# isSymbol

检查给定的参数是否为符号。

使用`typeof`来检查一个值是否被归类为符号原语。

## 代码

```js
const isSymbol = val => typeof val === 'symbol';
```

## 例子

```js
isSymbol(Symbol('x')); // true
```
