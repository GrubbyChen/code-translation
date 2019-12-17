# tomorrow

结果以字符串形式表示明天的日期。

使用`new Date（）`获取当前日期，使用`Date.getDate（）`递增1，并使用`Date.setDate（）`将值设置为结果。
使用`Date.prototype.toISOString（）`返回`yyyy-mm-dd`格式的字符串。

## 代码

```js
const tomorrow = () => {
  let t = new Date();
  t.setDate(t.getDate() + 1);
  return t.toISOString().split('T')[0];
};
```

## 例子

```js
tomorrow(); // 2018-10-19 (if current date is 2018-10-18)
```
