# words

Converts a given string into an array of words.

Use `String.prototype.split()` with a supplied pattern (defaults to non-alpha as a regexp) to convert to an array of strings. Use `Array.prototype.filter()` to remove any empty strings.
Omit the second argument to use the default regexp.

## 翻译

将给定的字符串转换为单词数组。

使用带有提供的模式的String.prototype.split()(默认为非alpha的正则表达式)来转换为字符串数组。使用Array.prototype.filter()删除所有空字符串。
省略第二个参数以使用默认的regexp。

## 代码

```js
const words = (str, pattern = /[^a-zA-Z-]+/) => str.split(pattern).filter(Boolean);
```

## 例子

```js
words('I love javaScript!!'); // ["I", "love", "javaScript"]
words('python, javaScript & coffee'); // ["python", "javaScript", "coffee"]
```
