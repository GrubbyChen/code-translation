# validateNumber

如果给定值是数字，则返回“ true”，否则返回“ false”。

将`！isNaN（）`与`parseFloat（）`结合使用以检查参数是否为数字。
使用`isFinite（）`检查数字是否有限。
使用Number（）检查强制是否成立。

## 代码

```js
const validateNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;
```

## 例子

```js
validateNumber('10'); // true
```
