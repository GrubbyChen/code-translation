# splitLines

Splits a multiline string into an array of lines.

Use `String.prototype.split()` and a regular expression to match line breaks and create an array.

## 翻译

将多行字符串拆分为行数组。

使用String.prototype.split（）和一个正则表达式来匹配换行符并创建一个数组。

## 代码

```js
const splitLines = str => str.split(/\r?\n/);
```

## 例子

```js
splitLines('This\nis a\nmultiline\nstring.\n'); // ['This', 'is a', 'multiline', 'string.' , '']
```
