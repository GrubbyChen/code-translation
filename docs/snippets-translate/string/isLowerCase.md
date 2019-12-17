# isLowerCase

检查字符串是否为小写。

使用String.toLowerCase（）将给定的字符串转换为小写，并将其与原始字符串进行比较。

## 代码

```js
const isLowerCase = str => str === str.toLowerCase();
```

## 例子

```js
isLowerCase('abc'); // true
isLowerCase('a3@$'); // true
isLowerCase('Ab4'); // false
```
