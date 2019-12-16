# isNegativeZero

Checks if the given value is equal to negative zero (`-0`).

Checks whether a passed value is equal to `0` and if `1` divided by the value equals `-Infinity`.

## Translate

检查给定值是否等于负零（“ -0”）。

检查传递的值是否等于“ 0”，以及“ 1”除以该值是否等于“ -Infinity”。

## Code

```js
const isNegativeZero = val => val === 0 && 1 / val === -Infinity;
```

## Example

```js
isNegativeZero(-0); // true
isNegativeZero(0); // false
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>