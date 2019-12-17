# isNegativeZero

检查给定值是否等于负零（“ -0”）。

检查传递的值是否等于“ 0”，以及“ 1”除以该值是否等于“ -Infinity”。

## 代码

```js
const isNegativeZero = val => val === 0 && 1 / val === -Infinity;
```

## 例子

```js
isNegativeZero(-0); // true
isNegativeZero(0); // false
```
