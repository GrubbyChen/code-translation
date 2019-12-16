# isUpperCase

Checks if a string is upper case.

Convert the given string to upper case, using `String.prototype.toUpperCase()` and compare it to the original.

## Translate

检查字符串是否为大写。

使用String.prototype.toUpperCase（）将给定的字符串转换为大写，并将其与原始字符串进行比较。

## Code

```js
const isUpperCase = str => str === str.toUpperCase();
```

## Example

```js
isUpperCase('ABC'); // true
isUpperCase('A3@$'); // true
isUpperCase('aB4'); // false
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
