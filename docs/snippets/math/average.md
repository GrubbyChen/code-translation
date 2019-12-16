# average

Returns the average of two or more numbers.

Use `Array.prototype.reduce()` to add each value to an accumulator, initialized with a value of `0`, divide by the `length` of the array.

## Translate

返回两个或多个数字的平均值。

使用Array.prototype.reduce（）将每个值添加到累加器中，并以值0初始化，再除以数组的长度。

## Code

```js
const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;
```

## Example

```js
average(...[1, 2, 3]); // 2
average(1, 2, 3); // 2
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
