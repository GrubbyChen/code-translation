# inRange

Checks if the given number falls within the given range.

Use arithmetic comparison to check if the given number is in the specified range.
If the second parameter, `end`, is not specified, the range is considered to be from `0` to `start`.

## Translate

检查给定数字是否在给定范围内。

使用算术比较来检查给定数字是否在指定范围内。
如果未指定第二个参数“ end”，则范围被认为是从“ 0”到“ start”。

## Code

```js
const inRange = (n, start, end = null) => {
  if (end && start > end) [end, start] = [start, end];
  return end == null ? n >= 0 && n < start : n >= start && n < end;
};
```

## Example

```js
inRange(3, 2, 5); // true
inRange(3, 4); // true
inRange(2, 3, 5); // false
inRange(3, 2); // false
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
