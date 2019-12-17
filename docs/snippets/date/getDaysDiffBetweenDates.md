# getDaysDiffBetweenDates

Returns the difference (in days) between two dates.

Calculate the difference (in days) between two `Date` objects.

## 翻译

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
