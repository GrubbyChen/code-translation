# pickBy

Creates an object composed of the properties the given function returns truthy for. The function is invoked with two arguments: (value, key).

Use `Object.keys(obj)` and `Array.prototype.filter()`to remove the keys for which `fn` returns a falsy value.
Use `Array.prototype.reduce()` to convert the filtered keys back to an object with the corresponding key-value pairs.

## Translate

创建一个由给定函数返回true的属性组成的对象。该函数使用两个参数调用：（值，键）。

使用Object.keys（obj）和Array.prototype.filter（）删除fn返回伪造值的键。
使用Array.prototype.reduce（）将过滤后的键转换回具有相应键值对的对象。

## Code

```js
const pickBy = (obj, fn) =>
  Object.keys(obj)
    .filter(k => fn(obj[k], k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});
```

## Example

```js
pickBy({ a: 1, b: '2', c: 3 }, x => typeof x === 'number'); // { 'a': 1, 'c': 3 }
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
