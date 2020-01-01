# toDecimalMark

将浮点运算转换为 [Decimal mark](https://en.wikipedia.org/wiki/Decimal_mark)形式，它将数值转换成逗号分割的字符串。

## 代码

```js
const toDecimalMark = num => num.toLocaleString('en-US');
```

## 例子

```js
toDecimalMark(12305030388.9087); // "12,305,030,388.909"
```
