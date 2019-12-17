# cloneRegExp

Clones a regular expression.

Use `new RegExp()`, `RegExp.source` and `RegExp.flags` to clone the given regular expression.

## 翻译

克隆正则表达式。

使用`new RegExp（）`，`RegExp.source`和`RegExp.flags`克隆给定的正则表达式。

## 代码

```js
const cloneRegExp = regExp => new RegExp(regExp.source, regExp.flags);
```

## 例子

```js
const regExp = /lorem ipsum/gi;
const regExp2 = cloneRegExp(regExp); // /lorem ipsum/gi
```
