# findLastKey

Returns the last key that satisfies the provided testing function.
Otherwise `undefined` is returned.

Use `Object.keys(obj)` to get all the properties of the object, `Array.prototype.reverse()` to reverse their order and `Array.prototype.find()` to test the provided function for each key-value pair.
The callback receives three arguments - the value, the key and the object.

## Translate

返回满足提供的测试功能的最后一个键。
否则返回“未定义”。

使用Object.keys（obj）获取对象的所有属性，使用Array.prototype.reverse（）反转其顺序，使用Array.prototype.find（）测试每个键的提供的功能，价值对。
回调接收三个参数-值，键和对象。

## Code

```js
const findLastKey = (obj, fn) =>
  Object.keys(obj)
    .reverse()
    .find(key => fn(obj[key], key, obj));
```

## Example

```js
findLastKey(
  {
    barney: { age: 36, active: true },
    fred: { age: 40, active: false },
    pebbles: { age: 1, active: true }
  },
  o => o['active']
); // 'pebbles'
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
