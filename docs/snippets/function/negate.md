# negate

Negates a predicate function.

Take a predicate function and apply the not operator (`!`) to it with its arguments.

## Translate

否定谓词功能。

采取一个谓词函数，并将not运算符（`！`）应用于其参数。

## Code

```js
const negate = func => (...args) => !func(...args);
```

## Example

```js
[1, 2, 3, 4, 5, 6].filter(negate(n => n % 2 === 0)); // [ 1, 3, 5 ]
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
