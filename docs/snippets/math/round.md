# round

将数字四舍五入到指定的位数。

- 使用 `Math.round()` 和模板文字将数字四舍五入到指定的数字位数。
- 第二个参数 `decimals` 为指定位数，不传则四舍五入为整数。

## 代码

```js
const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);
```

## 例子

```js
round(1.005, 2); // 1.01
```
