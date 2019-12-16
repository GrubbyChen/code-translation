# isOdd

Returns `true` if the given number is odd, `false` otherwise.

Checks whether a number is odd or even using the modulo (`%`) operator.
Returns `true` if the number is odd, `false` if the number is even.

## Translate

如果给定数字为奇数，则返回“ true”，否则为“ false”。

使用模（％）运算符检查数字是奇数还是偶数。
如果数字为奇数，则返回“ true”，如果数字为偶数，则返回“ false”。

## Code

```js
const isOdd = num => num % 2 === 1;
```

## Example

```js
isOdd(3); // true
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>