# stripHTMLTags

Removes HTML/XML tags from string.

Use a regular expression to remove HTML/XML tags from a string.

## Translate

从字符串中删除HTML / XML标签。

使用正则表达式从字符串中删除HTML / XML标记。

## Code

```js
const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');
```

## Example

```js
stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'); // 'lorem ipsum'
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
