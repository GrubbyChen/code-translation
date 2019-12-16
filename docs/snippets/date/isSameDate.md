# isSameDate

Check if a date is the same as another date.

Use `Date.prototype.toISOString()` and strict equality checking (`===`) to check if the first date is the same as the second one.

## Translate

检查一个日期是否与另一个日期相同。

使用`Date.prototype.toISOString（）`和严格相等性检查（`===`）来检查第一个日期是否与第二个相同。

## Code

```js
const isSameDate = (dateA, dateB) => dateA.toISOString() === dateB.toISOString();
```

## Example

```js
isSameDate(new Date(2010, 10, 20), new Date(2010, 10, 20)); // true
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
