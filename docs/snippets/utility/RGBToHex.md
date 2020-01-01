# RGBToHex

将 RGB 色值转换为十六进制颜色代码。

## 代码

```js
const RGBToHex = (r, g, b) => `#${((r << 16) + (g << 8) + b).toString(16).padStart(6, '0')}`;
```

## 例子

```js
RGBToHex(255, 165, 1); // '#ffa501'
```
