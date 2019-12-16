# isBoolean

Checks if the given argument is a native boolean element.

Use `typeof` to check if a value is classified as a boolean primitive.

## Translate

检查给定参数是否为本地布尔元素。

使用`typeof`来检查一个值是否被归类为布尔型原语。

## Code

```js
const isBoolean = val => typeof val === 'boolean';
```

## Example

```js
isBoolean(null); // false
isBoolean(false); // true
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
