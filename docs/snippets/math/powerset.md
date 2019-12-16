# powerset

Returns the powerset of a given array of numbers.

Use `Array.prototype.reduce()` combined with `Array.prototype.map()` to iterate over elements and combine into an array containing all combinations.

## Translate

返回给定数字数组的幂集。

结合使用Array.prototype.reduce（）和Array.prototype.map（）来遍历元素并合并成包含所有组合的数组。

## Code

```js
const powerset = arr => arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]]);
```

## Example

```js
powerset([1, 2]); // [[], [1], [2], [2, 1]]
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>