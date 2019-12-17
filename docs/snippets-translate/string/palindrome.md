# palindrome

如果给定的字符串是回文，则返回“ true”，否则返回“ false”。

将字符串转换为String.prototype.toLowerCase（）并使用String.prototype.replace（）从其中删除非字母数字字符。
然后，使用传播运算符（...）将字符串拆分为各个字符，即Array.prototype.reverse（），String.prototype.join（''）并将其与原始的，未反转的字符进行比较字符串，将其转换为`String.prototype.toLowerCase（）`之后。

## 代码

```js
const palindrome = str => {
  const s = str.toLowerCase().replace(/[\W_]/g, '');
  return s === [...s].reverse().join('');
};
```

## 例子

```js
palindrome('taco cat'); // true
```
