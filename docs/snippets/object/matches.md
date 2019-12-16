# matches

Compares two objects to determine if the first one contains equivalent property values to the second one.

Use `Object.keys(source)` to get all the keys of the second object, then `Array.prototype.every()`, `Object.hasOwnProperty()` and strict comparison to determine if all keys exist in the first object and have the same values.

## Translate

比较两个对象，以确定第一个对象是否包含与第二个对象相同的属性值。

使用Object.keys（source）获取第二个对象的所有键，然后使用Array.prototype.every（），Object.hasOwnProperty（）和严格比较来确定所有键是否都存在于第一个对象中并具有相同的值。

## Code

```js
const matches = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
```

## Example

```js
matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true }); // true
matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true }); // false
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
