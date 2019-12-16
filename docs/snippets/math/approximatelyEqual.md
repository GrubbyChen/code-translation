# approximatelyEqual

Checks if two numbers are approximately equal to each other.

Use `Math.abs()` to compare the absolute difference of the two values to `epsilon`.
Omit the third parameter, `epsilon`, to use a default value of `0.001`.

## Translate

检查两个数字是否彼此近似相等。

使用`Math.abs（）`比较两个值的绝对差和`epsilon`。
省略第三个参数“ε”，以使用默认值“ 0.001”。

## Code

```js
const approximatelyEqual = (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon;
```

## Example

```js
approximatelyEqual(Math.PI / 2.0, 1.5708); // true
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
