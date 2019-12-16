# geometricProgression

Initializes an array containing the numbers in the specified range where `start` and `end` are inclusive and the ratio between two terms is `step`.
Returns an error if `step` equals `1`.

Use `Array.from()`, `Math.log()` and `Math.floor()` to create an array of the desired length, `Array.prototype.map()` to fill with the desired values in a range.
Omit the second argument, `start`, to use a default value of `1`.
Omit the third argument, `step`, to use a default value of `2`.

## Translate

初始化一个数组，该数组包含指定范围内的数字，其中“ start”和“ end”包括端值，并且两项之间的比率为“ step”。
如果step等于1，则返回错误。

使用Array.from（），Math.log（）和Math.floor（）创建所需长度的数组，Array.prototype.map（）来填充所需长度的数组。范围。
省略第二个参数“ start”以使用默认值“ 1”。
省略第三个参数“ step”以使用默认值“ 2”。

## Code

```js
const geometricProgression = (end, start = 1, step = 2) =>
  Array.from({ length: Math.floor(Math.log(end / start) / Math.log(step)) + 1 }).map(
    (v, i) => start * step ** i
  );
```

## Example

```js
geometricProgression(256); // [1, 2, 4, 8, 16, 32, 64, 128, 256]
geometricProgression(256, 3); // [3, 6, 12, 24, 48, 96, 192]
geometricProgression(256, 1, 4); // [1, 4, 16, 64, 256]
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
