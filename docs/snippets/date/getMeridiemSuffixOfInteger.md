# getMeridiemSuffixOfInteger

Converts an integer to a suffixed string, adding `am` or `pm` based on its value.

Use the modulo operator (`%`) and conditional checks to transform an integer to a stringified 12-hour format with meridiem suffix.

## Translate

将整数转换为带后缀的字符串，并根据其值添加“ am”或“ pm”。

使用模运算符（`％`）和条件检查将整数转换为带有后缀meridiem的字符串化12小时格式。

## Code

```js
const getMeridiemSuffixOfInteger = num =>
  num === 0 || num === 24
    ? 12 + 'am'
    : num === 12
    ? 12 + 'pm'
    : num < 12
    ? (num % 12) + 'am'
    : (num % 12) + 'pm';
```

## Example

```js
getMeridiemSuffixOfInteger(0); // "12am"
getMeridiemSuffixOfInteger(11); // "11am"
getMeridiemSuffixOfInteger(13); // "1pm"
getMeridiemSuffixOfInteger(25); // "1pm"
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
