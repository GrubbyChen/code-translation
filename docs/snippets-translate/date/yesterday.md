# yesterday

结果以字符串形式表示昨天的日期。

使用`new Date（）`获取当前日期，使用`Date.getDate（）`减一，并使用`Date.setDate（）`将值设置为结果。
使用`Date.prototype.toISOString（）`返回`yyyy-mm-dd`格式的字符串。

## 代码

```js
const yesterday = () => {
  let t = new Date();
  t.setDate(t.getDate() - 1);
  return t.toISOString().split('T')[0];
};
```

## 例子

```js
yesterday(); // 2018-10-17 (if current date is 2018-10-18)
```
