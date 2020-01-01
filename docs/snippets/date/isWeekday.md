# isWeekday

判断今天是否是工作日。

## 代码

```js
const isWeekday = (t = new Date()) => {
  return t.getDay() % 6 !== 0;
};
```

## 例子

```js
isWeekday(); // true (if current date is 2019-07-19)
```
