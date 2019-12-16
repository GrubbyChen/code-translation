# findLast

Returns the last element for which the provided function returns a truthy value.

Use `Array.prototype.filter()` to remove elements for which `fn` returns falsy values, `Array.prototype.pop()` to get the last one.

## Translate

返回提供的函数为其返回真值的最后一个元素。

使用Array.prototype.filter（）删除fn返回虚假值的元素，Array.prototype.pop（）获取最后一个元素。

## Code

```js
const findLast = (arr, fn) => arr.filter(fn).pop();
```

## Example

```js
findLast([1, 2, 3, 4], n => n % 2 === 1); // 3
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
