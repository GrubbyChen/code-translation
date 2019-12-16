# without

Filters out the elements of an array, that have one of the specified values.

Use `Array.prototype.filter()` to create an array excluding(using `!Array.includes()`) all given values.

## Translate

筛选出具有指定值之一的数组元素。

使用Array.prototype.filter（）创建一个不包含所有给定值的数组（使用Array！includes（））。

## Code

```js
const without = (arr, ...args) => arr.filter(v => !args.includes(v));
```

## Example

```js
without([2, 1, 2, 3], 1, 2); // [3]
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
