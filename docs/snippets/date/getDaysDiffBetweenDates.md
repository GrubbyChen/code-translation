# getDaysDiffBetweenDates

返回两个日期间隔的天数。

## 代码

```js
const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);
```

## 例子

```js
getDaysDiffBetweenDates(new Date('2017-12-13'), new Date('2017-12-22')); // 9
```
