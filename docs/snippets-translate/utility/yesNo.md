# yesNo

如果字符串是`y` /`yes`，则返回`true`；如果字符串是`n` /`no`，则返回false。

使用RegExp.test（）检查字符串是否为y / yes或n / no。
省略第二个参数“ def”，将默认答案设置为“ no”。

## 代码

```js
const yesNo = (val, def = false) =>
  /^(y|yes)$/i.test(val) ? true : /^(n|no)$/i.test(val) ? false : def;
```

## 例子

```js
yesNo('Y'); // true
yesNo('yes'); // true
yesNo('No'); // false
yesNo('Foo', true); // true
```
