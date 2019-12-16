# compose

Performs right-to-left function composition.

Use `Array.prototype.reduce()` to perform right-to-left function composition.
The last (rightmost) function can accept one or more arguments; the remaining functions must be unary.

## Translate

执行从右到左的功能合成。

使用Array.prototype.reduce（）执行从右到左的函数合成。
最后一个（最右边）函数可以接受一个或多个参数。其余功能必须是一元的。

## Code

```js
const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));
```

## Example

```js
const add5 = x => x + 5;
const multiply = (x, y) => x * y;
const multiplyAndAdd5 = compose(
  add5,
  multiply
);
multiplyAndAdd5(5, 2); // 15
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
