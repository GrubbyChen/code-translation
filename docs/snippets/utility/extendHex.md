# extendHex

将 3 位十六进制颜色代码扩展为 6 位。

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
