# dayOfYear

Gets the day of the year from a `Date` object.

Use `new Date()` and `Date.prototype.getFullYear()` to get the first day of the year as a `Date` object, subtract it from the provided `date` and divide with the milliseconds in each day to get the result.
Use `Math.floor()` to appropriately round the resulting day count to an integer.

## Translate

从“日期”对象获取一年中的日期。

使用`new Date（）`和`Date.prototype.getFullYear（）`获取一年中的第一天作为`Date`对象，将其从提供的`date`中减去并除以每天的毫秒数即可得到结果。
使用`Math.floor（）`将产生的天数适当地四舍五入为整数。

## Code

```js
const dayOfYear = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
```

## Example

```js
dayOfYear(new Date()); // 272
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
