# isNumber

检查传入的参数是否为 `number` 类型。

- 判断 `val === val` 可以排除 `NaN`（因为 `NaN` 的 `typeof` 等于 `number`，并且是唯一不等于其自身的值）。

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
