# escapeHTML

转义用于HTML的字符串。

使用String.prototype.replace（）和正则表达式匹配需要转义的字符，并使用回调函数通过字典（对象）将每个字符实例替换为其关联的转义字符。

## 代码

```js
const escapeHTML = str =>
  str.replace(
    /[&<>'"]/g,
    tag =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
  );
```

## 例子

```js
escapeHTML('<a href="#">Me & you</a>'); // '&lt;a href=&quot;#&quot;&gt;Me &amp; you&lt;/a&gt;'
```
