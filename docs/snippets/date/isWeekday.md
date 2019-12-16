# isWeekday

Results in a boolean representation of a specific date.

Pass the specific date object firstly.
Use `Date.getDay()` to check weekday by using a modulo operator and then returning a boolean.

## Translate

结果为特定日期的布尔表示形式。

首先传递特定的日期对象。
使用`Date.getDay（）`通过使用模运算符然后返回一个布尔值来检查工作日。

## Code

```js
const isWeekday = (t = new Date()) => {
  return t.getDay() % 6 !== 0;
};
```

## Example

```js
isWeekday(); // true (if current date is 2019-07-19)
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
