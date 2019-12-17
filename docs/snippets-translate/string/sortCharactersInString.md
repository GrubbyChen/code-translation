# sortCharactersInString

按字母顺序对字符串中的字符进行排序。

使用扩展运算符（...），Array.prototype.sort（）和String.localeCompare（）对str中的字符进行排序，并使用String.prototype.join（）进行重组。 `。

## 代码

```js
const sortCharactersInString = str => [...str].sort((a, b) => a.localeCompare(b)).join('');
```

## 例子

```js
sortCharactersInString('cabbage'); // 'aabbceg'
```
