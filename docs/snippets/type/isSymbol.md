# isSymbol

Checks if the given argument is a symbol.

Use `typeof` to check if a value is classified as a symbol primitive.

## 翻译

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
