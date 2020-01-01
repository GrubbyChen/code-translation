# isSameDate

检查一个日期是否与另一个日期相同。

使用 `Date.prototype.toISOString()` 和严格相等性检查（`===`）来检查第一个日期是否与第二个相同。

## 代码

```js
const isSameDate = (dateA, dateB) => dateA.toISOString() === dateB.toISOString();
```

## 例子

```js
isSameDate(new Date(2010, 10, 20), new Date(2010, 10, 20)); // true
```
