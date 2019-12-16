# unary

Creates a function that accepts up to one argument, ignoring any additional arguments.

Call the provided function, `fn`, with just the first argument given.

## Translate

创建一个函数，该函数最多接受一个参数，而忽略任何其他参数。

调用提供的函数`fn`，仅给出第一个参数。

## Code

```js
const unary = fn => val => fn(val);
```

## Example

```js
['6', '8', '10'].map(unary(parseInt)); // [6, 8, 10]
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
