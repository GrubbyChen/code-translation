# objectFromPairs

Creates an object from the given key-value pairs.

Use `Array.prototype.reduce()` to create and combine key-value pairs.

## Translate

根据给定的键值对创建一个对象。

使用Array.prototype.reduce（）创建和组合键值对。

## Code

```js
const objectFromPairs = arr => arr.reduce((a, [key, val]) => ((a[key] = val), a), {});
```

## Example

```js
objectFromPairs([['a', 1], ['b', 2]]); // {a: 1, b: 2}
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
