# round

Rounds a number to a specified amount of digits.

Use `Math.round()` and template literals to round the number to the specified number of digits.
Omit the second argument, `decimals` to round to an integer.

## 翻译

将数字四舍五入到指定的位数。

使用`Math.round（）`和模板文字将数字四舍五入到指定的数字位数。
省略第二个参数“ decimals”舍入为整数。

## 代码

```js
const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);
```

## 例子

```js
round(1.005, 2); // 1.01
```
