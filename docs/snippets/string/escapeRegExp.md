# escapeRegExp

Escapes a string to use in a regular expression.

Use `String.prototype.replace()` to escape special characters.

## Translate

转义要在正则表达式中使用的字符串。

使用String.prototype.replace（）转义特殊字符。

## Code

```js
const escapeRegExp = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
```

## Example

```js
escapeRegExp('(test)'); // \\(test\\)
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
