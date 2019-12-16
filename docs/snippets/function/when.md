# when

Tests a value, `x`, against a predicate function. If `true`, return `fn(x)`. Else, return `x`. 

Return a function expecting a single value, `x`, that returns the appropriate value based on `pred`.

## Translate

针对谓词函数测试值“ x”。如果为true，则返回fn（x）。否则，返回`x`。

返回一个期望值为x的函数，该函数基于pred返回合适的值。

## Code

```js
const when = (pred, whenTrue) => x => (pred(x) ? whenTrue(x) : x);
```

## Example

```js
const doubleEvenNumbers = when(x => x % 2 === 0, x => x * 2);
doubleEvenNumbers(2); // 4
doubleEvenNumbers(1); // 1
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
