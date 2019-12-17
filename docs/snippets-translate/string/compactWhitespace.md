# compactWhitespace

返回压缩了空格的字符串。

使用带有正则表达式的`String.prototype.replace（）`将所有出现的2个或多个空格字符替换为一个空格。

## 代码

```js
const compactWhitespace = str => str.replace(/\s{2,}/g, ' ');
```

## 例子

```js
compactWhitespace('Lorem    Ipsum'); // 'Lorem Ipsum'
compactWhitespace('Lorem \n Ipsum'); // 'Lorem Ipsum'
```
