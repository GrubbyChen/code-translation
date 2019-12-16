# coalesceFactory

Returns a customized coalesce function that returns the first argument that returns `true` from the provided argument validation function.

Use `Array.prototype.find()` to return the first argument that returns `true` from the provided argument validation function.

## Translate

返回一个自定义的合并函数，该函数返回从提供的参数验证函数返回“ true”的第一个参数。

使用Array.prototype.find（）返回第一个从提供的参数验证函数返回true的参数。

## Code

```js
const coalesceFactory = valid => (...args) => args.find(valid);
```

## Example

```js
const customCoalesce = coalesceFactory(_ => ![null, undefined, '', NaN].includes(_));
customCoalesce(undefined, null, NaN, '', 'Waldo'); // "Waldo"
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
