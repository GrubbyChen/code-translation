# indexOfAll

Returns all indices of `val` in an array.
If `val` never occurs, returns `[]`.

Use `Array.prototype.reduce()` to loop over elements and store indices for matching elements.
Return the array of indices.

## Translate

返回数组中所有“ val”的索引。
如果`val`从未发生，则返回`[]`。

使用Array.prototype.reduce（）遍历元素并存储索引以匹配元素。
返回索引数组。

## Code

```js
const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);
```

## Example

```js
indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0,3]
indexOfAll([1, 2, 3], 4); // []
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
