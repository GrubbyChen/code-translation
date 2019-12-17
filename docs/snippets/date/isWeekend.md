# isWeekend

Results in a boolean representation of a specific date.

Pass the specific date object firstly.
Use `Date.getDay()` to check weekend based on the day being returned as 0 - 6 using a modulo operation then return a boolean.

## 翻译

结果为特定日期的布尔表示形式。

首先传递特定的日期对象。
使用`Date.getDay（）`根据使用模运算返回0-6的日期来检查周末，然后返回一个布尔值。

## 代码

```js
const isWeekend = (t = new Date()) => {
  return t.getDay() % 6 === 0;
};
```

## 例子

```js
isWeekend(); // 2018-10-19 (if current date is 2018-10-18)
```
