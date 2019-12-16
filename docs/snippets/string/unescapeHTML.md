# unescapeHTML

Unescapes escaped HTML characters.

Use `String.prototype.replace()` with a regex that matches the characters that need to be unescaped, using a callback function to replace each escaped character instance with its associated unescaped character using a dictionary (object).

## Translate

转义转义的HTML字符。

将String.prototype.replace（）与正则表达式匹配，该正则表达式与需要取消转义的字符匹配，并使用回调函数使用字典（对象）将每个转义的字符实例与其关联的未转义的字符替换。

## Code

```js
const unescapeHTML = str =>
  str.replace(
    /&amp;|&lt;|&gt;|&#39;|&quot;/g,
    tag =>
      ({
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&#39;': "'",
        '&quot;': '"'
      }[tag] || tag)
  );
```

## Example

```js
unescapeHTML('&lt;a href=&quot;#&quot;&gt;Me &amp; you&lt;/a&gt;'); // '<a href="#">Me & you</a>'
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
