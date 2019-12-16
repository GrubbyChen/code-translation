# isDivisible

Checks if the first numeric argument is divisible by the second one.

Use the modulo operator (`%`) to check if the remainder is equal to `0`.

## Translate

检查第一个数字参数是否可被第二个参数整除。

使用取模运算符（％）检查余数是否等于0。

## Code

```js
const isDivisible = (dividend, divisor) => dividend % divisor === 0;
```

## Example

```js
isDivisible(6, 3); // true
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
