# difference

Returns the difference between two arrays.

Create a `Set` from `b`, then use `Array.prototype.filter()` on `a` to only keep values not contained in `b`.

## Translate

返回两个数组之间的差。

从b中创建一个Set，然后在a中使用Array.prototype.filter（）来仅保留b中不包含的值。

## Code

```js
const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};
```

## Example

```js
difference([1, 2, 3], [1, 2, 4]); // [3]
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
