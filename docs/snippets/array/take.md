# take

Returns an array with n elements removed from the beginning.

Use `Array.prototype.slice()` to create a slice of the array with `n` elements taken from the beginning.

## Translate

返回一个数组，其中从开头删除了n个元素。

使用Array.prototype.slice（）从一开始就使用n个元素创建数组的一部分。

## Code

```js
const take = (arr, n = 1) => arr.slice(0, n);
```

## Example

```js
take([1, 2, 3], 5); // [1, 2, 3]
take([1, 2, 3], 0); // []
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
