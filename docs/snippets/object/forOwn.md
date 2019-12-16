# forOwn

Iterates over all own properties of an object, running a callback for each one.

Use `Object.keys(obj)` to get all the properties of the object, `Array.prototype.forEach()` to run the provided function for each key-value pair. The callback receives three arguments - the value, the key and the object.

## Translate

遍历一个对象的所有自身属性，为每个对象运行一个回调。

使用Object.keys（obj）获取对象的所有属性，使用Array.prototype.forEach（）为每个键值对运行提供的函数。回调接收三个参数-值，键和对象。

## Code

```js
const forOwn = (obj, fn) => Object.keys(obj).forEach(key => fn(obj[key], key, obj));
```

## Example

```js
forOwn({ foo: 'bar', a: 1 }, v => console.log(v)); // 'bar', 1
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
