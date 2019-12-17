# stripHTMLTags

Removes HTML/XML tags from string.

Use a regular expression to remove HTML/XML tags from a string.

## 翻译

从字符串中删除HTML / XML标签。

使用正则表达式从字符串中删除HTML / XML标记。

## 代码

```js
const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');
```

## 例子

```js
stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'); // 'lorem ipsum'
```
