# escapeRegExp

Escapes a string to use in a regular expression.

Use `String.prototype.replace()` to escape special characters.

## 翻译

转义要在正则表达式中使用的字符串。

使用String.prototype.replace()转义特殊字符。

## 代码

```js
const escapeRegExp = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
```

## 例子

```js
escapeRegExp('(test)'); // \\(test\\)
```
