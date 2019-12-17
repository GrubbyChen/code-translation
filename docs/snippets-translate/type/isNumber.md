# isNumber

检查给定的参数是否为数字。

使用`typeof`来检查一个值是否被归类为数字原语。
为了防范“ NaN”，请检查“ val === val”（因为“ NaN”的“ typeof”等于“ number”，并且是唯一不等于其自身的值）。

## 代码

```js
const isNumber = val => typeof val === 'number' && val === val;
```

## 例子

```js
isNumber(1); // true
isNumber('1'); // false
isNumber(NaN); // false
```
