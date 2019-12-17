# isAnagram

检查一个字符串是否是另一个字符串的字谜（不区分大小写，忽略空格，标点符号和特殊字符）。

使用带有适当正则表达式的String.toLowerCase（），String.prototype.replace（）删除不必要的字符，String.prototype.split（），Array.prototype.sort（）和在两个字符串上使用“ Array.prototype.join（''）对其进行规范化，然后检查其规范化形式是否相等。

## 代码

```js
const isAnagram = (str1, str2) => {
  const normalize = str =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, '')
      .split('')
      .sort()
      .join('');
  return normalize(str1) === normalize(str2);
};
```

## 例子

```js
isAnagram('iceman', 'cinema'); // true
```
