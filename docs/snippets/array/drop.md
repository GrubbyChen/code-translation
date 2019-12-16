# drop

Returns a new array with `n` elements removed from the left.

Use `Array.prototype.slice()` to remove the specified number of elements from the left.

## Translate

返回一个新数组，其中左侧删除了n个元素。

使用Array.prototype.slice（）从左侧删除指定数量的元素。

## Code

```js
const drop = (arr, n = 1) => arr.slice(n);
```

## Example

```js
drop([1, 2, 3]); // [2,3]
drop([1, 2, 3], 2); // [3]
drop([1, 2, 3], 42); // []
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
