# randomIntegerInRange

Returns a random integer in the specified range.

Use `Math.random()` to generate a random number and map it to the desired range, using `Math.floor()` to make it an integer.

## Translate

返回指定范围内的随机整数。

使用`Math.random（）`生成一个随机数并将其映射到所需范围，使用`Math.floor（）`使其为整数。

## Code

```js
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
```

## Example

```js
randomIntegerInRange(0, 5); // 2
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
