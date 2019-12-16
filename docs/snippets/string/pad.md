# pad

Pads a string on both sides with the specified character, if it's shorter than the specified length.

Use `String.padStart()` and `String.padEnd()` to pad both sides of the given string.
Omit the third argument, `char`, to use the whitespace character as the default padding character.

## Translate

如果字符串短于指定的长度，则在字符串的两边填充字符串。

使用`String.padStart（）`和`String.padEnd（）`填充给定字符串的两侧。
省略第三个参数“ char”，以将空白字符用作默认的填充字符。

## Code

```js
const pad = (str, length, char = ' ') =>
  str.padStart((str.length + length) / 2, char).padEnd(length, char);
```

## Example

```js
pad('cat', 8); // '  cat   '
pad(String(42), 6, '0'); // '004200'
pad('foobar', 3); // 'foobar'
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
