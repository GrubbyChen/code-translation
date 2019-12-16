# truncateString

Truncates a string up to a specified length.

Determine if the string's `length` is greater than `num`.
Return the string truncated to the desired length, with `'...'` appended to the end or the original string.

## Translate

将字符串截断到指定长度。

确定字符串的“长度”是否大于“ num”。
返回截断为所需长度的字符串，并在末尾附加“'...”或原始字符串。

## Code

```js
const truncateString = (str, num) =>
  str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + '...' : str;
```

## Example

```js
truncateString('boomerang', 7); // 'boom...'
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
