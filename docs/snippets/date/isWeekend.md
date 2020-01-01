# isWeekend

判断今天是否是周末。

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
