# composeRight

Performs left-to-right function composition.

Use `Array.prototype.reduce()` to perform left-to-right function composition.
The first (leftmost) function can accept one or more arguments; the remaining functions must be unary.

## Translate

执行从左到右的功能合成。

使用Array.prototype.reduce（）执行从左到右的功能合成。
第一个（最左侧）函数可以接受一个或多个参数。其余功能必须是一元的。

## Code

```js
const composeRight = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)));
```

## Example

```js
const add = (x, y) => x + y;
const square = x => x * x;
const addAndSquare = composeRight(add, square);
addAndSquare(1, 2); // 9
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
