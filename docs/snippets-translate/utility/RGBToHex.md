# RGBToHex

将RGB分量的值转换为颜色代码。

使用按位左移运算符（`<<`）和`toString（16）`，然后使用String.padStart（6，'0'）将给定的RGB参数转换为十六进制字符串，以获取6位十六进制值。

## 代码

```js
const RGBToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');
```

## 例子

```js
RGBToHex(255, 165, 1); // 'ffa501'
```
