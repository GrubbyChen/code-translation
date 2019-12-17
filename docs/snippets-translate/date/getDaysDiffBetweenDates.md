# getDaysDiffBetweenDates

返回两个日期之间的差（以天为单位）。

计算两个“日期”对象之间的差异（以天为单位）。

## 代码

```js
const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);
```

## 例子

```js
getDaysDiffBetweenDates(new Date('2017-12-13'), new Date('2017-12-22')); // 9
```
