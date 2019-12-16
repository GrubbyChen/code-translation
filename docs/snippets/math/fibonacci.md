# fibonacci

Generates an array, containing the Fibonacci sequence, up until the nth term.

Create an empty array of the specific length, initializing the first two values (`0` and `1`).
Use `Array.prototype.reduce()` to add values into the array, using the sum of the last two values, except for the first two.

## Translate

生成一个数组，其中包含斐波那契序列，直到第n个任期。

创建一个特定长度的空数组，初始化前两个值（“ 0”和“ 1”）。
使用“ Array.prototype.reduce（）”，使用前两个值（前两个值除外）之和将值添加到数组中。

## Code

```js
const fibonacci = n =>
  Array.from({ length: n }).reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  );
```

## Example

```js
fibonacci(6); // [0, 1, 1, 2, 3, 5]
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
