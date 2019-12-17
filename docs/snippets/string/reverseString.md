# reverseString

Reverses a string.

Use the spread operator (`...`) and `Array.prototype.reverse()` to reverse the order of the characters in the string.
Combine characters to get a string using `String.prototype.join('')`.

## 翻译

反转字符串。

使用扩展运算符（...）和Array.prototype.reverse（）反转字符串中字符的顺序。
使用String.prototype.join（''）组合字符以获得字符串。

## 代码

```js
const reverseString = str => [...str].reverse().join('');
```

## 例子

```js
reverseString('foobar'); // 'raboof'
```
