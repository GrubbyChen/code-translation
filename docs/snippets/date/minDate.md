# minDate

Returns the minimum of the given dates.

Use the ES6 spread syntax to find the minimum date value, `new Date()` to convert it to a `Date` object.

## Translate

返回给定日期的最小值。

使用ES6扩展语法查找最小日期值，`new Date（）`将其转换为`Date`对象。

## Code

```js
const minDate = dates => new Date(Math.min(...dates));
```

## Example

```js
const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
minDate(array); // 2016-01-08T22:00:00.000Z
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
