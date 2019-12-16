# hexToRGB

Converts a color code to a `rgb()` or `rgba()` string if alpha value is provided.

Use bitwise right-shift operator and mask bits with `&` (and) operator to convert a hexadecimal color code (with or without prefixed with `#`) to a string with the RGB values. If it's 3-digit color code, first convert to 6-digit version. If an alpha value is provided alongside 6-digit hex, give `rgba()` string in return.

## Translate

如果提供了alpha值，则将颜色代码转换为rgb（）或rgba（）字符串。

使用按位右移运算符，并使用带有“＆”（和）运算符的掩码位将十六进制颜色代码（带有或不带有“＃”前缀）转换为具有RGB值的字符串。如果是3位数的颜色代码，请先转换为6位数的版本。如果在6位数的十六进制旁边提供了alpha值，则返回`rgba（）`字符串。

## Code

```js
const hexToRGB = hex => {
  let alpha = false,
    h = hex.slice(hex.startsWith('#') ? 1 : 0);
  if (h.length === 3) h = [...h].map(x => x + x).join('');
  else if (h.length === 8) alpha = true;
  h = parseInt(h, 16);
  return (
    'rgb' +
    (alpha ? 'a' : '') +
    '(' +
    (h >>> (alpha ? 24 : 16)) +
    ', ' +
    ((h & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8)) +
    ', ' +
    ((h & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0)) +
    (alpha ? `, ${h & 0x000000ff}` : '') +
    ')'
  );
};
```

## Example

```js
hexToRGB('#27ae60ff'); // 'rgba(39, 174, 96, 255)'
hexToRGB('27ae60'); // 'rgb(39, 174, 96)'
hexToRGB('#fff'); // 'rgb(255, 255, 255)'
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
