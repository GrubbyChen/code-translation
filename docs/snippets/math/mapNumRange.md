# mapNumRange

Maps a number from one range to another range.

Returns `num` mapped between `outMin`-`outMax` from `inMin`-`inMax`.

## Translate

将数字从一个范围映射到另一范围。

从`inMin`-`inMax`返回映射在`outMin`-`outMax`之间的`num`。

## Code

```js
const mapNumRange = (num, inMin, inMax, outMin, outMax) =>
  ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
```

## Example

```js
mapNumRange(5, 0, 10, 0, 100); // 50
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
