# coalesce

Returns the first non-null/undefined argument.

Use `Array.prototype.find()` to return the first non `null`/`undefined` argument.

## Translate

返回第一个非null / undefined参数。

使用Array.prototype.find（）返回第一个非null / undefined参数。

## Code

```js
const coalesce = (...args) => args.find(_ => ![undefined, null].includes(_));
```

## Example

```js
coalesce(null, undefined, '', NaN, 'Waldo'); // ""
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
