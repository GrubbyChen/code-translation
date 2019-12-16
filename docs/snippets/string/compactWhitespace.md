# compactWhitespace

Returns a string with whitespaces compacted.

Use `String.prototype.replace()` with a regular expression to replace all occurrences of 2 or more whitespace characters with a single space.

## Translate

返回压缩了空格的字符串。

使用带有正则表达式的`String.prototype.replace（）`将所有出现的2个或多个空格字符替换为一个空格。

## Code

```js
const compactWhitespace = str => str.replace(/\s{2,}/g, ' ');
```

## Example

```js
compactWhitespace('Lorem    Ipsum'); // 'Lorem Ipsum'
compactWhitespace('Lorem \n Ipsum'); // 'Lorem Ipsum'
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
