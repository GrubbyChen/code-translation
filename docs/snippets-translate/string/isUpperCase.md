# isUpperCase

检查字符串是否为大写。

使用String.prototype.toUpperCase（）将给定的字符串转换为大写，并将其与原始字符串进行比较。

## 代码

```js
const isUpperCase = str => str === str.toUpperCase();
```

## 例子

```js
isUpperCase('ABC'); // true
isUpperCase('A3@$'); // true
isUpperCase('aB4'); // false
```
