# maxDate

返回给定日期的最大值。

将 ES6 语法与 `Math.max` 一起使用以查找最大日期值，`new Date()` 将其转换为`Date` 对象。

## 代码

```js
const maxDate = dates => new Date(Math.max(...dates));
```

## 例子

```js
const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
maxDate(array); // 2018-03-11T22:00:00.000Z
```
