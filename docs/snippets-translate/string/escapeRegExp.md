# escapeRegExp

转义要在正则表达式中使用的字符串。

使用String.prototype.replace（）转义特殊字符。

## 代码

```js
const escapeRegExp = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
```

## 例子

```js
escapeRegExp('(test)'); // \\(test\\)
```
