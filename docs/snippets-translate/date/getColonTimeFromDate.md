# getColonTimeFromDate

从“日期”对象返回格式为“ HH：MM：SS”的字符串。

使用`Date.prototype.toTimeString（）`和`String.prototype.slice（）`获取给定`Date`对象的`HH：MM：SS`部分。

## 代码

```js
const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);
```

## 例子

```js
getColonTimeFromDate(new Date()); // "08:38:00"
```
