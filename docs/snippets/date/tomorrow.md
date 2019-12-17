# tomorrow

Results in a string representation of tomorrow's date.

Use `new Date()` to get the current date, increment by one using `Date.getDate()` and set the value to the result using `Date.setDate()`. 
Use `Date.prototype.toISOString()` to return a string in `yyyy-mm-dd` format.

## 翻译

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
