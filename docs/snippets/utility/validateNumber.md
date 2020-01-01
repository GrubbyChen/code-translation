# validateNumber

检查传入的参数是否是数字。

## 代码

```js
const validateNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;
```

## 例子

```js
validateNumber('10'); // true
```
