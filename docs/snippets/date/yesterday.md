# yesterday

Results in a string representation of yesterday's date.

Use `new Date()` to get the current date, decrement by one using `Date.getDate()` and set the value to the result using `Date.setDate()`.
Use `Date.prototype.toISOString()` to return a string in `yyyy-mm-dd` format.

## Translate

结果以字符串形式表示昨天的日期。

使用`new Date（）`获取当前日期，使用`Date.getDate（）`减一，并使用`Date.setDate（）`将值设置为结果。
使用`Date.prototype.toISOString（）`返回`yyyy-mm-dd`格式的字符串。

## Code

```js
const yesterday = () => {
  let t = new Date();
  t.setDate(t.getDate() - 1);
  return t.toISOString().split('T')[0];
};
```

## Example

```js
yesterday(); // 2018-10-17 (if current date is 2018-10-18)
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
