# yesNo（-）

Returns `true` if the string is `y`/`yes` or `false` if the string is `n`/`no`.

Use `RegExp.test()` to check if the string evaluates to `y/yes` or `n/no`.
Omit the second argument, `def` to set the default answer as `no`.

## 翻译

如果字符串是 `y` 或者 `yes`，则返回 `true`；如果字符串是 `n` 或者`no`，则返回 `false`。

使用RegExp.test()检查字符串是否为y / yes或n / no。
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
