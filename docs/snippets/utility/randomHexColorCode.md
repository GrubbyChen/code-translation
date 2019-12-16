# randomHexColorCode

Generates a random hexadecimal color code.

Use `Math.random` to generate a random 24-bit(6x4bits) hexadecimal number. Use bit shifting and then convert it to an hexadecimal String using `toString(16)`.

## Translate

生成随机的十六进制颜色代码。

使用Math.random生成一个随机的24位（6x4bits）十六进制数。使用位移，然后使用`toString（16）`将其转换为十六进制字符串。

## Code

```js
const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};
```

## Example

```js
randomHexColorCode(); // "#e34155"
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
