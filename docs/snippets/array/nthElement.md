# nthElement

Returns the nth element of an array.

Use `Array.prototype.slice()` to get an array containing the nth element at the first place.
If the index is out of bounds, return `undefined`.
Omit the second argument, `n`, to get the first element of the array.

## Translate

返回数组的第n个元素。

使用Array.prototype.slice（）获得第一个包含第n个元素的数组。
如果索引超出范围，则返回`undefined`。
省略第二个参数n，以获取数组的第一个元素。

## Code

```js
const nthElement = (arr, n = 0) => (n === -1 ? arr.slice(n) : arr.slice(n, n + 1))[0];
```

## Example

```js
nthElement(['a', 'b', 'c'], 1); // 'b'
nthElement(['a', 'b', 'b'], -3); // 'a'
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
