# maxDate

Returns the maximum of the given dates.

Use the ES6 spread syntax with `Math.max` to find the maximum date value, `new Date()` to convert it to a `Date` object.

## Translate

返回给定日期的最大值。

将ES6扩展语法与“ Math.max”一起使用以查找最大日期值，“ new Date（）”将其转换为“ Date”对象。

## Code

```js
const maxDate = dates => new Date(Math.max(...dates));
```

## Example

```js
const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
maxDate(array); // 2018-03-11T22:00:00.000Z
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
