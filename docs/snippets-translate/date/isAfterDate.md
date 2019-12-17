# isAfterDate

检查日期是否在另一个日期之后。

使用大于运算符（`>`）检查第一个日期是否在第二个日期之后。

## 代码

```js
const isAfterDate = (dateA, dateB) => dateA > dateB;
```

## 例子

```js
isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); // true
```
