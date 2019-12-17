# reverseString

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
