# isFunction

Checks if the given argument is a function.

Use `typeof` to check if a value is classified as a function primitive.

## Translate

检查给定参数是否为函数。

使用`typeof`来检查一个值是否被归类为函数原语。

## Code

```js
const isFunction = val => typeof val === 'function';
```

## Example

```js
isFunction('x'); // false
isFunction(x => x); // true
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
