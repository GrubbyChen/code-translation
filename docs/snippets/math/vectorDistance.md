# vectorDistance

Returns the distance between two vectors.

Use `Array.prototype.reduce()`, `Math.pow()` and `Math.sqrt()` to calculate the Euclidean distance between two vectors.

## Translate

返回两个向量之间的距离。

使用Array.prototype.reduce（），Math.pow（）和Math.sqrt（）计算两个向量之间的欧几里得距离。

## Code

```js
const vectorDistance = (...coords) => {
  let pointLength = Math.trunc(coords.length / 2);
  let sum = coords
    .slice(0, pointLength)
    .reduce((acc, val, i) => acc + Math.pow(val - coords[pointLength + i], 2), 0);
  return Math.sqrt(sum);
};
```

## Example

```js
vectorDistance(10, 0, 5, 20, 0, 10); // 11.180339887498949
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
