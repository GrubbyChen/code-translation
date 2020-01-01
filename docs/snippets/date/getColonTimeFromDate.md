# getColonTimeFromDate

返回格式为 `时:分:秒` 的日期字符串。

## 代码

```js
const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);
```

## 例子

```js
getColonTimeFromDate(new Date()); // "08:38:00"
```
