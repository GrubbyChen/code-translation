# indentString

Indents each line in the provided string.

Use `String.replace` and a regular expression to add the character specified by `indent` `count` times at the start of each line.
Omit the third parameter, `indent`, to use a default indentation character of `' '`.

## Translate

缩进提供的字符串中的每一行。

使用String.replace和正则表达式在每行的开头添加由indent`count`次指定的字符。
省略第三个参数`indent`，以使用默认的缩进字符'''。

## Code

```js
const indentString = (str, count, indent = ' ') => str.replace(/^/gm, indent.repeat(count));
```

## Example

```js
indentString('Lorem\nIpsum', 2); // '  Lorem\n  Ipsum'
indentString('Lorem\nIpsum', 2, '_'); // '__Lorem\n__Ipsum'
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
