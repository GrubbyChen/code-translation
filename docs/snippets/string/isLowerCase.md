# isLowerCase

Checks if a string is lower case.

Convert the given string to lower case, using `String.toLowerCase()` and compare it to the original.

## Translate

检查字符串是否为小写。

使用String.toLowerCase（）将给定的字符串转换为小写，并将其与原始字符串进行比较。

## Code

```js
const isLowerCase = str => str === str.toLowerCase();
```

## Example

```js
isLowerCase('abc'); // true
isLowerCase('a3@$'); // true
isLowerCase('Ab4'); // false
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
