# digitize

将数字转换为数字数组。

使用扩展运算符（`...`）将数字转换为字符串以构建数组。
使用Array.prototype.map（）和parseInt（）将每个值转换为整数。

## 代码

```js
const digitize = n => [...`${n}`].map(i => parseInt(i));
```

## 例子

```js
digitize(123); // [1, 2, 3]
```
