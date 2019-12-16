# digitize

Converts a number to an array of digits.

Convert the number to a string, using the spread operator (`...`) to build an array.
Use `Array.prototype.map()` and `parseInt()` to transform each value to an integer.

## Translate

将数字转换为数字数组。

使用扩展运算符（`...`）将数字转换为字符串以构建数组。
使用Array.prototype.map（）和parseInt（）将每个值转换为整数。

## Code

```js
const digitize = n => [...`${n}`].map(i => parseInt(i));
```

## Example

```js
digitize(123); // [1, 2, 3]
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
