# toSafeInteger

Converts a value to a safe integer.

Use `Math.max()` and `Math.min()` to find the closest safe value.
Use `Math.round()` to convert to an integer.

## Translate

将值转换为安全整数。

使用`Math.max（）`和`Math.min（）`查找最接近的安全值。
使用`Math.round（）`转换为整数。

## Code

```js
const toSafeInteger = num =>
  Math.round(Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER));
```

## Example

```js
toSafeInteger('3.2'); // 3
toSafeInteger(Infinity); // 9007199254740991
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
