# fromCamelCase

Converts a string from camelcase.

Use `String.prototype.replace()` to remove underscores, hyphens, and spaces and convert words to camelcase.
Omit the second argument to use a default `separator` of `_`.

## 翻译

从驼峰式转换字符串。

使用String.prototype.replace()删除下划线，连字符和空格，并将单词转换为驼峰式。
省略第二个参数以使用默认的_分隔符。

## 代码

```js
const fromCamelCase = (str, separator = '_') =>
  str
    .replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
    .toLowerCase();
```

## 例子

```js
fromCamelCase('someDatabaseFieldName', ' '); // 'some database field name'
fromCamelCase('someLabelThatNeedsToBeCamelized', '-'); // 'some-label-that-needs-to-be-camelized'
fromCamelCase('someJavascriptProperty', '_'); // 'some_javascript_property'
```
