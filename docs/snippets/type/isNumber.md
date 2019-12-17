# isNumber

Checks if the given argument is a number.

Use `typeof` to check if a value is classified as a number primitive. 
To safeguard against `NaN`, check if `val === val` (as `NaN` has a `typeof` equal to `number` and is the only value not equal to itself).

## 翻译

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
