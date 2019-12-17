# isBeforeDate

Check if a date is before another date.

Use the less than operator (`<`) to check if the first date comes before the second one.

## 翻译

检查某个日期是否早于另一个日期。

使用小于运算符（`<`）检查第一个日期是否早于第二个日期。

## 代码

```js
const isBeforeDate = (dateA, dateB) => dateA < dateB;
```

## 例子

```js
isBeforeDate(new Date(2010, 10, 20), new Date(2010, 10, 21)); // true
```
