# midpoint

Calculates the midpoint between two pairs of (x,y) points.

Destructure the array to get `x1`, `y1`, `x2` and `y2`, calculate the midpoint for each dimension by dividing the sum of the two endpoints by `2`.

## Translate

计算两对（x，y）点之间的中点。

分解数组以获得x1，y1，x2和y2，通过将两个端点的总和除以2来计算每个维度的中点。

## Code

```js
const midpoint = ([x1, y1], [x2, y2]) => [(x1 + x2) / 2, (y1 + y2) / 2];
```

## Example

```js
midpoint([2, 2], [4, 4]); // [3, 3]
midpoint([4, 4], [6, 6]); // [5, 5]
midpoint([1, 3], [2, 4]); // [1.5, 3.5]
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
