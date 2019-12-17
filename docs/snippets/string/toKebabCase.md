# toKebabCase

Converts a string to kebab case.

Break the string into words and combine them adding `-` as a separator, using a regexp.

## 翻译

将字符串转换为烤肉串大小写。

将字符串分解为单词，并使用正则表达式将它们加起来以分隔符“-”组合起来。

## 代码

```js
const toKebabCase = str =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-');
```

## 例子

```js
toKebabCase('camelCase'); // 'camel-case'
toKebabCase('some text'); // 'some-text'
toKebabCase('some-mixed_string With spaces_underscores-and-hyphens'); // 'some-mixed-string-with-spaces-underscores-and-hyphens'
toKebabCase('AllThe-small Things'); // "all-the-small-things"
toKebabCase('IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML'); // "i-am-listening-to-fm-while-loading-different-url-on-my-browser-and-also-editing-xml-and-html"
```
