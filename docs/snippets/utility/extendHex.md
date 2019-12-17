# extendHex

Extends a 3-digit color code to a 6-digit color code.

Use `Array.prototype.map()`, `String.prototype.split()` and `Array.prototype.join()` to join the mapped array for converting a 3-digit RGB notated hexadecimal color-code to the 6-digit form.
`Array.prototype.slice()` is used to remove `#` from string start since it's added once.

## 翻译

将3位颜色代码扩展为6位颜色代码。

使用Array.prototype.map（），String.prototype.split（）和Array.prototype.join（）连接映射的数组，以将3位RGB表示的十六进制颜色代码转换为6数字形式。
Array.prototype.slice（）用于从字符串开头删除＃，因为它被添加了一次。

## 代码

```js
const extendHex = shortHex =>
  '#' +
  shortHex
    .slice(shortHex.startsWith('#') ? 1 : 0)
    .split('')
    .map(x => x + x)
    .join('');
```

## 例子

```js
extendHex('#03f'); // '#0033ff'
extendHex('05a'); // '#0055aa'
```
