# lowercaseKeys

Creates a new object from the specified object, where all the keys are in lowercase.

Use `Object.keys()` and `Array.prototype.reduce()` to create a new object from the specified object.
Convert each key in the original object to lowercase, using `String.toLowerCase()`.

## Translate

从指定的对象创建一个新的对象，其中所有键都小写。

使用Object.keys（）和Array.prototype.reduce（）从指定对象创建一个新对象。
使用String.toLowerCase（）将原始对象中的每个键转换为小写。

## Code

```js
const lowercaseKeys = obj =>
  Object.keys(obj).reduce((acc, key) => {
    acc[key.toLowerCase()] = obj[key];
    return acc;
  }, {});
```

## Example

```js
const myObj = { Name: 'Adam', sUrnAME: 'Smith' };
const myObjLower = lowercaseKeys(myObj); // {name: 'Adam', surname: 'Smith'};
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
