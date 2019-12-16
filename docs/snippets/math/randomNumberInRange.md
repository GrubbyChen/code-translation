# randomNumberInRange

Returns a random number in the specified range.

Use `Math.random()` to generate a random value, map it to the desired range using multiplication.

## Translate

返回指定范围内的随机数。

使用`Math.random（）`生成一个随机值，使用乘法将其映射到所需范围。

## Code

```js
const randomNumberInRange = (min, max) => Math.random() * (max - min) + min;
```

## Example

```js
randomNumberInRange(2, 10); // 6.0211363285087005
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
