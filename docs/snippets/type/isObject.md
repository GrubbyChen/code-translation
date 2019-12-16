# isObject

Returns a boolean determining if the passed value is an object or not.

Uses the  `Object` constructor to create an object wrapper for the given value. 
If the value is `null` or `undefined`, create and return an empty object. Οtherwise, return an object of a type that corresponds to the given value.

## Translate

返回一个布尔值，确定传递的值是否是一个对象。

使用Object构造函数为给定值创建对象包装。
如果值为“ null”或“ undefined”，则创建并返回一个空对象。另外，返回与给定值对应的类型的对象。

## Code

```js
const isObject = obj => obj === Object(obj);
```

## Example

```js
isObject([1, 2, 3, 4]); // true
isObject([]); // true
isObject(['Hello!']); // true
isObject({ a: 1 }); // true
isObject({}); // true
isObject(true); // false
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
