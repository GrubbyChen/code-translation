# isArrayLike

Checks if the provided argument is array-like (i.e. is iterable).

Check if the provided argument is not `null` and that its `Symbol.iterator` property is a function.

## Translate

检查所提供的参数是否类似于数组（即可迭代）。

检查所提供的参数是否不是null，并且其Symbol.iterator属性是否为函数。

## Code

```js
const isArrayLike = obj => obj != null && typeof obj[Symbol.iterator] === 'function';
```

## Example

```js
isArrayLike(document.querySelectorAll('.className')); // true
isArrayLike('abc'); // true
isArrayLike(null); // false
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
