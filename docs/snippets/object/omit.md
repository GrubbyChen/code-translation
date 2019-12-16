# omit

Omits the key-value pairs corresponding to the given keys from an object.

Use `Object.keys(obj)`, `Array.prototype.filter()` and `Array.prototype.includes()` to remove the provided keys.
Use `Array.prototype.reduce()` to convert the filtered keys back to an object with the corresponding key-value pairs.

## Translate

从对象中省略与给定键对应的键值对。

使用Object.keys（obj），Array.prototype.filter（）和Array.prototype.includes（）删除提供的键。
使用Array.prototype.reduce（）将过滤后的键转换回具有相应键值对的对象。

## Code

```js
const omit = (obj, arr) =>
  Object.keys(obj)
    .filter(k => !arr.includes(k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});
```

## Example

```js
omit({ a: 1, b: '2', c: 3 }, ['b']); // { 'a': 1, 'c': 3 }
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
