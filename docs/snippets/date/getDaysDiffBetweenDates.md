# getDaysDiffBetweenDates

Returns the difference (in days) between two dates.

Calculate the difference (in days) between two `Date` objects.

## Translate

返回两个日期之间的差（以天为单位）。

计算两个“日期”对象之间的差异（以天为单位）。

## Code

```js
const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);
```

## Example

```js
getDaysDiffBetweenDates(new Date('2017-12-13'), new Date('2017-12-22')); // 9
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
