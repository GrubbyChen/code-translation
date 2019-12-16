# transform

Applies a function against an accumulator and each key in the object (from left to right).

Use `Object.keys(obj)` to iterate over each key in the object, `Array.prototype.reduce()` to call the apply the specified function against the given accumulator.

## Translate

对一个累加器和对象中的每个键（从左到右）应用一个函数。

使用Object.keys（obj）遍历对象中的每个键，使用Array.prototype.reduce（）调用将指定函数应用于给定的累加器。

## Code

```js
const transform = (obj, fn, acc) => Object.keys(obj).reduce((a, k) => fn(a, obj[k], k, obj), acc);
```

## Example

```js
transform(
  { a: 1, b: 2, c: 1 },
  (r, v, k) => {
    (r[v] || (r[v] = [])).push(k);
    return r;
  },
  {}
); // { '1': ['a', 'c'], '2': ['b'] }
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
