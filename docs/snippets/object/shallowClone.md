# shallowClone

Creates a shallow clone of an object.

Use `Object.assign()` and an empty object (`{}`) to create a shallow clone of the original.

## Translate

创建对象的浅表副本。

使用Object.assign（）和空对象（{}）创建原始对象的浅表副本。

## Code

```js
const shallowClone = obj => Object.assign({}, obj);
```

## Example

```js
const a = { x: true, y: 1 };
const b = shallowClone(a); // a !== b
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
