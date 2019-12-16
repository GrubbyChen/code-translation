# initial

Returns all the elements of an array except the last one.

Use `arr.slice(0,-1)` to return all but the last element of the array.

## Translate

返回数组中除最后一个元素之外的所有元素。

使用`arr.slice（0，-1）`返回除数组的最后一个元素以外的所有元素。

## Code

```js
const initial = arr => arr.slice(0, -1);
```

## Example

```js
initial([1, 2, 3]); // [1,2]
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
