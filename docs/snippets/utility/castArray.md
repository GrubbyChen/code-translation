# castArray

Casts the provided value as an array if it's not one.

Use `Array.prototype.isArray()` to determine if `val` is an array and return it as-is or encapsulated in an array accordingly.

## Translate

如果提供的值不是一个，则将其强制转换为数组。

使用Array.prototype.isArray（）确定val是一个数组，然后将其原样返回或封装在数组中。

## Code

```js
const castArray = val => (Array.isArray(val) ? val : [val]);
```

## Example

```js
castArray('foo'); // ['foo']
castArray([1]); // [1]
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>