# isPlainObject

Checks if the provided value is an object created by the Object constructor.

Check if the provided value is truthy, use `typeof` to check if it is an object and `Object.constructor` to make sure the constructor is equal to `Object`.

## Translate

检查提供的值是否是由Object构造函数创建的对象。

检查提供的值是否真实，使用`typeof`检查它是否是一个对象，并使用'Object.constructor'确保构造函数等于'Object'。

## Code

```js
const isPlainObject = val => !!val && typeof val === 'object' && val.constructor === Object;
```

## Example

```js
isPlainObject({ a: 1 }); // true
isPlainObject(new Map()); // false
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
