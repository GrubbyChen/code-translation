# clampNumber

Clamps `num` within the inclusive range specified by the boundary values `a` and `b`.

If `num` falls within the range, return `num`.
Otherwise, return the nearest number in the range.

## Translate

将num限制在边界值a和b指定的范围内。

如果num在此范围内，则返回num。
否则，返回范围内最接近的数字。

## Code

```js
const clampNumber = (num, a, b) => Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
```

## Example

```js
clampNumber(2, 3, 5); // 3
clampNumber(1, -1, -5); // -1
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
