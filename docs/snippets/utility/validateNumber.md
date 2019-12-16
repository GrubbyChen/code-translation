# validateNumber

Returns `true` if the given value is a number, `false` otherwise.

Use `!isNaN()` in combination with `parseFloat()` to check if the argument is a number.
Use `isFinite()` to check if the number is finite.
Use `Number()` to check if the coercion holds.

## Translate

如果给定值是数字，则返回“ true”，否则返回“ false”。

将`！isNaN（）`与`parseFloat（）`结合使用以检查参数是否为数字。
使用`isFinite（）`检查数字是否有限。
使用Number（）检查强制是否成立。

## Code

```js
const validateNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;
```

## Example

```js
validateNumber('10'); // true
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
