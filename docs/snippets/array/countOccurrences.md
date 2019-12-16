# countOccurrences

Counts the occurrences of a value in an array.

Use `Array.prototype.reduce()` to increment a counter each time you encounter the specific value inside the array.

## Translate

计算数组中某个值的出现次数。

每次遇到数组中的特定值时，都可以使用Array.prototype.reduce（）来增加计数器。

## Code

```js
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
```

## Example

```js
countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
